import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import arrow from "../../images/arrow-orange.svg";
import chopper from "../../images/chopper@2x.png";

const Tile = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     contentfulLandingPageHeroSection {
  //       tagline
  //       header
  //       subheader
  //       primaryCtaText
  //       primaryCtaUrl
  //       secondaryCtaText
  //       secondaryTextUrl
  //     }
  //   }
  // `);

  return (
    <Link
      to="#"
      className="relative flex items-end bg-white rounded text-black w-full lg:w-1/3 p-5 hover:shadow-md transition ease-out duration-200 transform hover:-translate-y-2 group"
      style={{ height: "240px" }}
    >
      <div className="flex flex-col gap-4">
        <div className="font-bold">Augmented Reality</div>
        <div className="">An interactive experience like no other.</div>
        <Link
          className="flex items-center font-bold text-bracketsOrange"
          to="#learn-more"
        >
          Learn more
          <img className="h-3 w-3 mt-0.5 ml-2 " src={arrow} alt="" />
        </Link>
      </div>
      <img
        className="absolute -top-12 -right-5 w-44 transform transition duration-200 group-hover:scale-105"
        src={chopper}
        alt="helicopter"
      />
    </Link>
  );
};

export default Tile;
