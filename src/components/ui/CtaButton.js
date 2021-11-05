import React from "react";
import { Link } from "gatsby";
import arrow from "../../images/arrow.svg";

const CtaButton = ({ text, url, secondary }) => {
  return (
    <Link to={url}>
      <button
        className={`${
          secondary ? "bg-bracketsGray" : "bg-bracketsBlue"
        } flex items-center font-bold text-white px-4 py-2 rounded hover:shadow transition group`}
      >
        {text}
        <img
          className="h-3 w-3 mt-0.5 ml-2 transform transition group-hover:translate-x-1"
          src={arrow}
          alt=""
        />
      </button>
    </Link>
  );
};

export default CtaButton;
