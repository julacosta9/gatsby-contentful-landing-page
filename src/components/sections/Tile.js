import React from "react";
import { Link } from "gatsby";
import arrow from "../../images/arrow-orange.svg";

const Tile = ({ title, description, ctaText, ctaUrl, img, imgAlt }) => {
  return (
    <Link
      to={ctaUrl}
      className="relative flex items-end bg-white rounded text-black w-full sm:w-7/12 lg:w-1/3 sm:mx-auto lg:mx-0 p-8 shadow-md lg:shadow-none hover:shadow-md transition ease-out duration-200 transform hover:-translate-y-2 group"
      style={{ height: "240px" }}
    >
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">{title}</div>
        <div className="text-sm">{description}</div>
        <div className="flex items-center font-bold text-sm text-bracketsOrange">
          {ctaText}
          <img className="h-3 w-3 mt-0.5 ml-2" src={arrow} alt="" />
        </div>
      </div>
      <img
        className="absolute transform transition duration-200 group-hover:scale-105"
        style={{ height: "222px", top: "-72px", right: "-26px" }}
        src={img}
        alt={imgAlt}
      />
    </Link>
  );
};

export default Tile;
