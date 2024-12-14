import FaqCard from "@/components/cards/faq-card";
import GlowingButton from "@/components/buttons/glowing-button";
import Link from "next/link";
export default function Faq() {
  return (
    <div className="flex flex-col gap-24 mt-5 sm:mt-20">
      <div className="flex flex-col gap-5 items-center justify-center  text-white text-center">
        <GlowingButton title={"SSS"} />
        <p className="text-[32px] leading-[56px] font-semibold">
          Sıkça Sorulan Sorular(aslında sorulmuyo:D)
        </p>
        <p className="max-w-[650px]">
          baklava
        </p>
      </div>
      <div className="flex gap-5 flex-col w-full items-center justify-center">
        <FaqCard
          content={
          "Baklava (Osmanlıca: باقلوا) Türk, Orta Doğu, Balkan ve Güney Asya mutfaklarında yer etmiş önemli bir hamur tatlısıdır. İnce yufkaların arasına yöreye göre ceviz, antep fıstığı, badem veya fındık konarak yapılır. Genel olarak şeker şerbeti ile tatlandırılır. Ayrıca bal şerbeti de kullanılabilir. Bazı ticari firmalar kendi özel şerbetlerini kullanırlar.AB Komisyonu tarafından 8 Ağustos 2013 tarihinde baklavanın Türk tatlısı olduğu tescil edilmiştir"
            
          }
          title={"baklava nedir?"}
        />
        <FaqCard
          content={
          "Baklava (Osmanlıca: باقلوا) Türk, Orta Doğu, Balkan ve Güney Asya mutfaklarında yer etmiş önemli bir hamur tatlısıdır. İnce yufkaların arasına yöreye göre ceviz, antep fıstığı, badem veya fındık konarak yapılır. Genel olarak şeker şerbeti ile tatlandırılır. Ayrıca bal şerbeti de kullanılabilir. Bazı ticari firmalar kendi özel şerbetlerini kullanırlar.AB Komisyonu tarafından 8 Ağustos 2013 tarihinde baklavanın Türk tatlısı olduğu tescil edilmiştir."
            
          }
          title={"baklava hangi tür deneyimler sunuluyor?"}
        />
        <FaqCard
          content={"Baklava (Osmanlıca: باقلوا) Türk, Orta Doğu, Balkan ve Güney Asya mutfaklarında yer etmiş önemli bir hamur tatlısıdır. İnce yufkaların arasına yöreye göre ceviz, antep fıstığı, badem veya fındık konarak yapılır. Genel olarak şeker şerbeti ile tatlandırılır. Ayrıca bal şerbeti de kullanılabilir. Bazı ticari firmalar kendi özel şerbetlerini kullanırlar.AB Komisyonu tarafından 8 Ağustos 2013 tarihinde baklavanın Türk tatlısı olduğu tescil edilmiştir."}
          title={"XPZone hangi yaş grubuna hitap eder?"}
        />
        <FaqCard
          content={
            <div>
              XPZone’daki EE link yok{" "}
              <Link
                href={
                  ""
                }
                target="blank"
                className="text-orange-500 font-bold"
              >
                deneyim çözümleri yoook
              </Link>
              baklava var{" "}
            </div>
          }
          title={"XPZone’daki deneyimler ne tür etkileşimler içeriyor?"}
        />
        <FaqCard
          content={
            "baklava içeriyor"
          }
          title={"XPZone’da sosyal medya etkileşimi nasıl teşvik ediliyor? ediliyormu?"}
        />
      </div>
    </div>
  );
}
