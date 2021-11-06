import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout/Layout";
import LandingPageHeroBackground from "../components/sections/LandingPageHeroBackground";
import Hero from "../components/sections/Hero";
import Tile from "../components/sections/Tile";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTile(
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
      <LandingPageHeroBackground />
      <Hero />
      <section className="max-w-screen-content w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-8 lg:gap-y-12 text-white py-20">
          {data.allContentfulTile.edges.map((edge) => (
            <Tile
              title={edge.node.title}
              description={edge.node.description}
              ctaText={edge.node.ctaText}
              ctaUrl={edge.node.ctaUrl}
              img={edge.node.image.file.url}
              imgAlt={edge.node.image.description}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
