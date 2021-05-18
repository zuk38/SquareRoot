import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection.js";
import Partner from "../components/Partner";

export default function Home(props) {
  return (
    <>
      <HeroSection />
      <Partner/>
    </>
  );
}
