import FaqCard from "@/components/cards/faq-card";
import GlowingButton from "@/components/buttons/glowing-button";
import Link from "next/link";

export default function Faq() {
  return (
    <div className="flex flex-col gap-24 mt-5 sm:mt-20 text-green-500 p-10 border border-yellow-700 shadow-lg shadow-red-900">
      <div className="flex flex-col gap-5 items-center justify-center text-center">
        <GlowingButton title={"SSS"} className="text-red-500" />
        <p className="text-[32px] leading-[56px] font-semibold">
          Sıkça Sorulan Sorular (Gizli Maceralar...)
        </p>
        <p className="max-w-[650px] text-gray-400">
          Bu bölgedeki tüm sırlar burada... Hazır mısınız?
        </p>
      </div>
      <div className="flex gap-5 flex-col w-full items-center justify-center">
        <FaqCard
          content={
            "Karakterinizi seçin ve bu tehlikeli yolda ilerlemeye başlayın. Ama dikkatli olun, her adımda yeni bir tehlike gizli!"
          }
          title={"Oyun dünyasında nasıl bir karakter yaratabilirim?"}
        />
        <FaqCard
          content={
            "Oyun, her kahramana uygun zorluklar sunar. Kimse geri dönmeden önce neyle karşılaştığını bilmez!"
          }
          title={"Oyunda hangi tür mücadeleler var?"}
        />
        <FaqCard
          content={
            "Bu dünyada yalnız değilsiniz. Başka kahramanlarla takım kurarak daha büyük tehlikelere karşı savaşabilirsiniz. Ama güvendiğinizden emin olun!"
          }
          title={"Oyunda takım kurabilir miyim?"}
        />
        <FaqCard
          content={
            <div>
              "Oyun dünyasında keşfedecek çok şey var. Eğer cesaretiniz varsa, <Link
                href={""}
                target="blank"
                className="text-red-500 font-bold"
              >
                Gizli bölgeleri keşfetmek için buraya tıklayın...
              </Link>"
            </div>
          }
          title={"Oyun dünyasında hangi gizemli yerleri keşfedebilirim?"}
        />
        <FaqCard
          content={
            "Oyun, cesur maceracılara her an yeni bir tecrübe sunar. En derin sırları keşfetmeye hazır olun!"
          }
          title={"Oyunda ilerledikçe neler keşfedeceğim?"}
        />
      </div>
    </div>
  );
}
