"use client";
import { useState } from "react";

export default function BlogPage() {
  // Dummy data for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Samet Talha",
      title: "Elektronik Dünyasında Yenilikler",
      content: "naber :D",
      comments: [
        { user: "Ayşe", text: "Çok bilgilendirici bir yazı olmuş, teşekkürler!" },
        { user: "Mehmet", text: "Katılıyorum, bu konuşma harika!" },
        { user: "Ahmet", text: "yenilikci bir görüş gerçekten harika!" },
      ],
    },
  ]);

  // Yeni yorumlar için state
  const [newComments, setNewComments] = useState({});

  // Yorum ekleme fonksiyonu
  const addComment = (postId) => {
    if (!newComments[postId]?.trim()) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { user: "Anonim", text: newComments[postId] },
              ],
            }
          : post
      )
    );

    // Yorum eklendikten sonra inputu temizle
    setNewComments((prevComments) => ({ ...prevComments, [postId]: "" }));
  };

  // Yorum text alanının değişim işlemi
  const handleCommentChange = (postId, value) => {
    setNewComments((prevComments) => ({
      ...prevComments,
      [postId]: value,
    }));
  };

  return (
    <div className="min-h-screen text-gray-900 pt-20">
      <header className="bg-orange-500 text-white py-4 px-8">
        <h1 className="text-2xl font-bold">Zainex Blog</h1>
        <p>Teknoloji dünyası üzerine düşüncelerinizi paylaşın!</p>
      </header>

      <main className="py-8 px-4 sm:px-8">
        {/* Blog Posts List */}
        <section className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-orange-500">{post.title}</h2>
              <p className="mt-2 text-gray-700">{post.content}</p>
              <p className="mt-4 text-sm text-gray-500">Yazarı: {post.author}</p>

              {/* Yorumlar */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Yorumlar</h3>
                <ul className="mt-2 space-y-2">
                  {post.comments.map((comment, index) => (
                    <li key={index} className="border-b border-gray-300 pb-2">
                      <strong>{comment.user}:</strong> {comment.text}
                    </li>
                  ))}
                </ul>

                {/* Yorum Ekleme Formu */}
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    rows="3"
                    placeholder="Yorumunuzu yazın..."
                    value={newComments[post.id] || ""}
                    onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  ></textarea>
                  <button
                    onClick={() => addComment(post.id)}
                    className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
                  >
                    Yorum Yap
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
