import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../../images/favicon.ico";

const Head = ({ title, metaDescription }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      link={[{ rel: "shortcut icon", type: "image/ico", href: `${favicon}` }]}
    >
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default Head;
