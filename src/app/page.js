import HomePageAdvantage from "./@components/homepage-advantage";
import HomePageCards from "./@components/homepage-cards";
import HomePageOpening from "./@components/homepage-opening";
import HomePageSlider from "./@components/homepage-slider";
import HomePageTabs from "./@components/homepage-tabs";

import HomepageAdvancee from "./elektronik/homepage-advance-e";
import HomepageTabse from "./elektronik/homepage-tabs-e";
import ElektronikHomePageOpening from "./elektronik/HomePage";

export default function Home() {
  return (
    <div>
      <HomePageOpening />
      <HomePageTabs />
      <HomePageAdvantage />
      <HomePageSlider />
      <HomePageCards />

      {/* Elektronik bileşenler */}
      <ElektronikHomePageOpening />
      <HomepageTabse />
      <HomepageAdvancee />
    </div>
  );
}
