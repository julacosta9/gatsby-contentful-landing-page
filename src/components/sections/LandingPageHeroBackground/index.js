import React from "react";
import heroBackgroundImage from "../../../images/hero-background@2x.png";
import * as styles from "./landingPageHeroBackground.module.css";

const LandingPageHeroBackground = () => {
  return (
    <>
      <div
        className={`${styles.bg} absolute top-0 right-0 w-screen h-screen bg-cover bg-no-repeat bg-right sm:bg-right lg:bg-center`}
        style={{ backgroundImage: `url(${heroBackgroundImage})`, zIndex: -1 }}
      >
        <div
          className={`${styles.gradient1} absolute top-0 right-0 w-screen h-screen`}
        />
        <div
          className={`${styles.gradient2} absolute top-0 right-0 w-screen h-screen`}
        />
      </div>
    </>
  );
};

export default LandingPageHeroBackground;
