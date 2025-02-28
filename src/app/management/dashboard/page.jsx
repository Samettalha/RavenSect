"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({ users: 0, content: 0, comments: 0 });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const { data: users } = await supabase.from("users").select("id");
      const { data: content } = await supabase.from("content").select("id");
      const { data: comments } = await supabase.from("comments").select("id");
      
      setStats({ users: users.length, content: content.length, comments: comments.length });
      setChartData([
        { name: "Kullanıcılar", value: users.length },
        { name: "İçerikler", value: content.length },
        { name: "Yorumlar", value: comments.length },
      ]);
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
    </div>
  );
}
