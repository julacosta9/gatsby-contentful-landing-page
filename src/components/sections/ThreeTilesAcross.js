import React from "react";
import Tile from "./Tile";

const ThreeTilesAcross = ({ data }) => {
  return (
    <section className="max-w-screen-content w-full mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-8 lg:gap-y-12 text-white py-20">
        {data.map((tile) => (
          <Tile
            title={tile.title}
            description={tile.description}
            ctaText={tile.ctaText}
            ctaUrl={tile.ctaUrl}
            img={tile.image.file.url}
            imgAlt={tile.image.description}
            key={tile.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ThreeTilesAcross;
