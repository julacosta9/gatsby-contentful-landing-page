import React from "react";
import * as styles from "./landingPageHeroBackground.module.css";

const LandingPageHeroBackground = ({ data }) => {
  return (
    <>
      <div
        className={`${styles.bg} absolute top-0 left-0 w-screen h-full bg-cover bg-no-repeat bg-right sm:bg-right lg:bg-center`}
        style={{
          backgroundImage: `url(${data.image.file.url})`,
          maxHeight: "920px",
          zIndex: -1,
        }}
      >
        <div
          className={`${styles.gradient1} absolute top-0 left-0 w-screen h-full`}
        />
        <div
          className={`${styles.gradient2} absolute top-0 left-0 w-screen h-full`}
        />
      </div>
    </>
  );
};

export default LandingPageHeroBackground;
