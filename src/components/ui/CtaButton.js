import React from "react";
import { Link } from "gatsby";
import arrow from "../../images/arrow.svg";

const CtaButton = ({ text, url, secondary }) => {
  return (
    <Link to={url}>
      <button
        className={`${
          secondary
            ? "bg-bracketsGray hover:bg-bracketsGray-dark"
            : "bg-bracketsBlue hover:bg-bracketsBlue-dark"
        } flex items-center font-bold text-sm text-white px-5 rounded hover:shadow transition group`}
        style={{ height: "40px" }}
      >
        {text}
        <img
          className="h-3 w-3 mt-0.5 ml-2 transform transition group-hover:translate-x-0.5"
          src={arrow}
          alt=""
        />
      </button>
    </Link>
  );
};

export default CtaButton;
