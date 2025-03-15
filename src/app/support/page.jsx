"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const SupportPageGamingAI = () => {
  // Navigasyon dropdown durumu
  const [activeDropdown, setActiveDropdown] = useState(null);

  // SSS (FAQ) verileri
  const [faqs, setFaqs] = useState([
    {
      question: "Şifre sıfırlama nasıl yapılır?",
      answer:
        "Hesap ayarlarınızdan 'Şifre Değiştir' seçeneğini takip ederek şifrenizi sıfırlayabilirsiniz.",
      show: false,
    },
    {
      question: "Ödeme sorunları neden yaşanır?",
      answer:
        "Ödeme sağlayıcınız veya banka kaynaklı sorunlar olabilir; detaylı çözüm için destek ekibiyle iletişime geçin.",
      show: false,
    },
    {
      question: "Oyun içi performans sorunları için ne yapmalıyım?",
      answer:
        "Oyunun güncel olduğundan ve grafik sürücülerinizin doğru çalıştığından emin olun. Sorun devam ediyorsa destek bileti oluşturun.",
      show: false,
    },
  ]);

  // Destek Talebi (Bilet) Formu – "Neden Acil?" alanı ekliyor (kodda ticketForm.urgencyReason tutuluyor)
  const [ticketForm, setTicketForm] = useState({
    category: "hesap",
    name: "",
    email: "",
    userId: "",
    description: "",
    priority: "normal",
    urgencyReason: "",
  });

  // Supabase'den çekilen destek biletleri
  const [tickets, setTickets] = useState([]);
  const [ticketLoading, setTicketLoading] = useState(true);
  const [ticketError, setTicketError] = useState(null);

  // Geri bildirim formu
  const [feedback, setFeedback] = useState({ rating: "5", comment: "" });
  
  // Arama çubuğu
  const [searchTerm, setSearchTerm] = useState("");

  // Chatbot mesajları ve görünürlüğü
  const [chatMessages, setChatMessages] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);

  // Sayfa yüklendiğinde tickets tablosundan verileri çek
  useEffect(() => {
    async function fetchTickets() {
      const { data, error } = await supabase.from("tickets").select("*");
      if (error) {
        setTicketError(error.message);
      } else {
        setTickets(data);
      }
      setTicketLoading(false);
    }
    fetchTickets();
  }, []);

  // Dropdown menü toggle fonksiyonu
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // FAQ toggle fonksiyonu
  const toggleFaq = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, show: !faq.show } : faq
      )
    );
  };

  // Destek bileti form gönderimi (insert sorgusunda "urgencyreason" sütunu kullanılıyor)
  const handleTicketSubmit = async (e) => {
    e.preventDefault();
    const ticketData = {
      category: ticketForm.category,
      name: ticketForm.name,
      email: ticketForm.email,
      user_id: ticketForm.userId,
      description: ticketForm.description,
      priority: ticketForm.priority,
      // Veritabanındaki sütun adı "urgencyreason" (tüm küçük harf) olduğundan:
      urgencyreason:
        ticketForm.priority === "acil" ? ticketForm.urgencyReason : null,
    };
    const { error } = await supabase.from("tickets").insert(ticketData);
    if (error) {
      alert("Bilet gönderiminde hata: " + error.message);
    } else {
      alert("Bilet başarıyla oluşturuldu!");
      setTicketForm({
        category: "hesap",
        name: "",
        email: "",
        userId: "",
        description: "",
        priority: "normal",
        urgencyReason: "",
      });
      const { data } = await supabase.from("tickets").select("*");
      setTickets(data);
    }
  };

  // Geri bildirim form gönderimi
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = { rating: feedback.rating, comment: feedback.comment };
    const { data, error } = await supabase.from("feedback").insert(feedbackData);
    console.log("Feedback insert response:", { data, error });
    
    if (error) {
      // Hata nesnesinin message özelliğini veya tüm hata nesnesini göster
      const errorMsg = error.message || JSON.stringify(error);
      alert("Geri bildirim gönderiminde hata: " + errorMsg);
    } else {
      alert("Geri bildiriminiz gönderildi, teşekkürler!");
      setFeedback({ rating: "5", comment: "" });
    }
  };
  
  // Örnek AI yanıtı: Girilen mesajı tersine çevirerek simüle eden fonksiyon
  const getAiResponse = async (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("AI Yanıtı: " + userMessage.split("").reverse().join(""));
      }, 1500);
    });
  };

  // Chat mesaj gönderimi
  const sendMessage = async () => {
    const input = document.getElementById("chatInput");
    const messageText = input.value.trim();
    if (messageText === "") return;
    setChatMessages((prev) => [...prev, { sender: "user", text: messageText }]);
    input.value = "";
    const aiResponse = await getAiResponse(messageText);
    setChatMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 space-y-12">
      {/* Navigasyon – Yatayda yayılan */}
      <nav className="flex justify-center gap-6">
        {["Destek", "SSS", "Bilet", "Geri Bildirim", "Dokümantasyon"].map(
          (item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="px-4 py-2 hover:text-yellow-400 transition-colors"
              >
                {item}
              </button>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 rounded shadow-lg overflow-hidden transition-all duration-500 ${
                  activeDropdown === index ? "max-h-40 p-4" : "max-h-0 p-0"
                }`}
              >
                <p className="text-sm text-gray-300">
                  {item} ile ilgili detaylı içerik burada sunuluyor.
                </p>
              </div>
            </div>
          )
        )}
      </nav>

      {/* Hero / Tanıtım Bölümü */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-yellow-500 animate-pulse mb-4">
          RavenSect Support
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          
        </p>
      </section>

      {/* Arama Bölümü */}
      <section className="flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Yardım konularını ara..."
          className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </section>

      {/* İçerik Alanı: Sol — FAQ, Sağ — Dokümantasyon */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Bölümü */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  {faq.question}
                </button>
                {faq.show && (
                  <div className="px-4 py-3 bg-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Dokümantasyon Bölümü */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6">
            Dokümantasyon & Video Rehberler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">
                Kurulum Rehberi
              </h3>
              <p className="text-gray-300">
                Kurulum sürecini detaylandıran rehber burada yer alıyor.
              </p>
              <a
                href="#"
                className="text-yellow-400 mt-2 inline-block hover:underline"
              >
                Detayları Görüntüle
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">
                Video Rehber
              </h3>
              <p className="text-gray-300">
                Ödeme işlemleri veya diğer detayları anlatan video rehber.
              </p>
              <a
                href="#"
                className="text-yellow-400 mt-2 inline-block hover:underline"
              >
                Videoyu İzle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alt Bölüm: Destek Talebi (Bilet Formu) ve Geri Bildirim */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Destek Talebi Formu */}
        <div className="bg-gray-800 p-6 rounded shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Destek Talebi
          </h2>
          <form onSubmit={handleTicketSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Sorun Kategorisi:</label>
              <select
                value={ticketForm.category}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, category: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              >
                <option value="hesap">Hesap & Güvenlik</option>
                <option value="odeme">Ödemeler & Faturalandırma</option>
                <option value="teknik">Teknik Destek</option>
                <option value="topluluk">Topluluk & Moderasyon</option>
                <option value="genel">Genel Kullanım Rehberleri</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Adınız:</label>
              <input
                type="text"
                value={ticketForm.name}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, name: e.target.value })
                }
                required
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">E-posta:</label>
              <input
                type="email"
                value={ticketForm.email}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, email: e.target.value })
                }
                required
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Kullanıcı ID:</label>
              <input
                type="text"
                value={ticketForm.userId}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, userId: e.target.value })
                }
                required
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Sorun Açıklaması:</label>
              <textarea
                value={ticketForm.description}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, description: e.target.value })
                }
                required
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none h-24"
              ></textarea>
            </div>
            <div>
              <label className="block mb-1">Öncelik Seviyesi:</label>
              <select
                value={ticketForm.priority}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, priority: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              >
                <option value="acil">Acil</option>
                <option value="normal">Normal</option>
                <option value="dusuk">Düşük</option>
              </select>
            </div>
            {ticketForm.priority === "acil" && (
              <div>
                <label className="block mb-1">Neden Acil?</label>
                <textarea
                  value={ticketForm.urgencyReason}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      urgencyReason: e.target.value,
                    })
                  }
                  required
                  className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none h-20"
                  placeholder="Acil durumunuzun nedenini belirtiniz..."
                ></textarea>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-gray-900 font-bold rounded transition-colors hover:bg-yellow-400"
            >
              Bilet Oluştur
            </button>
          </form>
        </div>
        {/* Geri Bildirim Formu */}
        <div className="bg-gray-800 p-6 rounded shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Geri Bildirim
          </h2>
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Oylama:</label>
              <select
                value={feedback.rating}
                onChange={(e) =>
                  setFeedback({ ...feedback, rating: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              >
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Yorum:</label>
              <textarea
                value={feedback.comment}
                onChange={(e) =>
                  setFeedback({ ...feedback, comment: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none h-24"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-gray-900 font-bold rounded transition-colors hover:bg-yellow-400"
            >
              Gönder
            </button>
          </form>
        </div>
      </section>

      {/* Destek Bilet Takip ve Sunucu Durumu */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Destek Biletleri Listesi */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6">
            Destek Talebi Takip
          </h2>
          {ticketLoading ? (
            <p className="text-center">Veriler yükleniyor...</p>
          ) : ticketError ? (
            <p className="text-center text-red-500">Hata: {ticketError}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border border-gray-600">
                      Bilet No
                    </th>
                    <th className="px-4 py-2 border border-gray-600">
                      Durum
                    </th>
                    <th className="px-4 py-2 border border-gray-600">
                      Tarih
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td className="px-4 py-2 border border-gray-600">
                        #{ticket.id}
                      </td>
                      <td className="px-4 py-2 border border-gray-600">
                        {ticket.status || "Açık (İnceleniyor)"}
                      </td>
                      <td className="px-4 py-2 border border-gray-600">
                        {new Date(ticket.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Sunucu Durumu Bilgileri */}
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Sunucu Durumu
          </h2>
          {[
            { color: "green", text: "Tüm Sistemler Çalışıyor" },
            { color: "orange", text: "Bazı Hizmetlerde Yavaşlama Var" },
            { color: "red", text: "Hizmet Kesintisi Yaşanıyor" },
          ].map((status, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: status.color }}
              ></div>
              <span>{status.text}</span>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Geçmiş Kesinti Raporları</h3>
            <ul className="list-disc ml-5">
              <li>15.10.2023 - Kısa süreli kesinti</li>
              <li>10.10.2023 - Planlı bakım</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sol Kenardan Açılan Chatbot Paneli */}
      <section>
        <button
          className="fixed top-1/2 left-0 transform -translate-x-full bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-r transition-transform duration-500 z-50"
          onClick={() => setShowChatbot(!showChatbot)}
        >
          Chat
        </button>
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-gray-800 shadow-2xl z-50 transition-transform duration-500 ${
            showChatbot ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-yellow-500 text-gray-900 px-4 py-2 font-bold">
            Canlı Destek Chatbot
          </div>
          <div id="chatMessages" className="h-64 overflow-y-auto p-4 space-y-2">
            {chatMessages.map((msg, index) => (
              <div key={index} className="text-sm">
                <span className="font-bold">
                  {msg.sender === "user"
                    ? "Siz:"
                    : msg.sender === "ai"
                    ? "AI:"
                    : "Destek:"}
                </span>{" "}
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-600">
            <input
              id="chatInput"
              type="text"
              placeholder="Mesajınızı yazın..."
              className="w-full px-3 py-2 bg-gray-700 text-gray-100 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-yellow-500 text-gray-900 font-bold"
            >
              Gönder
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPageGamingAI;
