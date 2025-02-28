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

  useEffect(() => {
    const fetchStats = async () => {
      const { data: users } = await supabase.from("users").select("id, email, role, status");
      const { data: content } = await supabase.from("content").select("id, title, author, status");
      const { data: comments } = await supabase.from("comments").select("id");
      
      setStats({ users: users.length, content: content.length, comments: comments.length });
      setChartData([
        { name: "Kullanıcılar", value: users.length },
        { name: "İçerikler", value: content.length },
        { name: "Yorumlar", value: comments.length },
      ]);
      setUsers(users);
      setContent(content);
    };
    fetchStats();
  }, []);

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
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Genel İstatistikler</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Kullanıcı Yönetimi</h2>
        <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Rol</th>
              <th className="p-3 text-left">Durum</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">İçerik Yönetimi</h2>
        <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Başlık</th>
              <th className="p-3 text-left">Yazar</th>
              <th className="p-3 text-left">Durum</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.title}</td>
                <td className="p-3">{item.author}</td>
                <td className="p-3">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
