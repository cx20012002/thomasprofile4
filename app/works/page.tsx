import React from "react";
import Banner from "./components/Banner";
import Works from "./components/Works";
import { getSelectedWorks } from "@/utils/api";

export default async function page() {
  const works = await getSelectedWorks();

  return (
    <>
      <Banner />
      <Works works={works} />
    </>
  );
}
