"use client";
import { useRouter } from "next/navigation";


export default function LandingPage() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <p className="text-gray-600 mb-6">Yönetim modüllerine buradan erişebilirsiniz.</p>
        <div className="flex flex-col gap-4">
          <button onClick={() => navigateTo("management/dashboard")} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Dashboard
          </button>
          <button onClick={() => navigateTo("management/users")} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
            Kullanıcı Yönetimi
          </button>
          <button onClick={() => navigateTo("/content")} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md">
            İçerik Yönetimi
          </button>
          <button onClick={() => navigateTo("/settings")} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
            Ayarlar
          </button>
        </div>
      </div>
    </div>
  );
}
