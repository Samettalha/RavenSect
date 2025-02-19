import HomeFeatureCard from "@/components/cards/home-feature-card";
import GlowingButton from "@/components/buttons/glowing-button";

export default function HomePageCards() {
  return (
    <div className="w-full py-24 min-h-screen flex flex-col gap-16 items-center justify-center text-white text-center px-5 bg-[url('/images/horrorbackgraund.jpg')] bg-cover bg-center bg-blend-darken">
      <div className="flex flex-col gap-5 items-center justify-center">
        <p className="max-w-[820px] font-semibold text-[40px] leading-[56px] text-[#FF4D00]">
          Korku ve Gizemle Yoğunlaştırılmış Deneyim
        </p>
        <p className="max-w-[750px] text-[#D3D3D3]">
          Her yaştan ziyaretçiye hem korkuyu hem de gizemi keşfetme fırsatı.
        </p>
      </div>

      <div className="flex items-center justify-between gap-16 flex-wrap max-w-[900px]">
        <HomeFeatureCard
          imageUrl={"/svg/horror-card-1.svg"}
          title={"Gizemli Hedefler"}
          description={
            "Farklı korku unsurlarına hitap eden, bilinmeyenle sınırsız kaynak."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/horror-card-2.svg"}
          title={"Korku Dolu Etkileşim"}
          description={
            "Kullanıcıların korkuya duyarlı tepkileriyle dijital dünyanın karanlık köşelerini keşfedin."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/horror-card-3.svg"}
          title={"Karanlık Takım Ruhu"}
          description={
            "Ekip çalışması gerektiren projelerde korku dolu bir ortamda başarıya ulaşın."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/horror-card-4.svg"}
          title={"Korku ve Eğlence"}
          description={
            "Korku dolu aktivitelerle sizi bekleyen dijital bir dünya."
          }
        />
      </div>
    </div>
  );
}
