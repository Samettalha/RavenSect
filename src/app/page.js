import HomePageAdvantage from "./@components/homepage-advantage";
import HomePageCards from "./@components/homepage-cards";
import HomePageOpening from "./@components/homepage-opening";
import HomePageSlider from "./@components/homepage-slider";
import HomePageTabs from "./@components/homepage-tabs";

export default function Home() {
  return (
    <div>
      <HomePageOpening />
      <HomePageTabs />
      <HomePageAdvantage />
      <HomePageSlider />
      <HomePageCards />
    </div>
  );
}
