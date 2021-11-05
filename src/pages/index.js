import React from "react";
import Layout from "../components/layout/Layout";
import LandingPageHeroBackground from "../components/sections/LandingPageHeroBackground";
import Hero from "../components/sections/Hero";
import Tile from "../components/sections/Tile";

const IndexPage = () => {
  return (
    <Layout>
      <LandingPageHeroBackground />
      <Hero />
      <section className="max-w-screen-content w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 lg:gap-y-12 text-white py-10">
          <Tile />
          <Tile />
          <Tile />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
