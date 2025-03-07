"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Forum() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  // Kategorileri çekme
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        console.error("Kategoriler alınırken hata oluştu:", error.message);
      } else {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []);

  // Yeni kategori ekleme
  const addCategory = async () => {
    if (!newCategory.trim()) return;

    const { data, error } = await supabase
      .from("categories")
      .insert([{ name: newCategory }]);

    if (error) {
      console.error("Kategori eklenirken hata oluştu:", error.message);
    } else {
      setCategories([...categories, ...data]);
      setNewCategory("");
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold">Forum Kategorileri</h1>

      {/* Kategori Ekleme Formu */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Yeni kategori adı"
          className="p-2 rounded-md text-black"
        />
        <button
          onClick={addCategory}
          className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Ekle
        </button>
      </div>

      {/* Kategoriler Listesi */}
      <div className="mt-6">
        {categories.length === 0 ? (
          <p>Kategori bulunamadı.</p>
        ) : (
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id} className="p-2 bg-gray-800 rounded-md">
                {category.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
