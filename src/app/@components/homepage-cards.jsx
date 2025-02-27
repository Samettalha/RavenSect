import HomeFeatureCard from "@/components/cards/home-feature-card";

export default function HomePageCards() {
  return (
    <div className="w-full py-24 min-h-screen flex flex-col gap-16 items-center justify-center text-white text-center px-5 bg-[url('/images/adventure-background.jpg')] bg-cover bg-center bg-blend-darken">
      <div className="flex flex-col gap-5 items-center justify-center">
        <p className="max-w-[820px] font-semibold text-[40px] leading-[56px] text-yellow-400">
          Macera ve Aksiyonla Dolu Bir Dünya
        </p>
        <p className="max-w-[750px] text-[#D3D3D3]">
          Heyecan verici görevler, cesur kahramanlar ve sonsuz keşifler seni bekliyor.
        </p>
      </div>

      <div className="flex items-center justify-between gap-16 flex-wrap max-w-[900px]">
        <HomeFeatureCard
          imageUrl={"/svg/adventure-card-1.svg"}  // Yeni aksiyon temalı görsel
          title={"Kahramanlık Yolu"}
          description={
            "Cesur bir kahraman olarak destanını yaz, zorlu görevleri tamamla ve büyük ödüller kazan."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/adventure-card-2.svg"}  // Yeni aksiyon temalı görsel
          title={"Tehlikeli Düşmanlar"}
          description={
            "Her köşe başında tehlikeler seni bekliyor. Düşmanlarına karşı savaş, strateji geliştir."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/adventure-card-3.svg"}  // Yeni aksiyon temalı görsel
          title={"Ekip Çalışması"}
          description={
            "Birlikte savaşmak, zorlu engelleri aşmak için takım ruhuna ihtiyacın var."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/adventure-card-4.svg"}  // Yeni aksiyon temalı görsel
          title={"Efsanevi Keşifler"}
          description={
            "Keşfedilmemiş topraklara adım at, sırları çöz, kayıp şehirleri bul."
          }
        />
      </div>
    </div>
  );
}
