"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

/* Dashboard: İstatistikler (Gerçek veriler Supabase sorguları ile) */
function DashboardContent() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    dailyActive: 0,
    newRegistrations: 0,
    bannedAccounts: 0,
    visitors: 0,
    revenue: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      // Toplam kullanıcı sayısı. (Supabase sorgusuyla count döndürür.)
      const { count: totalUsers } = await supabase
        .from("users")
        .select("*", { head: true, count: "exact" });

      // Banlı hesaplar
      const { count: bannedAccounts } = await supabase
        .from("users")
        .select("*", { head: true, count: "exact" })
        .eq("banned", true);

      // Son 24 saat içinde kayıt olan kullanıcılar
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const { count: newRegistrations } = await supabase
        .from("users")
        .select("*", { head: true, count: "exact" })
        .gte("created_at", oneDayAgo);

      // Son 24 saatte giriş yapan kullanıcılar (varsayılan olarak "last_login" sütununu bekliyoruz)
      const { count: dailyActive } = await supabase
        .from("users")
        .select("*", { head: true, count: "exact" })
        .gte("last_login", oneDayAgo);

      // Ziyaretçi ve gelir verileri için demo değerler (gerçek veri ile güncellenmeli)
      setStats({
        totalUsers: totalUsers || 0,
        dailyActive: dailyActive || 0,
        newRegistrations: newRegistrations || 0,
        bannedAccounts: bannedAccounts || 0,
        visitors: 100,
        revenue: 2000,
      });
    }
    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-xl font-bold">Toplam Kullanıcı</h3>
        <p className="text-3xl">{stats.totalUsers}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-xl font-bold">Günlük Aktif Kullanıcı</h3>
        <p className="text-3xl">{stats.dailyActive}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-xl font-bold">Yeni Kayıtlar</h3>
        <p className="text-3xl">{stats.newRegistrations}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-xl font-bold">Banlı Hesaplar</h3>
        <p className="text-3xl">{stats.bannedAccounts}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-xl font-bold">Anlık Ziyaretçi</h3>
        <p className="text-3xl">{stats.visitors}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-xl font-bold">Gelir</h3>
        <p className="text-3xl">{stats.revenue} ₺</p>
      </div>
    </div>
  );
}

