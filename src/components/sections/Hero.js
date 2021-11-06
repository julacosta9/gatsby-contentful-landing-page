import React from "react";
import CtaButton from "../ui/CtaButton";

const Hero = ({ data }) => {
  return (
    <section className="max-w-screen-content w-full mx-auto">
      <div className="flex flex-col gap-5 sm:gap-8 text-white py-7">
        <div className="font-bold text-sm sm:text-lg uppercase">
          {data.tagline}
        </div>
        <div className="font-bold text-4xl sm:text-6xl max-w-lg">
          {data.header}
        </div>
        <div className="text-lg">{data.subheader}</div>
        <div className="flex flex-col sm:flex-row w-max pt-5 sm:pt-0 gap-4">
          <CtaButton text={data.primaryCtaText} url={data.primaryCtaUrl} />
          <CtaButton
            secondary
            text={data.secondaryCtaText}
            url={data.secondaryTextUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
