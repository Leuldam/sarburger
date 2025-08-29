import React from "react";
import "../style/globals.css";
import Header from "../component/Header";
import OurStory from "../app/ourstory/page";
import AboutUsSection from "../app/about/page";

 
export default function Home() {
  return (
    <>
      <Header />
      <OurStory />
      <AboutUsSection />
    </>
  );
}

