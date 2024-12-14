import HomeFeatureCard from "@/components/cards/home-feature-card";
import GlowingButton from "@/components/buttons/glowing-button";

export default function HomePageCards() {
  return (
    <div className="w-full py-24 min-h-screen flex flex-col gap-16 items-center justify-center text-white text-center px-5 bg-[url('/images/arkaplan14.jpg')] bg-cover bg-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <GlowingButton title={"Nedir"} />
        <p className="max-w-[820px] font-semibold text-[40px] leading-[56px]">
          Teknolojiyle Deneyim, sınırsız kaynak
        </p>
        <p className="max-w-[750px]">
          Her yaştan ziyaretçiye hem eğlenip hemde öğrenbilirsiniz
        </p>
      </div>

      <div className="flex items-center justify-between gap-16  flex-wrap max-w-[900px]">
        <HomeFeatureCard
          imageUrl={"/svg/feature-card.svg"}
          title={"Geniş Hedef Kitlesi"}
          description={
            "Farklı ilgi alanına hitap eden, mühendislik alanları ile sınırsınz kaynak."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/feature-card-2.svg"}
          title={"Kullanıcı Etkileşimli"}
          description={
            "Kullanıcıların hareketlerine ve etkileşimlerine duyarlı deneyimlerle dijital dünyanın bir parçası olun."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/feature-card-3.svg"}
          title={"Takım Ruhu"}
          description={
            "Ekip çalışması gerektiren projelerde tam destek ile iyi bir çaılma ortamı."
          }
        />
        <HomeFeatureCard
          imageUrl={"/svg/feature-card-4.svg"}
          title={"Eğlenceli ve öğretici"}
          description={
            "Eğlence dolu ve keyifli aktivitelerle  dijital bir dünya sizi bekliyor."
          }
        />
      </div>
    </div>
  );
}
