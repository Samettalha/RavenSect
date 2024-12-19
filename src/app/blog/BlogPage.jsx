import { useState } from "react";
export default function BlogPage() {
  // Dummy data for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Ali Veli",
      title: "Elektronik Dünyasında Yenilikler",
      content: "Yeni teknolojiler hayatımızı nasıl etkiliyor?",
      comments: [
        { user: "Ayşe", text: "Çok bilgilendirici bir yazı olmuş, teşekkürler!" },
        { user: "Mehmet", text: "Katılıyorum, bu yenilikler harika!" },
      ],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const addComment = (postId) => {
    if (!newComment.trim()) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { user: "Anonim", text: newComment }],
            }
          : post
      )
    );
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-500 text-white py-4 px-8">
        <h1 className="text-2xl font-bold">Blog Sayfası</h1>
        <p>Elektronik dünyası üzerine düşüncelerinizi paylaşın!</p>
      </header>

      <main className="py-8 px-4 sm:px-8">
        {/* Blog Posts List */}
        <section className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-700">{post.content}</p>
              <p className="mt-4 text-sm text-gray-500">
                Yazarı: {post.author}
              </p>

              {/* Comments */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Yorumlar</h3>
                <ul className="mt-2 space-y-2">
                  {post.comments.map((comment, index) => (
                    <li
                      key={index}
                      className="border-b border-gray-300 pb-2"
                    >
                      <strong>{comment.user}:</strong> {comment.text}
                    </li>
                  ))}
                </ul>

                {/* Add Comment Form */}
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    rows="3"
                    placeholder="Yorumunuzu yazın..."
                    value={selectedPost === post.id ? newComment : ""}
                    onChange={(e) => setNewComment(e.target.value)}
                    onFocus={() => setSelectedPost(post.id)}
                  ></textarea>
                  <button
                    onClick={() => addComment(post.id)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
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
