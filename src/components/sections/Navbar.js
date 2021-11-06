import React from "react";
import { Link } from "gatsby";
import MobileMenu from "./MobileMenu";
import CtaButton from "../ui/CtaButton";

const Header = ({ data }) => {
  return (
    <header>
      <div className="bg-transparent">
        <div className="max-w-screen-content w-full mx-auto">
          <div className="flex justify-between w-full bg-transparent py-9">
            <Link className="flex items-center flex-shrink-0" to="/">
              <img src={data.logo.file.url} alt={data.logo.description} />
            </Link>
            <nav className="hidden md:flex gap-8 items-center">
              {data.navigationLinks.map((link, index) => (
                <Link
                  className="font-bold text-white text-sm transition hover:text-bracketsBlue"
                  to={link.url}
                  key={index}
                >
                  {link.text}
                </Link>
              ))}
              <CtaButton text={data.ctaText} url={data.ctaUrl} />
            </nav>
            <MobileMenu data={data} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
