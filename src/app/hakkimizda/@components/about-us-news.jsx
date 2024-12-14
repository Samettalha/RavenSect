import GlowingButton from "@/components/buttons/glowing-button";
import NewsCard from "@/components/cards/news-card";
export default function AboutUsNews() {
  return (
    <div className="flex flex-col items-center justify-center sm:py-28">
      <div className="max-w-[1500px] w-full flex flex-col items-center justify-center p-5 gap-5">
        <GlowingButton title={"Haberler :D"} />
        <div className="flex flex-col justify-center items-center p-5 gap-5 max-w-[650px] text-center text-white">
          <p className="text-[32px] leading-[56x] font-semibold">
            kendini Keşfetmenin Tam Zamanı
          </p>
          <p>
            her yaştan farklı ilgi alanlarına sahip mühendisler için yapılmış bir sayfadır
          </p>
        </div>
      </div>
      <div className="max-w-[1500px] w-full flex items-center justify-center flex-wrap">
        <div className="max-w-[500px] sm:h-[550px]  w-full p-5">
          <NewsCard
            date="2024"
            month="Aha ben bunlar "
            title="haber!"
            description="ben buuuu!"
            linkHref=""
          />
        </div>
        <div className="max-w-[500px] sm:h-[550px]   w-full p-5">
          <NewsCard
            date="2024"
            month="Show Tv"
            title="ben haberlere çıktım laa"
            description="Teknoloji çağı gençleri bozuyo(ben hariç:D)"
            linkHref=""
          />
        </div>
        <div className="max-w-[500px] sm:h-[550px]  w-full p-5">
          <NewsCard
            date="2024"
            month="temmuzda haberlere çıktım ama link koymayacağım"
            title="haber:D"
            description="naber ."
            linkHref=""
          />
        </div>
      </div>
    </div>
  );
}
