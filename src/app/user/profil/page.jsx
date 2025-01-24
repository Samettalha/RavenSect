"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import supabase from '../../../lib/supabase'; // Supabase kütüphanesi

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: userResponse, error: userError } = await supabase.auth.getUser();
      if (userError || !userResponse.user) {
        console.error(userError || "Kullanıcı oturumu bulunamadı!");
        return;
      }

      const user = userResponse.user;
      const { data: activities, error: activityError } = await supabase
        .from("user_activities")
        .select("*")
        .eq("user_id", user.id);

      if (activityError) {
        console.error(activityError);
        return;
      }

      setUserData(user);
      setActivityData(activities || []);
    };

    fetchData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  const avatarUrl = userData.user_metadata?.avatar_url || "/default-avatar.png";
  const fullName = userData.user_metadata?.full_name || "Anonim Kullanıcı";
  const rank = userData.rank || "Newbie";

  const totalComments = activityData.reduce((acc, curr) => acc + curr.comments, 0) || 0;
  const totalTimeSpent = activityData.reduce((acc, curr) => acc + curr.time_spent, 0) || 0;

  const chartData = {
    labels: activityData.map((activity) => activity.date ? new Date(activity.date).toLocaleDateString() : "N/A"),
    datasets: [
      {
        label: "Comments",
        data: activityData.map((activity) => activity.comments || 0),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="min-h-screen  text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
        <br></br>      <br></br>      <br></br>      <br></br>      <br></br>
          <img src={avatarUrl} alt="Profile Picture" className="w-20 h-20 rounded-full" />
          <div>
            <br></br>      <br></br>      <br></br>      <br></br>      <br></br>          <br></br>      <br></br>
            <h1 className="text-2xl font-bold">{fullName}</h1>
            <p>Rank: {rank}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Comments</h2>
            <p className="text-3xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Time Spent</h2>
            <p className="text-3xl font-bold">{totalTimeSpent} mins</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Activity Over Time</h2>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}
