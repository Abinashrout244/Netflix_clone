import React from "react";
import heroBanner from "../../assets/images/hero_banner.jpg";
import text from "../../assets/images/hero_title.png";
import playicon from "../../assets/images/play_icon.png";
import moreinfo from "../../assets/images/info_icon.png";
import Card from "../publiclayout/Card";

const MainBody = ({ data }) => {
  const description =
    "Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.";

  return (
    <section className="relative w-full ">
      <div className="relative h-[60vh] md:h-screen">
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col  pt-32 md:pt-0 gap-4 px-5 pb-2 md:justify-center md:px-24">
          <img
            src={text}
            alt="Title"
            className=" w-[250px] md:w-[400px] block"
          />

          <p className="max-w-md text-sm text-white md:text-lg">
            {description}
          </p>

          <div className="flex gap-3 md:pt-7">
            <button className="flex items-center gap-3 rounded bg-white px-4 py-2 md:px-6">
              <img src={playicon} className="h-4 w-4 md:h-7 md:w-7" />
              <span className="text-sm font-semibold md:text-lg">Play</span>
            </button>

            <button className="flex items-center gap-3 rounded bg-white/30 px-4 py-2">
              <img src={moreinfo} className="h-4 w-4 md:h-7 md:w-7" />
              <span className="text-sm font-semibold text-white md:text-lg">
                More Info
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 md:-mt-32 md:ml-14">
        <Card category="popular" title_text="Popular On NetFlix" />
      </div>
    </section>
  );
};

export default MainBody;
