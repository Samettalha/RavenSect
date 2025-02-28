"use client";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({ users: 0, content: 0, comments: 0 });
  const [chartData, setChartData] = useState([]);
  const [users, setUsers] = useState([]);
  const [content, setContent] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [activityLogs, setActivityLogs] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const { data: users } = await supabase.from("users").select("id, email, role, status");
      const { data: content } = await supabase.from("content").select("id, title, author, status");
      const { data: comments } = await supabase.from("comments").select("id, content, author, status");
      const { data: authUser } = await supabase.auth.getUser();
      const { data: logs } = await supabase.from("activity_logs").select("id, user_email, action, created_at");
      
      setStats({ users: users.length, content: content.length, comments: comments.length });
      setChartData([
        { name: "Kullanıcılar", value: users.length },
        { name: "İçerikler", value: content.length },
        { name: "Yorumlar", value: comments.length },
      ]);
      setUsers(users);
      setContent(content);
      setComments(comments);
      setCurrentUser(authUser);
      setActivityLogs(logs);
    };
    fetchStats();
  }, []);

  const changeUserRole = async (userId, newRole) => {
    if (currentUser?.role !== "kurucu") return alert("Bu işlemi sadece kurucu yapabilir");
    await supabase.from("users").update({ role: newRole }).eq("id", userId);
    await supabase.from("activity_logs").insert({ user_email: currentUser.email, action: `Rol değiştirildi: ${newRole}` });
    alert("Rol başarıyla güncellendi");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-blue-500 text-white rounded-lg text-center">
          <h2 className="text-xl font-semibold">Toplam Kullanıcı</h2>
          <p className="text-2xl font-bold">{stats.users}</p>
        </div>
        <div className="p-4 bg-green-500 text-white rounded-lg text-center">
          <h2 className="text-xl font-semibold">Toplam İçerik</h2>
          <p className="text-2xl font-bold">{stats.content}</p>
        </div>
        <div className="p-4 bg-yellow-500 text-white rounded-lg text-center">
          <h2 className="text-xl font-semibold">Toplam Yorum</h2>
          <p className="text-2xl font-bold">{stats.comments}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Rol Yönetimi</h2>
        <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Kullanıcı</th>
              <th className="p-3 text-left">Mevcut Rol</th>
              <th className="p-3 text-left">Yeni Rol</th>
              <th className="p-3 text-left">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  <select
                    className="border p-2 rounded"
                    onChange={(e) => changeUserRole(user.id, e.target.value)}
                  >
                    <option value="user">Kullanıcı</option>
                    <option value="moderator">Moderatör</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-3">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => changeUserRole(user.id, "admin")}
                  >
                    Admin Yap
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Aktivite Logları</h2>
        <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Kullanıcı</th>
              <th className="p-3 text-left">Aksiyon</th>
              <th className="p-3 text-left">Tarih</th>
            </tr>
          </thead>
          <tbody>
            {activityLogs.map((log) => (
              <tr key={log.id} className="border-b">
                <td className="p-3">{log.user_email}</td>
                <td className="p-3">{log.action}</td>
                <td className="p-3">{new Date(log.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}