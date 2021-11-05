import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import arrow from "../../images/arrow.svg";

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
        ctaColor
      }
    }
  `);

  return (
    <header>
      <div className="bg-transparent">
        <div className="max-w-screen-content w-full mx-auto">
          <div className="flex justify-between w-full bg-transparent py-4">
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
                    className="font-bold text-white transition transform hover:scale-105"
                    to={link.url}
                    key={index}
                  >
                    {link.text}
                  </Link>
                )
              )}
              <Link to={data.contentfulMainNavigation.ctaUrl}>
                <button
                  className="flex items-center font-bold text-white px-4 py-2 rounded hover:shadow transition group"
                  style={{
                    background: `${data.contentfulMainNavigation.ctaColor}`,
                  }}
                >
                  {data.contentfulMainNavigation.ctaText}
                  <img
                    className="h-3 w-3 mt-0.5 ml-2 transform transition group-hover:translate-x-1"
                    src={arrow}
                    alt=""
                  />
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
