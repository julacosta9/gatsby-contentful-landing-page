import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CtaButton from "../ui/CtaButton";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulLandingPageHeroSection {
        tagline
        header
        subheader
        primaryCtaText
        primaryCtaUrl
        secondaryCtaText
        secondaryTextUrl
      }
    }
  `);

  return (
    <section className="max-w-screen-content w-full mx-auto">
      <div className="flex flex-col gap-5 sm:gap-8 text-white py-7">
        <div className="font-bold text-sm sm:text-lg uppercase">
          {data.contentfulLandingPageHeroSection.tagline}
        </div>
        <div className="font-bold text-4xl sm:text-6xl max-w-lg">
          {data.contentfulLandingPageHeroSection.header}
        </div>
        <div className="text-lg">
          {data.contentfulLandingPageHeroSection.subheader}
        </div>
        <div className="flex flex-col sm:flex-row w-max pt-5 sm:pt-0 gap-4">
          <CtaButton
            text={data.contentfulLandingPageHeroSection.primaryCtaText}
            url={data.contentfulLandingPageHeroSection.primaryCtaUrl}
          />
          <CtaButton
            secondary
            text={data.contentfulLandingPageHeroSection.secondaryCtaText}
            url={data.contentfulLandingPageHeroSection.secondaryCtaUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
