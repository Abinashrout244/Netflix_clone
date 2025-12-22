import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

const Card = ({ category, title_text }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmJjNWE0YzFkNDBkMmI2NTZjM2I2OTJkOTFlZDZlNSIsIm5iZiI6MTc2NjM4MDc3OS4yNjgsInN1YiI6IjY5NDhkNGViYTYzOTRjMmFkMmZiMTU5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oFa4Rw3OPTSdOE6EVU3inBODOcpN5tXHxilbyHAaT1s",
        },
      };
      const info = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
        options
      );

      const respone = await info.json();
      setData(respone.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  // if (!data.length) return null;

  return (
    <div className="flex flex-col gap-3 md:px-10">
      <h2 className="text-lg font-semibold text-white relative ">
        {title_text}
      </h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        loop={data.length > 4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={700}
        watchSlidesProgress
        centeredSlides={false}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="cursor-pointer relative overflow-hidden h-28 md:h-45 w-[190px] md:w-[320px] rounded-md bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-2 absolute bottom-0 bg-black/50 w-full">
                <h3 className=" text-sm font-semibold text-white md:text-[16px]">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
