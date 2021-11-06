import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../../images/favicon.ico";

const Head = ({ title }) => {
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
      <meta
        name="description"
        content="This mock landing page built with Gatsby and Contenful. Almost everything on this page can be edited in Contentful!"
      />
    </Helmet>
  );
};

export default Head;
