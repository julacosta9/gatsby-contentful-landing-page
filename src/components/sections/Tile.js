import React from "react";
import { Link } from "gatsby";
import arrow from "../../images/arrow-orange.svg";

const Tile = ({ title, description, ctaText, ctaUrl, img, imgAlt }) => {
  return (
    <Link
      to={ctaUrl}
      className="relative flex items-end bg-white rounded text-black w-full md:w-1/2 lg:w-1/3 md:mx-auto lg:mx-0 p-8 shadow-md lg:shadow-none hover:shadow-md transition ease-out duration-200 transform hover:-translate-y-2 group"
      style={{ height: "240px" }}
    >
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">{title}</div>
        <div style={{ fontSize: "14.4px" }}>{description}</div>
        <div
          className="flex items-center font-bold text-bracketsOrange"
          style={{ fontSize: "14.4px" }}
        >
          {ctaText}
          <img className="h-3 w-3 mt-0.5 ml-2" src={arrow} alt="" />
        </div>
      </div>
      <img
        className="absolute transform transition duration-200 group-hover:scale-105"
        style={{ height: "222px", top: "-75px", right: "-23px" }}
        src={img}
        alt={imgAlt}
      />
    </Link>
  );
};

export default Tile;
