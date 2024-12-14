import AboutUsImages from "./@components/about-us-images";
import AboutUsNews from "./@components/about-us-news";
import AboutUsOpening from "./@components/about-us-opening";
import AboutUsStats from "./@components/about-us-stats";

export default function AboutUs() {
  return (
    <div>
      <div className="md:ml-28">
        <AboutUsOpening />

        <AboutUsStats />
        <div className="md:ml-10">
          <AboutUsImages />
        </div>
      </div>
      <AboutUsNews />
    </div>
  );
}
