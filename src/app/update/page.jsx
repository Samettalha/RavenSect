"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Info,
  DownloadCloud
} from "lucide-react";

export default function UpdatePage() {
  // Supabase verileri için state'ler
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);

  // Gizlenebilir bölümler için state'ler
  const [expandedFeatures, setExpandedFeatures] = useState(false);
  const [expandedIssues, setExpandedIssues] = useState(false);
  const [expandedInstallation, setExpandedInstallation] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(false);
  const [expandedPreviousUpdates, setExpandedPreviousUpdates] = useState(false);

  // Önceki güncellemeler (örnek veriler)
  const previousUpdates = [
    {
      version: "v1.1.5",
      date: "15.02.2025",
      summary: "Küçük hata düzeltmeleri, performans iyileştirmeleri ve arayüz güncellemeleri.",
      details: "Yeni menü animasyonları eklendi, veri senkronizasyonu iyileştirildi, bazı çökme sorunları giderildi."
    },
    {
      version: "v1.1.0",
      date: "01.02.2025",
      summary: "Yeni özellikler, karakter güncellemeleri ve denge iyileştirmeleri.",
      details: "Yeni karakter setleri, ekstra silahlar, ve oyun içi etkileşimler güncellendi."
    },
    {
      version: "v1.0.0",
      date: "15.01.2025",
      summary: "İlk resmi sürüm; temel oyun mekanikleri ve arayüz oluşturuldu.",
      details: "Oyun dünyası, temel karakterler, görev sistemi ve çevrimiçi etkileşimler eklendi."
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchComments();
    fetchLikes();
    setLoading(false);
  }, []);

  const fetchComments = async () => {
    const { data } = await supabase.from("comments").select("*");
    setComments(data || []);
  };

  const fetchLikes = async () => {
    const { data } = await supabase.from("likes").select("count", { count: "exact" });
    setLikes(data && data[0] ? data[0].count : 0);
  };

  const addComment = async () => {
    if (newComment.trim() === "") return;
    await supabase.from("comments").insert([{ text: newComment }]);
    setNewComment("");
    fetchComments();
  };

  const addLike = async () => {
    await supabase.from("likes").insert([{}]);
    fetchLikes();
  };

  // Glowing effect için inline stil
  const glowStyle = { textShadow: "0 0 0px #FDE047" };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <br/>
      {/* Güncelleme Başlığı */}
       <div className=" text-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
        data-aos="fade-up"
        >
        <CardContent>
          <h1 style={glowStyle} className="text-5xl font-extrabold mb-2 text-yellow-500">
            🚀 Güncelleme v1.2.0
          </h1>
          <p style={glowStyle} className="text-lg text-yellow-500">
            Yayınlanma Tarihi: 09.03.2025
          </p>
        </CardContent>
        </div>
      {/* Özet (Changelog) Bölümü */}
      <Card className=" shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-right">
        <CardContent>
          <h2 style={glowStyle} className="text-3xl font-bold mb-4 text-yellow-500">🔹 Özet</h2>
          <p style={glowStyle} className="mb-4 text-yellow-500">
            Bu güncelleme, yeni özellikler, performans iyileştirmeleri ve hata düzeltmeleri içeriyor.
            Amacımız, kullanıcı deneyimini artırmak ve oyunun dengesini optimize etmektir.
          </p>
          <Button variant="outline" className="flex items-center gap-2">
            <Info className="w-5 h-5 text-yellow-500" /> 
            <span style={glowStyle} className="text-yellow-500">Detaylı Değişiklik Listesi</span>
          </Button>
        </CardContent>
      </Card>

      {/* Yenilikler ve Değişiklikler */}
      <Card className="shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-up">
        <CardContent>
          <h2 style={glowStyle} className="text-3xl font-bold mb-4 text-yellow-500">✨ Yenilikler ve Değişiklikler</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li style={glowStyle} className="text-yellow-500">
              <strong>Yeni Özellikler:</strong> Yapay zeka destekli oyun asistanı, yeni karakter ve eşyalar.
            </li>
            <li style={glowStyle} className="text-yellow-500">
              <strong>İyileştirmeler:</strong> Performans artışı, daha hızlı yükleme süreleri ve geliştirilmiş arayüz.
            </li>
            <li style={glowStyle} className="text-yellow-500">
              <strong>Denge Güncellemeleri:</strong> Oyun mekanikleri ve karakter özelliklerinde düzenlemeler.
            </li>
          </ul>
          <Button onClick={() => setExpandedFeatures(!expandedFeatures)} className="mb-4" variant="outline">
            {expandedFeatures ? "Daha Az Göster" : "Daha Fazla Göster"} {expandedFeatures ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expandedFeatures && (
            <div className="space-y-3 p-4 bg-gray-700 rounded" data-aos="fade-up">
              <p style={glowStyle} className="text-yellow-500">• Yeni oyun modları ve haritalar eklendi.</p>
              <p style={glowStyle} className="text-yellow-500">• Grafik motoru güncellendi; ışıklandırma ve efektler iyileştirildi.</p>
              <p style={glowStyle} className="text-yellow-500">• Arayüzde sezgisel menü düzenlemeleri yapıldı.</p>
              <p style={glowStyle} className="text-yellow-500">• Sosyal paylaşım özellikleri entegre edildi.</p>
              <p style={glowStyle} className="text-yellow-500">• Kullanıcı deneyimini artıracak interaktif eğitim modülleri eklendi.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Hata Düzeltmeleri */}
      <Card className="shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-right">
        <CardContent>
          <h2 style={glowStyle} className="text-3xl font-bold mb-4 text-yellow-500">🐛 Hata Düzeltmeleri</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li style={glowStyle} className="text-yellow-500">Önemli çökme sorunları giderildi.</li>
            <li style={glowStyle} className="text-yellow-500">Kullanıcı raporlarına göre oluşan ufak hatalar düzeltildi.</li>
            <li style={glowStyle} className="text-yellow-500">Güvenlik güncellemeleri ve performans iyileştirmeleri yapıldı.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Bilinen Hatalar ve Gelecek Güncellemeler */}
      <Card className="shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-up">
        <CardContent>
          <h2 style={glowStyle} className="text-3xl font-bold mb-4 text-yellow-500">⚠️ Bilinen Hatalar & Gelecek Güncellemeler</h2>
          <p style={glowStyle} className="mb-4 text-yellow-500">
            Şu anda üzerinde çalışılan bazı hatalar mevcut. Önümüzdeki güncellemelerde, bu hatalarla birlikte yeni özelliklerin de ekleneceğini planlıyoruz.
          </p>
          <Button onClick={() => setExpandedIssues(!expandedIssues)} className="mb-4" variant="outline">
            {expandedIssues ? "Daha Az Detay" : "Detaylı Bilgi"} {expandedIssues ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expandedIssues && (
            <div className="space-y-3 p-4 bg-gray-700 rounded" data-aos="fade-up">
              <p style={glowStyle} className="text-yellow-500">• Oyuncu verilerinin senkronizasyonunda ara sıra yaşanan gecikmeler.</p>
              <p style={glowStyle} className="text-yellow-500">• Bazı kullanıcıların yaşadığı grafik hataları ve çökme sorunları.</p>
              <p style={glowStyle} className="text-yellow-500">• Gelecek güncellemede çoklu dil desteği eklenecek.</p>
              <p style={glowStyle} className="text-yellow-500">• Ekipman ve skor tablolarında düzenlemeler yapılacak.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Görseller ve Videolar */}
      <Card className="shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-right">
        <CardContent>
          <h2 style={glowStyle} className="text-3xl font-bold mb-4 text-yellow-500">📷 Görseller ve Videolar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-7">
            <img src="images/register.jpg" alt="Güncelleme Görseli" className="rounded-lg shadow-md" data-aos="fade-up" />
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md bg-black" data-aos="fade-up">
              <iframe
                src="videos/tree.mp4"
                title="Güncelleme Tanıtım Videosu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Güncellemenin Yüklenmesi */}
      <Card className="shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-right">
        <CardContent>
          <h2 style={glowStyle} className="text-3xl font-bold mb-4 text-yellow-500">⚙️ Güncellemenin Yüklenmesi</h2>
          <p style={glowStyle} className="mb-4 text-yellow-500">
            Güncelleme, otomatik sistemler aracılığıyla veya manuel olarak indirilebilen bağlantılar üzerinden yüklenebilmektedir.
          </p>
          <div className="flex flex-col gap-4 mb-4">
            <Button variant="outline" className="flex items-center gap-2">
              <DownloadCloud className="w-5 h-5 text-yellow-500" /> 
              <span style={glowStyle} className="text-yellow-500">Steam Üzerinden Güncelle</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <DownloadCloud className="w-5 h-5 text-yellow-500" /> 
              <span style={glowStyle} className="text-yellow-500">Epic Games Store</span>
            </Button>
          </div>
          <Button onClick={() => setExpandedInstallation(!expandedInstallation)} variant="outline">
            {expandedInstallation ? "Yükleme Talimatlarını Gizle" : "Detaylı Yükleme Talimatları"} {expandedInstallation ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expandedInstallation && (
            <div className="mt-4 p-4 bg-gray-700 rounded space-y-2 text-sm" data-aos="fade-up">
              <p style={glowStyle} className="text-yellow-500"><strong>Manuel Yükleme:</strong> Güncelleme dosyasını indirin, arşivi açın ve yükleyici dosyayı çalıştırın.</p>
              <p style={glowStyle} className="text-yellow-500"><strong>Otomatik Güncelleme:</strong> Oyun açılırken otomatik güncelleme kontrolü yapılır, sistem güncellemeyi kendiliğinden indirir.</p>
              <p style={glowStyle} className="text-yellow-500"><strong>Ek Bilgi:</strong> Güncelleme sırasında herhangi bir hata alırsanız destek ekibimizle iletişime geçebilirsiniz.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sıkça Sorulan Sorular (FAQ) */}
      <Card className="shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-up">
        <CardContent>
          <h2 style={glowStyle} className="text-3xl font-bold mb-4 text-yellow-500">❓ Sıkça Sorulan Sorular</h2>
          <ul className="list-disc list-inside space-y-3 mb-4">
            <li style={glowStyle} className="text-yellow-500">
              <strong>Güncelleme neden bu sıklıkta geliyor?</strong> Performans ve kullanıcı deneyimini sürekli iyileştirmek için düzenli olarak güncellemeler yayınlıyoruz.
            </li>
            <li style={glowStyle} className="text-yellow-500">
              <strong>Güncelleme sırasında verilerim etkilenir mi?</strong> Hayır, tüm verileriniz güvenli bir şekilde saklanmaktadır.
            </li>
            <li style={glowStyle} className="text-yellow-500">
              <strong>Destek ekibiyle nasıl iletişime geçebilirim?</strong> Destek sayfamız üzerinden veya e-posta yoluyla bize ulaşabilirsiniz.
            </li>
          </ul>
          <Button onClick={() => setExpandedFAQ(!expandedFAQ)} variant="outline">
            {expandedFAQ ? "Soru-Cevapları Gizle" : "Daha Fazla Soru-Cevap Göster"} {expandedFAQ ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expandedFAQ && (
            <div className="mt-4 p-4 bg-gray-700 rounded space-y-2 text-sm" data-aos="fade-up">
              <p style={glowStyle} className="text-yellow-500"><strong>Sorun:</strong> Güncelleme sırasında hata mesajı alıyorum.</p>
              <p style={glowStyle} className="text-yellow-500"><strong>Cevap:</strong> Lütfen internet bağlantınızı kontrol edin veya destek ekibiyle iletişime geçin.</p>
              <p style={glowStyle} className="text-yellow-500"><strong>Sorun:</strong> Yükleme tamamlanmıyor.</p>
              <p style={glowStyle} className="text-yellow-500"><strong>Cevap:</strong> Bilgisayarınızın güvenlik ayarlarını kontrol edin ve antivirüs programınızı geçici kapatmayı deneyin.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Önceki Güncellemeler */}
      <Card className=" shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-right">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 style={glowStyle} className="text-3xl font-bold text-yellow-500">⏮️ Önceki Güncellemeler</h2>
            <Button onClick={() => setExpandedPreviousUpdates(!expandedPreviousUpdates)} variant="outline">
              {expandedPreviousUpdates ? "Kapat" : "Göster"} {expandedPreviousUpdates ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>
          {expandedPreviousUpdates && (
            <div className="space-y-4 p-4 bg-gray-700 rounded" data-aos="fade-up">
              {previousUpdates.map((update, idx) => (
                <div key={idx} className="border p-3 rounded transition-all duration-300 hover:bg-gray-600">
                  <h3 style={glowStyle} className="text-2xl font-bold text-yellow-500">{update.version}</h3>
                  <p style={glowStyle} className="text-sm mb-2 text-yellow-500">Yayınlanma Tarihi: {update.date}</p>
                  <p style={glowStyle} className="mb-1 text-yellow-500"><strong>Özet:</strong> {update.summary}</p>
                  <p style={glowStyle} className="text-sm text-yellow-500"><strong>Detaylar:</strong> {update.details}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dip Notlar */}
      <Card className="shadow-inner transform transition duration-500 hover:scale-105" data-aos="fade-up">
        <CardContent>
          <p style={glowStyle} className="text-xs text-yellow-500">
            Not: Tüm içerikler örnek amaçlıdır. Gerçek güncelleme bilgileri için resmi duyuruları takip ediniz.
          </p>
        </CardContent>
      </Card>
         {/* Topluluk Yorumları ve Geri Bildirim */}
         <Card className="shadow-lg transform transition duration-500 hover:scale-105" data-aos="fade-up">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 style={glowStyle} className="text-3xl font-bold flex items-center gap-2 text-yellow-500">
              💬 Topluluk Yorumları
            </h2>
            <Button onClick={addLike} className="flex items-center gap-1" variant="ghost">
              <Heart className="w-5 h-5 text-yellow-500" /> {likes}
            </Button>
          </div>
          <div className="max-h-80 overflow-y-auto space-y-3 mb-4 border p-3 rounded" data-aos="fade-up">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="p-2 border-b last:border-b-0 border-gray-600">
                  <span style={glowStyle} className="text-yellow-500">{comment.text}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-400">Henüz yorum yok. İlk yorumu sen yap!</p>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <Input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Yorumunuzu buraya yazın..."
              className="flex-1 bg-gray-700 text-yellow-500 placeholder-yellow-500"
              style={glowStyle}
            />
            <Button onClick={addComment} className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-yellow-500" /> 
              <span style={glowStyle} className="text-yellow-500">Gönder</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
