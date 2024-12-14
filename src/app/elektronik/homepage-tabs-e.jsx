import TabStructure from "@/components/switchers/game-explanation-tab";
import TabComponent from "@/components/switchers/general-tab";
import GameCard from "@/components/cards/home-game-card";
import GlowingButton from "@/components/buttons/glowing-button";

export default function Electronicpage() {
  return (
    <section className="w-full gap-5 py-20 lg:py-40 px-5 flex flex-col items-center justify-center bg-[url('/images/home-bg-1-desktop.png')] bg-cover bg-center">
      <GlowingButton title={"bölümler"} />
      <h2 className="font-semibold max-w-[700px] text-2xl sm:text-[40px] sm:leading-[50px] text-center text-white">
        Teknoloji Merkezli yepyeni bir eğitim sistemi
      </h2>
      <p className="text-white max-w-[750px] text-center text-base">
        Farklı ilgi alanlarında her yaştan ziyaretçi için sürükleyci, interaktif
        ve öğretici içerikleri deneyimle!
      </p>
      <TabComponent tabs={tabData} />
    </section>
  );
}
const groundInteractiveGames = [
  <GameCard
    imageSrc="/images/elektronik1.jpeg"
    iconSrc="/images/E.logo1.png"
    buttonTitle="Keşfet"
    buttonHref="/zonelar"
  >
    <p>
      elektronik
    </p>

    <p>Haydi teknolojiyle dolu bu deneyimi sen de yakından keşfet!</p>
  </GameCard>,
  <GameCard
    imageSrc="/images/yazılım1.jpeg"
    iconSrc="/images/algoritma.jpeg"
    buttonTitle="Keşfet"
    buttonHref="/zonelar"
  >
    <p>Bu yolun sonu nereye bağlanacağı senin çabana bağlı!</p>
    <p>
      favori bölümü seç ve öğrenmeye başla
    </p>
  </GameCard>,
  <GameCard
    imageSrc="/images/robotik1.jpeg"
    iconSrc="/images/robotik2.jpeg"
    buttonTitle="Keşfet"
    buttonHref="/zonelar"
  >
    <p>Seçtiğin yere dikkat et</p>
    <p>
      robotik favori bölümüm
    </p>
    <p>Haydi bakalım</p>
  </GameCard>,
];

const wallInteractiveGames = [
  <GameCard
    imageSrc="/images/yazılım1.jpeg"
    iconSrc="/images/yazılım2.jpeg"
    buttonTitle="Keşfet"
    buttonHref="/zonelar"
  >
    <p>
      yazılım
    </p>

    <p>
    Algoritma mantığına güveniyormusun hadi bakalım ylun açık olsun.
    </p>
  </GameCard>,
];

const rgbPanelGames = [
  <GameCard
    imageSrc="/images/mekatronik1.jpeg"
    iconSrc="/images/mekatronik2.jpeg"
    buttonTitle="Keşfet"
    buttonHref="/zonelar"
  >
    <p>mekatronik   </p>
    <p>
     makine ve yazılım ile mi uğraşıyorsun? işte bu alan tam senlik
    </p>
  </GameCard>,
  <GameCard
    imageSrc="/images/algoritma.jpeg"
    iconSrc="/images/algoritma.jpeg"
    buttonTitle="Keşfet"
    buttonHref="/zonelar"
  >
    <p>
       Algoritma
    </p>
  </GameCard>,
];

const tabData = [
  { name: "elekronik", content: groundInteractiveGames },
  { name: "yazılım", content: wallInteractiveGames },
  { name: "robotik", content: rgbPanelGames },
];
