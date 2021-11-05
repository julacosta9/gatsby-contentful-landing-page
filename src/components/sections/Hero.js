import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Hero = () => {
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

  return <section>Yo</section>;
};

export default Hero;
