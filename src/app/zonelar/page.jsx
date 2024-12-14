import ZoneCard from "@/components/cards/zone-card";
import TabComponent from "@/components/switchers/general-tab";
import ZonesOpening from "./@components/zones-opening";
import GlowingButton from "@/components/buttons/glowing-button";
export default function Zones() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <ZonesOpening />

      <TabComponent tabs={tabData} zonesTab useFlexLayout fullscreen />
    </div>
  );
}

const groundInteractiveGames = [
  <ZoneCard
    key="naber"
    bgImage="/images/kurt1.jpeg"
    iconSrc="/images/kurt1.jpeg"
    title={
      <p className="font-normal">
        baklava<b> turhıs</b>
      </p>
    }
    description="soğuk baklava."
    playerCount="2-6"
    sessionTime="5"
    price="125"
    videoSrc="/videos/video.mp4"
  />,
  <ZoneCard
    key="wayfinder-ground"
    bgImage="/images/video.mp4"
    iconSrc="/images/"
    title={
      <p className="font-normal">
        fıstık<b>sarma</b>
      </p>
    }
    description="fıstıklı sarma işte ne kurcalıyon."
    playerCount="1-2"
    sessionTime="5"
    price="125"
    videoSrc="/videos/"
    isRight
  />,
  <ZoneCard
    key="dontfall-ground"
    bgImage="/images/"
    iconSrc="/images/"
    title={
      <p className="font-normal">
        midye<b>baklava</b>
      </p>
    }
    description="bol dolgulu baklava"
    playerCount="1-4"
    sessionTime="5"
    price="125"
    videoSrc="/videos/"
  />,
];

const wallInteractiveGames = [
  <ZoneCard
    key="pointpop-wall"
    bgImage="/images/"
    iconSrc="/images/"
    title={
      <p className="font-normal">
        soğuk<b>baklava</b>
      </p>
    }
    description="sütlü çıkolatalı bakvalava"
    playerCount="112"
    sessionTime="5"
    price="12500"
    videoSrc="/videos/"
  />
];

const rgbPanelGames = [
  <ZoneCard
    key="hexball-rgb"
    bgImage="/images/"
    iconSrc="/images/"
    title={
      <p className="font-normal">
      kadayifli <b>baklava</b>
      </p>
    }
    description="“kadayifli baklava işte ne karışıyon aq."
    playerCount="2-4"
    sessionTime="5"
    price="125"
    videoSrc="/videos/"
  />,
  <ZoneCard
    key="wayfinder-rgb"
    bgImage="/images/"
    iconSrc="/images/"
    title={
      <p className="font-normal">
        eyyyy<b>wwww</b>
      </p>
    }
    description="“öyle'mi olmuş vaybe (şaşırma belirtisi :D)."
    playerCount="1-4"
    sessionTime="5"
    price="125"
    videoSrc="/videos/"
    isRight
  />,
  <ZoneCard
    key="wayfinder-rgb"
    bgImage="/images/"
    iconSrc="/images/"
    title={
      <p className="font-normal">
        eyyyywww<b>ffff</b>
      </p>
    }
    description="“öyle'mi olmuş vaybe (şaşırma belirtisi :D)."
    playerCount="1-4"
    sessionTime="5"
    price="125"
    videoSrc="/videos/"
    isRight
  />,
];

const tabData = [
  { name: "Bilgisayar Dalları", content: groundInteractiveGames },
  { name: "Elektronik Dalları", content: wallInteractiveGames },
  { name: "Mekanik Dalları", content: rgbPanelGames },
];
