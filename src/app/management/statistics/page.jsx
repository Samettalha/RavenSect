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
  const [trafficStats, setTrafficStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data: users = [], error: userError } = await supabase.from("users").select("id, email, role, status");
        const { data: content = [], error: contentError } = await supabase.from("content").select("id, title, author, status");
        const { data: comments = [], error: commentsError } = await supabase.from("comments").select("id, content, author, status");
        const { data: authData, error: authError } = await supabase.auth.getUser();
        const { data: logs = [], error: logsError } = await supabase.from("activity_logs").select("id, user_email, action, created_at");
        const { data: notifications = [], error: notifError } = await supabase.from("notifications").select("id, message, created_at");
        const { data: traffic = [], error: trafficError } = await supabase.from("traffic_stats").select("date, visits");

        if (userError || contentError || commentsError || authError || logsError || notifError || trafficError) {
          console.error("Supabase verileri çekilirken hata oluştu:", {
            userError, contentError, commentsError, authError, logsError, notifError, trafficError
          });
          return;
        }

        setStats({
          users: users?.length || 0,
          content: content?.length || 0,
          comments: comments?.length || 0
        });

        setChartData([
          { name: "Kullanıcılar", value: users?.length || 0 },
          { name: "İçerikler", value: content?.length || 0 },
          { name: "Yorumlar", value: comments?.length || 0 },
        ]);

        setUsers(users);
        setContent(content);
        setComments(comments);
        setCurrentUser(authData?.user || null);
        setActivityLogs(logs);
        setNotifications(notifications);
        setTrafficStats(traffic);
      } catch (error) {
        console.error("Beklenmedik hata:", error);
      }
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
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Site Trafiği</h2>
        {trafficStats.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficStats}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visits" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>Henüz trafik verisi bulunmamaktadır.</p>
        )}
      </div>
    </div>
  );
}
