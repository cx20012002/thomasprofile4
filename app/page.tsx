import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import HomeFooter from "./components/HomeFooter";
import Intro from "./components/Intro";
import SelectedWorks from "./components/SelectedWorks";

export default async function Home() {
  return (
    <>
      <Banner />
      <Intro />
      <SelectedWorks />
      <AboutMe/>
      <HomeFooter/>
    </>
  );
}
