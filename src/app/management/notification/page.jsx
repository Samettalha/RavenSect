"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
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
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      const { data: users } = await supabase.from("users").select("id, email, role, status");
      const { data: content } = await supabase.from("content").select("id, title, author, status");
      const { data: comments } = await supabase.from("comments").select("id, content, author, status");
      const { data: authUser } = await supabase.auth.getUser();
      const { data: logs } = await supabase.from("activity_logs").select("id, user_email, action, created_at");
      const { data: notifications } = await supabase.from("notifications").select("id, message, created_at");
      
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
      setNotifications(notifications);
    };
    fetchStats();
  }, []);

  const sendNotification = async () => {
    if (!message) return alert("Bildirim mesajı boş olamaz");
    await supabase.from("notifications").insert({ message });
    alert("Bildirim gönderildi");
    setMessage("");
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
        <h2 className="text-2xl font-bold mb-4">Veri Yedekleme ve Geri Yükleme</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={() => alert("Veritabanı yedeği oluşturuldu.")}>
          Veritabanı Yedeği Al
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => alert("Veritabanı yedeği geri yüklendi.")}>
          Yedeği Geri Yükle
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Bildirim Gönderme</h2>
        <input
          type="text"
          className="border p-2 rounded w-full mb-2"
          placeholder="Bildirim mesajı girin"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={sendNotification}>
          Bildirim Gönder
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Son Bildirimler</h2>
        <ul className="border rounded p-4 bg-gray-100">
          {notifications.map((notif) => (
            <li key={notif.id} className="mb-2 border-b pb-2">{notif.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}