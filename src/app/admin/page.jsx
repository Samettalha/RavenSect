"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminUsers() {
  // Kullanıcı yönetimi için state'ler
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Yeni kullanıcı eklemek için state'ler
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState("user");

  // Sayfa yüklendiğinde tüm kullanıcıları çekiyoruz
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        console.error("Kullanıcılar çekilirken hata:", error);
        setErrorMessage("Kullanıcıları çekerken hata: " + error.message);
      } else {
        setUsers(data || []);
      }
    };
    fetchUsers();
  }, []);

  // Arama kriterlerine göre filtreleme (name ve email alanı tanımsız ise boş string kullanılıyor)
  const filteredUsers = users.filter((user) =>
    (user.name || "").toLowerCase().includes(userSearch.toLowerCase()) ||
    (user.email || "").toLowerCase().includes(userSearch.toLowerCase())
  );

  // Liste üzerindeki bir kullanıcıya tıklanınca detaylarını gösteriyoruz
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  // Kullanıcının ban durumunu değiştirme
  const toggleBanUser = async (userId, currentBanStatus) => {
    const { error } = await supabase
      .from("users")
      .update({ banned: !currentBanStatus })
      .eq("id", userId);
    if (error) {
      console.error("Ban durumu güncellenirken hata:", error);
    } else {
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === userId ? { ...u, banned: !currentBanStatus } : u
        )
      );
      if (selectedUser && selectedUser.id === userId) {
        setSelectedUser({ ...selectedUser, banned: !currentBanStatus });
      }
    }
  };

  // Kullanıcının aktif/pasif durumunu değiştirme
  const toggleActiveStatus = async (userId, currentStatus) => {
    const { error } = await supabase
      .from("users")
      .update({ is_active: !currentStatus })
      .eq("id", userId);
    if (error) {
      console.error("Aktif/Pasif durumu güncellenirken hata:", error);
    } else {
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === userId ? { ...u, is_active: !currentStatus } : u
        )
      );
      if (selectedUser && selectedUser.id === userId) {
        setSelectedUser({ ...selectedUser, is_active: !currentStatus });
      }
    }
  };

  // Kullanıcı rolünü güncelleme işlemi
  const updateUserRole = async (userId, newRole) => {
    const { error } = await supabase
      .from("users")
      .update({ role: newRole })
      .eq("id", userId);
    if (error) {
      console.error("Rol güncellenirken hata:", error);
    } else {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
      );
      if (selectedUser && selectedUser.id === userId) {
        setSelectedUser({ ...selectedUser, role: newRole });
      }
    }
  };

  // Yeni kullanıcı ekleme işlemi
  const addUser = async () => {
    if (
      newUserName.trim() === "" ||
      newUserEmail.trim() === "" ||
      newUserPassword.trim() === ""
    ) {
      alert("Lütfen isim, email ve şifre alanlarını doldurun!");
      return;
    }

    // Email kontrolü: Kullanımda olup olmadığını kontrol ediyoruz
    const { data: existingUsers, error: checkError } = await supabase
      .from("users")
      .select("*")
      .eq("email", newUserEmail.trim());

    if (checkError) {
      console.error("Email kontrolü yapılırken hata:", checkError);
      alert("Kullanıcı kontrolünde hata oluştu: " + checkError.message);
      return;
    }

    if (existingUsers && existingUsers.length > 0) {
      alert("Bu email adresi zaten kullanılıyor!");
      return;
    }

    // Insert sorgusunda { returning: "representation" } seçeneği ile eklenen satırları dizi olarak geri alıyoruz
    const { data, error } = await supabase
      .from("users")
      .insert(
        [
          {
            name: newUserName.trim(),
            email: newUserEmail.trim(),
            password: newUserPassword.trim(),
            role: newUserRole,
            banned: false,
            is_active: true,
          },
        ],
        { returning: "representation" }
      );

    if (error) {
      console.error("Yeni kullanıcı eklenirken hata:", error);
      alert("Kullanıcı eklenirken hata oluştu: " + error.message);
    } else {
      const newUsersArray = Array.isArray(data) ? data : [data];
      setUsers([...users, ...newUsersArray]);
      setNewUserName("");
      setNewUserEmail("");
      setNewUserPassword("");
      setNewUserRole("user");
      alert("Kullanıcı başarıyla eklendi!");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <br></br> <br></br>
      <br></br> 
      <h1 className="text-3xl font-bold">Kullanıcı Yönetimi</h1>

      {/* Hata mesajı varsa göster */}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}

      {/* Yeni Kullanıcı Ekleme Formu */}
      <div className="mt-6 p-4 bg-gray-800 rounded">
        <h2 className="text-2xl font-bold mb-4">Yeni Kullanıcı Ekle</h2>
        <div className="mb-4">
          <label className="block">İsim:</label>
          <input
            type="text"
            placeholder="Kullanıcı ismi"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Email:</label>
          <input
            type="email"
            placeholder="Kullanıcı email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Şifre:</label>
          <input
            type="password"
            placeholder="Kullanıcı şifresi"
            value={newUserPassword}
            onChange={(e) => setNewUserPassword(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Rol:</label>
          <select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded w-full"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>
        <button onClick={addUser} className="py-2 px-4 bg-blue-500 rounded">
          Kullanıcı Ekle
        </button>
      </div>

      {/* Kullanıcı Arama Alanı */}
      <input
        type="text"
        placeholder="Kullanıcı ara..."
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
        className="mt-6 p-2 bg-gray-800 rounded w-full"
      />

      {/* Kullanıcı Listesi */}
      <div className="mt-4">
        {filteredUsers.length === 0 ? (
          <p>Hiç kullanıcı bulunamadı.</p>
        ) : (
          <ul>
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className="p-4 bg-gray-800 rounded my-2 cursor-pointer hover:bg-gray-700"
                onClick={() => handleSelectUser(user)}
              >
                <div>
                  <p className="font-bold">
                    {user.name || "Belirtilmemiş"} ({user.email || "Belirtilmemiş"})
                  </p>
                  <p>Rol: {user.role}</p>
                  <p>
                    Durum: {user.banned ? "Banlı" : "Normal"} -{" "}
                    {user.is_active ? "Aktif" : "Pasif"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Seçili Kullanıcı Detayları */}
      {selectedUser && (
        <div className="mt-6 p-4 bg-gray-800 rounded">
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
            <strong>Aktif/Pasif:</strong> {selectedUser.is_active ? "Aktif" : "Pasif"}
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              onClick={() =>
                toggleBanUser(selectedUser.id, selectedUser.banned)
              }
              className="py-2 px-4 bg-red-500 rounded"
            >
              {selectedUser.banned ? "Banı Kaldır" : "Banla"}
            </button>
            <button
              onClick={() =>
                toggleActiveStatus(selectedUser.id, selectedUser.is_active)
              }
              className="py-2 px-4 bg-gray-600 rounded"
            >
              {selectedUser.is_active ? "Pasif Yap" : "Aktif Yap"}
            </button>
          </div>
          <div className="mt-4">
            <label htmlFor="role" className="mr-2">
              Rol Değiştir:
            </label>
            <select
              id="role"
              value={selectedUser.role}
              onChange={(e) =>
                updateUserRole(selectedUser.id, e.target.value)
              }
              className="p-2 bg-gray-700 text-white rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