/* Kullanıcı Yönetimi: Listeleme, ekleme, güncelleme ve silme */
function AdminUsersContent() {
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [feedbacks, setFeedbacks] = useState("")
 
  // Yeni kullanıcı ekleme için state'ler
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState("user");

  useEffect(() => {
    async function fetchUsers() {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        setErrorMessage("Kullanıcıları çekerken hata: " + error.message);
      } else {
        setUsers(data || []);
      }
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    if (!user) return false;
    return (
      (user.name || "").toLowerCase().includes(userSearch.toLowerCase()) ||
      (user.email || "").toLowerCase().includes(userSearch.toLowerCase())
    );
  });

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const toggleBanUser = async (userId, currentBanStatus) => {
    const { error } = await supabase
      .from("users")
      .update({ banned: !currentBanStatus })
      .eq("id", userId);
    if (!error) {
      setUsers(
        users.map((u) => (u.id === userId ? { ...u, banned: !currentBanStatus } : u))
      );
      if (selectedUser?.id === userId) {
        setSelectedUser({ ...selectedUser, banned: !currentBanStatus });
      }
    }
  };

  const toggleActiveStatus = async (userId, currentStatus) => {
    const { error } = await supabase
      .from("users")
      .update({ is_active: !currentStatus })
      .eq("id", userId);
    if (!error) {
      setUsers(
        users.map((u) => (u.id === userId ? { ...u, is_active: !currentStatus } : u))
      );
      if (selectedUser?.id === userId) {
        setSelectedUser({ ...selectedUser, is_active: !currentStatus });
      }
    }
  };

  const updateUserRole = async (userId, newRole) => {
    const { error } = await supabase
      .from("users")
      .update({ role: newRole })
      .eq("id", userId);
    if (!error) {
      setUsers(
        users.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
      );
      if (selectedUser?.id === userId) {
        setSelectedUser({ ...selectedUser, role: newRole });
      }
    }
  };

  const addUser = async () => {
    if (
      newUserName.trim() === "" ||
      newUserEmail.trim() === "" ||
      newUserPassword.trim() === ""
    ) {
      alert("Lütfen isim, email ve şifre alanlarını doldurun!");
      return;
    }

    // Email kontrolü
    const { data: existingUsers } = await supabase
      .from("users")
      .select("*")
      .eq("email", newUserEmail.trim());
    if (existingUsers && existingUsers.length > 0) {
      alert("Bu email adresi zaten kullanılıyor!");
      return;
    }

    const { data, error } = await supabase
      .from("users")
      .insert(
        [{
          name: newUserName.trim(),
          email: newUserEmail.trim(),
          password: newUserPassword.trim(),
          role: newUserRole,
          banned: false,
          is_active: true,
        }],
        { returning: "representation" }
      );

    if (!error) {
      setUsers([...users, ...data]);
      setNewUserName("");
      setNewUserEmail("");
      setNewUserPassword("");
      setNewUserRole("user");
      alert("Kullanıcı başarıyla eklendi!");
    }
  };

  const deleteUser = async (userId) => {
    if (!confirm("Bu kullanıcıyı silmek istediğinize emin misiniz?")) return;
    const { error } = await supabase.from("users").delete().eq("id", userId);
    if (!error) {
      setUsers(users.filter((u) => u.id !== userId));
      if (selectedUser?.id === userId) {
        setSelectedUser(null);
      }
      alert("Kullanıcı başarıyla silindi!");
    }
  };
  // Geri bildirimleri çek
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase.from("feedback").select("*");
      if (error) {
        setFeedbackError(error.message);
      } else {
        setFeedbacks(data);
      }
      setFeedbackLoading(false);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="p-4 bg-gray-800 rounded mb-6">
        <h2 className="text-2xl font-bold mb-4">Yeni Kullanıcı Ekle</h2>
        <div className="mb-4">
          <label className="block">İsim:</label>
          <input
            type="text"
            placeholder="Kullanıcı ismi"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">Email:</label>
          <input
            type="email"
            placeholder="Kullanıcı email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">Şifre:</label>
          <input
            type="password"
            placeholder="Kullanıcı şifresi"
            value={newUserPassword}
            onChange={(e) => setNewUserPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">Rol:</label>
          <select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>
        <button onClick={addUser} className="bg-blue-500 p-2 rounded">
          Kullanıcı Ekle
        </button>
      </div>
      <input
        type="text"
        placeholder="Kullanıcı ara..."
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded mb-4"
      />
      <div>
        {filteredUsers.length === 0 ? (
          <p>Kullanıcı bulunamadı.</p>
        ) : (
          <ul>
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className="p-4 bg-gray-800 rounded mb-2 cursor-pointer hover:bg-gray-700"
                onClick={() => handleSelectUser(user)}
              >
                <div>
                  <p className="font-bold">
                    {user.name || "Belirtilmemiş"} ({user.email || "Belirtilmemiş"})
                  </p>
                  <p>Rol: {user.role}</p>
                  <p>
                    Durum: {user.banned ? "Banlı" : "Normal"} /{" "}
                    {user.is_active ? "Aktif" : "Pasif"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedUser && (
        <div className="p-4 bg-gray-800 rounded mt-4">
          <h2 className="text-2xl font-bold mb-2">Kullanıcı Detayları</h2>
          <p>
            <strong>ID:</strong> {selectedUser.id}
          </p>
          <p>
            <strong>İsim:</strong> {selectedUser.name || "Belirtilmemiş"}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser.email || "Belirtilmemiş"}
          </p>
          <p>
            <strong>Rol:</strong> {selectedUser.role}
          </p>
          <p>
            <strong>Kayıt Tarihi:</strong>{" "}
            {selectedUser.created_at
              ? new Date(selectedUser.created_at).toLocaleString()
              : "Bilinmiyor"}
          </p>
          <p>
            <strong>Ban Durumu:</strong> {selectedUser.banned ? "Banlı" : "Normal"}
          </p>
          <p>
            <strong>Aktif Durum:</strong> {selectedUser.is_active ? "Aktif" : "Pasif"}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              onClick={() =>
                toggleBanUser(selectedUser.id, selectedUser.banned)
              }
              className="p-2 bg-red-500 rounded"
            >
              {selectedUser.banned ? "Banı Kaldır" : "Banla"}
            </button>
            <button
              onClick={() =>
                toggleActiveStatus(selectedUser.id, selectedUser.is_active)
              }
              className="p-2 bg-gray-600 rounded"
            >
              {selectedUser.is_active ? "Pasif Yap" : "Aktif Yap"}
            </button>
            <button
              onClick={() =>
                updateUserRole(
                  selectedUser.id,
                  prompt("Yeni rol:", selectedUser.role) || selectedUser.role
                )
              }
              className="p-2 bg-green-600 rounded"
            >
              Rol Değiştir
            </button>
            <button
              onClick={() => deleteUser(selectedUser.id)}
              className="p-2 bg-red-700 rounded"
            >
              Kullanıcıyı Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* İçerik Yönetimi: Yazı ekleme, listeleme ve silme */
function AdminContentManagement() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [searchPost, setSearchPost] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error)
        setError("Blog yazıları çekilirken hata: " + error.message);
      else setPosts(data || []);
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (!post) return false;
    return (
      (post.title || "").toLowerCase().includes(searchPost.toLowerCase()) ||
      (post.content || "").toLowerCase().includes(searchPost.toLowerCase())
    );
  });

  const addPost = async () => {
    if (newPostTitle.trim() === "" || newPostContent.trim() === "") {
      alert("Başlık ve içerik boş olamaz.");
      return;
    }
    const { data, error } = await supabase
      .from("blog_posts")
      .insert([{ title: newPostTitle, content: newPostContent }], {
        returning: "representation",
      });
    if (error) alert("Yazı eklenirken hata: " + error.message);
    else {
      setPosts([...(data || []), ...posts]);
      setNewPostTitle("");
      setNewPostContent("");
    }
  };

  const deletePost = async (postId) => {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", postId);
    if (error) alert("Yazı silinirken hata: " + error.message);
    else {
      setPosts(posts.filter((p) => p.id !== postId));
      if (selectedPost?.id === postId) setSelectedPost(null);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="p-4 bg-gray-800 rounded mb-6">
        <h2 className="text-2xl font-bold mb-4">Yeni Yazı Ekle</h2>
        <input
          type="text"
          placeholder="Başlık"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-4"
        />
        <textarea
          placeholder="İçerik"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-4"
          rows="4"
        />
        <button onClick={addPost} className="p-2 bg-blue-500 rounded">
          Yazıyı Ekle
        </button>
      </div>
      <input
        type="text"
        placeholder="Yazı ara..."
        value={searchPost}
        onChange={(e) => setSearchPost(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded mb-4"
      />
      <div>
        {filteredPosts.length === 0 ? (
          <p>Yazı bulunamadı.</p>
        ) : (
          <ul>
            {filteredPosts.map((post) => (
              <li
                key={post.id}
                className="p-4 bg-gray-800 rounded mb-2 cursor-pointer hover:bg-gray-700"
                onClick={() => setSelectedPost(post)}
              >
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>{post.content.substring(0, 100)}...</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedPost && (
        <div className="p-4 bg-gray-800 rounded mt-4">
          <h2 className="text-2xl font-bold mb-2">Yazı Detay</h2>
          <p>
            <strong>ID:</strong> {selectedPost.id}
          </p>
          <p>
            <strong>Başlık:</strong> {selectedPost.title}
          </p>
          <p>
            <strong>İçerik:</strong> {selectedPost.content}
          </p>
          <div className="mt-4">
            <button
              onClick={() => deletePost(selectedPost.id)}
              className="p-2 bg-red-700 rounded"
            >
              Yazıyı Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Yorum Yönetimi: Yorumları listeleme ve silme */
function AdminCommentsManagement() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [searchComment, setSearchComment] = useState("");
  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });
      if (error)
        setError("Yorumlar çekilirken hata: " + error.message);
      else setComments(data || []);
    }
    fetchComments();
  }, []);

  const filteredComments = comments.filter((comment) => {
    if (!comment) return false;
    return (comment.content || "")
      .toLowerCase()
      .includes(searchComment.toLowerCase());
  });

  const deleteComment = async (commentId) => {
    if (!confirm("Yorumu silmek istediğinize emin misiniz?")) return;
    const { error } = await supabase
      .from("comments")
      .delete()
      .eq("id", commentId);
    if (error) alert("Yorum silinirken hata: " + error.message);
    else setComments(comments.filter((c) => c.id !== commentId));
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Yorum ara..."
        value={searchComment}
        onChange={(e) => setSearchComment(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded mb-4"
      />
      <div>
        {filteredComments.length === 0 ? (
          <p>Yorum bulunamadı.</p>
        ) : (
          <ul>
            {filteredComments.map((comment) => (
              <li
                key={comment.id}
                className="p-4 bg-gray-800 rounded mb-2 cursor-pointer hover:bg-gray-700"
                onClick={() => setSelectedComment(comment)}
              >
                <p>{comment.content.substring(0, 100)}...</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedComment && (
        <div className="p-4 bg-gray-800 rounded mt-4">
          <h2 className="text-2xl font-bold mb-2">Yorum Detay</h2>
          <p>
            <strong>ID:</strong> {selectedComment.id}
          </p>
          <p>
            <strong>İçerik:</strong> {selectedComment.content}
          </p>
          <div className="mt-4">
            <button
              onClick={() => deleteComment(selectedComment.id)}
              className="p-2 bg-red-700 rounded"
            >
              Yorumu Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Oyun Yönetimi: Oyun ekleme, listeleme ve silme */
function AdminGamesManagement() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [searchGame, setSearchGame] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [newGameName, setNewGameName] = useState("");
  const [newGamePrice, setNewGamePrice] = useState("");

  useEffect(() => {
    async function fetchGames() {
      const { data, error } = await supabase
        .from("games")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) setError("Oyunlar çekilirken hata: " + error.message);
      else setGames(data || []);
    }
    fetchGames();
  }, []);

  const filteredGames = games.filter((game) => {
    if (!game) return false;
    return (game.name || "")
      .toLowerCase()
      .includes(searchGame.toLowerCase());
  });

  const addGame = async () => {
    if (newGameName.trim() === "" || newGamePrice.trim() === "") {
      alert("Oyun adı ve fiyatı boş olamaz.");
      return;
    }
    const { data, error } = await supabase
      .from("games")
      .insert(
        [{ name: newGameName, price: parseFloat(newGamePrice) }],
        { returning: "representation" }
      );
    if (error) alert("Oyun eklenirken hata: " + error.message);
    else {
      setGames([...(data || []), ...games]);
      setNewGameName("");
      setNewGamePrice("");
    }
  };

  const deleteGame = async (gameId) => {
    if (!confirm("Bu oyunu silmek istediğinize emin misiniz?")) return;
    const { error } = await supabase
      .from("games")
      .delete()
      .eq("id", gameId);
    if (error) alert("Oyun silinirken hata: " + error.message);
    else setGames(games.filter((g) => g.id !== gameId));
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="p-4 bg-gray-800 rounded mb-6">
        <h2 className="text-2xl font-bold mb-4">Yeni Oyun Ekle</h2>
        <input
          type="text"
          placeholder="Oyun Adı"
          value={newGameName}
          onChange={(e) => setNewGameName(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-4"
        />
        <input
          type="number"
          placeholder="Fiyat"
          value={newGamePrice}
          onChange={(e) => setNewGamePrice(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-4"
        />
        <button onClick={addGame} className="p-2 bg-blue-500 rounded">
          Oyunu Ekle
        </button>
      </div>
      <input
        type="text"
        placeholder="Oyun ara..."
        value={searchGame}
        onChange={(e) => setSearchGame(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded mb-4"
      />
      <div>
        {filteredGames.length === 0 ? (
          <p>Oyun bulunamadı.</p>
        ) : (
          <ul>
            {filteredGames.map((game) => (
              <li
                key={game.id}
                className="p-4 bg-gray-800 rounded mb-2 cursor-pointer hover:bg-gray-700"
                onClick={() => setSelectedGame(game)}
              >
                <div>
                  <p className="font-bold">{game.name}</p>
                  <p>Fiyat: {game.price} ₺</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedGame && (
        <div className="p-4 bg-gray-800 rounded mt-4">
          <h2 className="text-2xl font-bold mb-2">Oyun Detay</h2>
          <p>
            <strong>ID:</strong> {selectedGame.id}
          </p>
          <p>
            <strong>Adı:</strong> {selectedGame.name}
          </p>
          <p>
            <strong>Fiyat:</strong> {selectedGame.price} ₺
          </p>
          <div className="mt-4">
            <button
              onClick={() => deleteGame(selectedGame.id)}
              className="p-2 bg-red-700 rounded"
            >
              Oyunu Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
/*function AdminSupportManagement(){
  // Feedback verilerini saklamak için state
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  // Seçili geri bildirime verilecek yanıtı saklamak için
  const [replyContent, setReplyContent] = useState("");

  useEffect(() => {
    async function fetchFeedbacks() {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        setError("Feedbackler çekilirken hata: " + error.message);
      } else {
        setFeedbacks(data || []);
      }
    }
    fetchFeedbacks();
  }, []);

  // Seçili geri bildirime admin yanıtını eklemek için update fonksiyonu
  const replyFeedback = async (feedbackId) => {
    if (replyContent.trim() === "") {
      return alert("Lütfen yanıtınızı girin.");
    }
    const { error } = await supabase
      .from("feedback")
      .update({ reply: replyContent })
      .eq("id", feedbackId);
    if (error) {
      alert("Yanıt gönderilirken hata: " + error.message);
    } else {
      // Güncel verileri tekrar çekelim
      const { data, error: fetchError } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });
      if (fetchError) {
        alert("Veriler güncellenirken hata: " + fetchError.message);
      } else {
        setFeedbacks(data);
        // Detay görünümünü kapatıp yanıt alanını temizleyelim
        setSelectedFeedback(null);
        setReplyContent("");
      }
    }
  }
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Geri Bildirimler</h1>
      {feedbackLoading ? (
        <p className="text-center">Feedbackler yükleniyor...</p>
      ) : feedbackError ? (
        <p className="text-center text-red-500">{feedbackError}</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-center">Herhangi bir feedback bulunamadı.</p>
      ) : (
        <ul>
          {feedbacks.map((fb) => (
            <li
              key={fb.id}
              className="p-4 bg-gray-800 rounded mb-2 cursor-pointer hover:bg-gray-700"
              onClick={() => setSelectedFeedback(fb)}
            >
              <div>
                <p className="font-bold">
                  ID: {fb.id} | Oylama: {fb.rating}
                </p>
                <p>{fb.comment || "Yorum yok"}</p>
                {fb.reply && (
                  <p className="mt-2 text-green-400">
                    <strong>Yanıt:</strong> {fb.reply}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedFeedback && (
        <div className="p-4 bg-gray-800 rounded mt-4">
          <h2 className="text-2xl font-bold mb-2">Feedback Detay</h2>
          <p>
            <strong>ID:</strong> {selectedFeedback.id}
          </p>
          <p>
            <strong>Oylama:</strong> {selectedFeedback.rating}
          </p>
          <p>
            <strong>Yorum:</strong> {selectedFeedback.comment}
          </p>
          {selectedFeedback.reply && (
            <p>
              <strong>Yanıt:</strong> {selectedFeedback.reply}
            </p>
          )}
          <textarea
            className="w-full p-2 mt-4 bg-gray-700 rounded border border-gray-600 focus:outline-none"
            placeholder="Yanıtınızı buraya yazın..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          ></textarea>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => replyFeedback(selectedFeedback.id)}
              className="p-2 bg-green-600 rounded text-white"
            >
              Yanıt Gönder
            </button>
            <button
              onClick={() => {
                setSelectedFeedback(null);
                setReplyContent("");
              }}
              className="p-2 bg-gray-600 rounded text-white"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
*/

function  AdminSupportManagement() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const [feedbackError, setFeedbackError] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [replyContent, setReplyContent] = useState("");

  // Feedback verilerini Supabase'den çek
  useEffect(() => {
    async function fetchFeedbacks() {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        setFeedbackError("Feedbackleri çekerken hata: " + error.message);
        console.error("Feedback fetch error:", error);
      } else {
        setFeedbacks(data || []);
      }
      setFeedbackLoading(false);
    }
    fetchFeedbacks();
  }, []);

  // Seçili feedbacke admin tarafından yanıt eklemek için update işlemi
  const replyFeedback = async (feedbackId) => {
    if (replyContent.trim() === "") {
      return alert("Lütfen yanıtınızı girin.");
    }
    const { error } = await supabase
      .from("feedback")
      .update({ reply: replyContent })
      .eq("id", feedbackId);
    if (error) {
      alert("Yanıt gönderilirken hata: " + error.message);
    } else {
      // Güncel verileri tekrar çekelim
      const { data, error: fetchError } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });
      if (fetchError) {
        alert("Feedbackler güncellenirken hata: " + fetchError.message);
      } else {
        setFeedbacks(data);
        setSelectedFeedback(null);
        setReplyContent("");
      }
    }
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Geri Bildirimler</h1>
      {feedbackLoading ? (
        <p className="text-center">Feedbackler yükleniyor...</p>
      ) : feedbackError ? (
        <p className="text-center text-red-500">{feedbackError}</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-center">Herhangi bir feedback bulunamadı.</p>
      ) : (
        <ul>
          {feedbacks.map((fb) => (
            <li
              key={fb.id}
              className="p-4 bg-gray-800 rounded mb-2 cursor-pointer hover:bg-gray-700"
              onClick={() => setSelectedFeedback(fb)}
            >
              <div>
                <p className="font-bold">
                  ID: {fb.id} | Oylama: {fb.rating}
                </p>
                {/* Email kısmını ekledik */}
                <p>
                  <strong>Email:</strong> {fb.email || "Email yok"}
                </p>
                <p>{fb.comment || "Yorum yok"}</p>
                {fb.reply && (
                  <p className="mt-2 text-green-400">
                    <strong>Yanıt:</strong> {fb.reply}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedFeedback && (
        <div className="p-4 bg-gray-800 rounded mt-4">
          <h2 className="text-2xl font-bold mb-2">Feedback Detay</h2>
          <p>
            <strong>ID:</strong> {selectedFeedback.id}
          </p>
          <p>
            <strong>Oylama:</strong> {selectedFeedback.rating}
          </p>
          <p>
            <strong>Email:</strong> {selectedFeedback.email || "Email yok"}
          </p>
          <p>
            <strong>Yorum:</strong> {selectedFeedback.comment}
          </p>
          {selectedFeedback.reply && (
            <p>
              <strong>Yanıt:</strong> {selectedFeedback.reply}
            </p>
          )}
          <textarea
            className="w-full p-2 mt-4 bg-gray-700 rounded border border-gray-600 focus:outline-none"
            placeholder="Yanıtınızı buraya yazın..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          ></textarea>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => replyFeedback(selectedFeedback.id)}
              className="p-2 bg-green-600 rounded text-white"
            >
              Yanıt Gönder
            </button>
            <button
              onClick={() => {
                setSelectedFeedback(null);
                setReplyContent("");
              }}
              className="p-2 bg-gray-600 rounded text-white"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Ayarlar: API anahtarları, 2FA gibi ayarlar */
function AdminSettings() {
  const [settings, setSettings] = useState({
    apiKey: "",
    twoFA: false,
  });
  const [message, setMessage] = useState("");

  const updateSettings = async () => {
    // İlgili ayarları backend'e kaydedin.
    setMessage("Ayarlar başarıyla güncellendi!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="p-4 bg-gray-800 rounded">
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <div className="mb-4">
        <label className="block">API Anahtarı:</label>
        <input
          type="text"
          value={settings.apiKey}
          onChange={(e) =>
            setSettings({ ...settings, apiKey: e.target.value })
          }
          className="w-full p-2 bg-gray-700 rounded"
          placeholder="API Anahtarı"
        />
      </div>
      <div className="mb-4">
        <label className="block">2FA (İki Faktörlü Doğrulama):</label>
        <input
          type="checkbox"
          checked={settings.twoFA}
          onChange={(e) =>
            setSettings({ ...settings, twoFA: e.target.checked })
          }
        />
      </div>
      <button onClick={updateSettings} className="p-2 bg-blue-500 rounded">
        Ayarları Güncelle
      </button>
    </div>
  );
}

/* Ana Panel: Sol menüden bölümler arası geçiş */
/* Main container'a eklenen "pt-20" ile navbar çakışması önlendi */
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="flex flex-col md:flex-row">
        {/* Sol Menü (Responsive) */}
        <aside className="bg-gray-800 w-full md:w-64 p-4">
          <h1 className="text-2xl font-bold mb-6">Admin Paneli</h1>
          <nav>
            <ul>
              <li
                className={`p-2 cursor-pointer rounded mb-2 ${
                  activeTab === "dashboard"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("dashboard")}
              >
                Dashboard
              </li>
              <li
                className={`p-2 cursor-pointer rounded mb-2 ${
                  activeTab === "users"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("users")}
              >
                Kullanıcı Yönetimi
              </li>
              <li
                className={`p-2 cursor-pointer rounded mb-2 ${
                  activeTab === "content"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("content")}
              >
                İçerik Yönetimi
              </li>
              <li
                className={`p-2 cursor-pointer rounded mb-2 ${
                  activeTab === "comments"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("comments")}
              >
                Yorum Yönetimi
              </li>
            
            
              <li
                className={`p-2 cursor-pointer rounded mb-2 ${
                  activeTab === "games"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("games")}
              >
                Oyun Yönetimi
              </li>
              <li
                className={`p-2 cursor-pointer rounded mb-2 ${
                  activeTab === "support"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("support")}
              >
                Destek & Şikayetler
              </li>
              <li
                className={`p-2 cursor-pointer rounded mb-2 ${
                  activeTab === "settings"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("settings")}
              >
                Ayarlar
              </li>
            </ul>
          </nav>
        </aside>
        {/* İçerik Alanı */}
        <main className="flex-1 p-6">
          {activeTab === "dashboard" && <DashboardContent />}
          {activeTab === "users" && <AdminUsersContent />}
          {activeTab === "content" && <AdminContentManagement />}
          {activeTab === "comments" && <AdminCommentsManagement />}
          {activeTab === "games" && <AdminGamesManagement />}
          {activeTab === "support" && <AdminSupportManagement />}
          {activeTab === "settings" && <AdminSettings />}
        </main>
      </div>
    </div>
  );
}
