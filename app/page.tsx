import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import HomeFooter from "./components/HomeFooter";
import Intro from "./components/Intro";
import SelectedWorks from "./components/SelectedWorks";
import { getHomeData, getSelectedWorks } from "@/utils/api";

export default async function Home() {
  const homeData = await getHomeData();
  const selectedWorks = await getSelectedWorks();

  return (
    <>
      <Banner bannerImages={homeData.bannerImages} />
      <Intro sectionText={homeData.sectionText[0]} />
      <SelectedWorks sectionText={homeData.sectionText[1]} selectedWorks={selectedWorks} />
      <AboutMe aboutMe={homeData.aboutMe} />
      <HomeFooter footer={homeData.footer} />
    </>
  );
}
