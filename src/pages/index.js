import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layouts/Layout";
import Head from "../components/sections/Head";
import LandingPageHeroBackground from "../components/sections/LandingPageHeroBackground";
import Hero from "../components/sections/Hero";
import ThreeTilesAcross from "../components/sections/ThreeTilesAcross";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTile(
        sort: { fields: order }
        filter: {
          contentful_id: {
            in: [
              "1qu57uKR2TbvpDfCPEFwAO"
              "5CIdAm3a8KyHtYK5N3Lg56"
              "CC9a9xgLbpb5L4zmQJ4Sm"
            ]
          }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            title
            description
            ctaText
            ctaUrl
            image {
              description
              ... on ContentfulAsset {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Home" />
      <LandingPageHeroBackground />
      <Hero />
      <ThreeTilesAcross data={data} />
    </Layout>
  );
};

export default Home;
