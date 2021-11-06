import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layouts/Layout";
import Head from "../components/sections/Head";
import LandingPageHeroBackground from "../components/sections/LandingPageHeroBackground";
import Hero from "../components/sections/Hero";
import ThreeTilesAcross from "../components/sections/ThreeTilesAcross";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLandingPage(
        filter: { node_locale: { eq: "en-US" }, pageTitle: { eq: "Brackets" } }
      ) {
        edges {
          node {
            pageTitle
            metaDescription
            mainNavigation {
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
                description
              }
              ctaText
              ctaUrl
            }
            heroSection {
              tagline
              header
              subheader
              primaryCtaText
              primaryCtaUrl
              secondaryCtaText
              secondaryTextUrl
            }
            heroImage {
              image {
                ... on ContentfulAsset {
                  file {
                    url
                  }
                }
              }
            }
            tiles {
              title
              description
              ctaText
              ctaUrl
              image {
                ... on ContentfulAsset {
                  description
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    pageTitle,
    metaDescription,
    mainNavigation,
    heroSection,
    heroImage,
    tiles,
  } = data.allContentfulLandingPage.edges[0].node;

  return (
    <Layout mainNavigationData={mainNavigation}>
      <Head title={pageTitle} metaDescription={metaDescription} />
      <LandingPageHeroBackground data={heroImage} />
      <Hero data={heroSection} />
      <ThreeTilesAcross data={tiles} />
    </Layout>
  );
};

export default Home;
