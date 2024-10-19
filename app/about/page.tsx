import React from "react";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import { client } from "@/sanity/lib/client";

async function getAbout() {
  const data = await client.fetch(`*[_type == "about"][0]`);
  return data;
}

export default async function page() {
  const aboutData = await getAbout();

  return (
    <>
      <Banner aboutData={aboutData} />
      <Intro aboutText={aboutData.aboutText}/>
      <Experience aboutData={aboutData} />
    </>
  );
}
