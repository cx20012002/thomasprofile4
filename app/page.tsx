import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import HomeFooter from "./components/HomeFooter";
import Intro from "./components/Intro";
import SelectedWorks from "./components/SelectedWorks";

export default async function Home() {
  return (
    <div className="font-francoisOne text-primary">
      <Banner />
      <Intro />
      <SelectedWorks />
      <AboutMe/>
      <HomeFooter/>
    </div>
  );
}
