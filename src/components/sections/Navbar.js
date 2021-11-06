import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import CtaButton from "../ui/CtaButton";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMainNavigation {
        logo {
          ... on ContentfulAsset {
            description
            file {
              url
            }
          }
        }
        navigationLinks {
          text
          url
        }
        ctaText
        ctaUrl
      }
    }
  `);

  return (
    <header>
      <div className="bg-transparent">
        <div className="max-w-screen-content w-full mx-auto">
          <div className="flex justify-between w-full bg-transparent py-9">
            <Link className="flex items-center" to="/">
              <img
                src={data.contentfulMainNavigation.logo.file.url}
                alt={data.contentfulMainNavigation.logo.description}
              />
            </Link>
            <nav className="flex gap-8 items-center">
              {data.contentfulMainNavigation.navigationLinks.map(
                (link, index) => (
                  <Link
                    className="font-bold text-white transition hover:text-bracketsBlue"
                    style={{ fontSize: "14.4px" }}
                    to={link.url}
                    key={index}
                  >
                    {link.text}
                  </Link>
                )
              )}
              <CtaButton
                text={data.contentfulMainNavigation.ctaText}
                url={data.contentfulMainNavigation.ctaUrl}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
