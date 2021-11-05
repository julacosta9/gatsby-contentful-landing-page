import React from "react";
// import { graphql, useStaticQuery } from "gatsby";

const Header = () => {
  // const titles = useStaticQuery(graphql`
  //   query {
  //     allContentfulCourse {
  //       edges {
  //         node {
  //           title
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <header>
      Hi!
      {/* {titles.allContentfulCourse.edges.map((edge) => {
        return <div>{edge.node.title}</div>;
      })} */}
    </header>
  );
};

export default Header;
