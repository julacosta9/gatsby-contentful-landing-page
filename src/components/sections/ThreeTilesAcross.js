import React from "react";
import Tile from "./Tile";

const ThreeTilesAcross = ({ data }) => {
  return (
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
  );
};

export default ThreeTilesAcross;
