import React from "react";
import Layout from "../components/layout/Layout";
import LandingPageHeroBackground from "../components/sections/LandingPageHeroBackground";
import Hero from "../components/sections/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <LandingPageHeroBackground />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
