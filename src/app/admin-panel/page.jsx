"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase"; // Supabase bağlantısı
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [contents, setContents] = useState([]);
  const [newContentTitle, setNewContentTitle] = useState('');
  const [newContentBody, setNewContentBody] = useState('');
  const [isFounder, setIsFounder] = useState(false); // Kurucu kontrolü
  const [isMainAdmin, setIsMainAdmin] = useState(false); // Ana admin kontrolü
  const router = useRouter();

  useEffect(() => {
    // Kullanıcıyı kontrol et ve admin olup olmadığını belirle
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("is_main_admin, role, is_founder")
          .eq("id", user.id)
          .single();
        
        if (data) {
          if (data.is_founder) {
            setIsFounder(true); // Kurucuysa, en yüksek yetkiyi ver
          } else if (data.role === "admin" && data.is_main_admin) {
            setIsMainAdmin(true); // Ana adminse, ona yetki ver
          } else {
            router.push("/"); // Admin değilse yönlendir
          }
        }
      }
    };
    fetchData();
  }, []);

  const handleAddContent = async () => {
    if (newContentTitle && newContentBody) {
      const { error } = await supabase.from("contents").insert([
        { title: newContentTitle, body: newContentBody, approved: false }
      ]);
      if (error) {
        alert("İçerik eklenemedi.");
      } else {
        alert("İçerik başarıyla eklendi.");
        setContents([
          ...contents,
          { title: newContentTitle, body: newContentBody, approved: false }
        ]);
        setNewContentTitle('');
        setNewContentBody('');
      }
    } else {
      alert("Başlık ve içerik boş olamaz.");
    }
  };

  const handleBanUser = async (userId) => {
    const { error } = await supabase
      .from("profiles")
      .update({ banned: true })
      .eq("id", userId);
    if (error) {
      alert("Kullanıcı engellenemedi.");
    } else {
      alert("Kullanıcı başarıyla engellendi.");
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const handleApproveContent = async (contentId) => {
    const { error } = await supabase
      .from("contents")
      .update({ approved: true })
      .eq("id", contentId);
    if (error) {
      alert("İçerik onaylanamadı.");
    } else {
      alert("İçerik başarıyla onaylandı.");
      setContents(
        contents.map((content) =>
          content.id === contentId ? { ...content, approved: true } : content
        )
      );
    }
  };

  const handleAssignAdminRole = async (userId) => {
    const { error } = await supabase
      .from("profiles")
      .update({ role: "admin" })
      .eq("id", userId);
    if (error) {
      alert("Yetki verme işlemi başarısız.");
    } else {
      alert("Kullanıcıya admin yetkisi verildi.");
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, role: "admin" } : user
        )
      );
    }
  };

  const handleRevokeAdminRole = async (userId) => {
    const { error } = await supabase
      .from("profiles")
      .update({ role: "user" })
      .eq("id", userId);
    if (error) {
      alert("Yetki kaldırma işlemi başarısız.");
    } else {
      alert("Kullanıcının admin yetkisi kaldırıldı.");
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, role: "user" } : user
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Paneli</h1>

      {/* İçerik Ekleme Formu */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">İçerik Ekle</h2>
        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="İçerik Başlığı"
            value={newContentTitle}
            onChange={(e) => setNewContentTitle(e.target.value)}
          />
          <textarea
            className="w-full p-2 border rounded-md"
            placeholder="İçerik İçeriği"
            value={newContentBody}
            onChange={(e) => setNewContentBody(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddContent}
          >
            İçeriği Ekle
          </button>
        </div>
      </section>

      {/* Kullanıcı Yönetimi */}
      {(isMainAdmin || isFounder) && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kullanıcı Yönetimi</h2>
          <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-left">Kullanıcı Adı</th>
                <th className="py-3 px-4 text-left">Durum</th>
                <th className="py-3 px-4 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{user.username}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4 space-x-2">
                    {(isFounder || user.role !== "founder") && (
                      <>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={() => handleBanUser(user.id)}
                        >
                          Engelle
                        </button>
                        {user.role !== "admin" && (
                          <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={() => handleAssignAdminRole(user.id)}
                          >
                            Admin Yap
                          </button>
                        )}
                        {user.role === "admin" && (
                          <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded"
                            onClick={() => handleRevokeAdminRole(user.id)}
                          >
                            Adminliği Al
                          </button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* İçerik Yönetimi */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">İçerik Yönetimi</h2>
        <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left">Başlık</th>
              <th className="py-3 px-4 text-left">Durum</th>
              <th className="py-3 px-4 text-left">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr key={content.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{content.title}</td>
                <td className="py-3 px-4">{content.approved ? "Onaylı" : "Bekliyor"}</td>
                <td className="py-3 px-4 space-x-2">
                  {!content.approved && (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => handleApproveContent(content.id)}
                    >
                      Onayla
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
