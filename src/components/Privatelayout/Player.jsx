import React, { useEffect, useState } from "react";

import arrow from "../../assets/images/back_arrow_icon.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const From = location?.state?.from?.pathname || "/";

  const [apiData, setApiData] = useState(null);
  const handelData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmJjNWE0YzFkNDBkMmI2NTZjM2I2OTJkOTFlZDZlNSIsIm5iZiI6MTc2NjM4MDc3OS4yNjgsInN1YiI6IjY5NDhkNGViYTYzOTRjMmFkMmZiMTU5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oFa4Rw3OPTSdOE6EVU3inBODOcpN5tXHxilbyHAaT1s",
      },
    };

    const resposne = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const data = await resposne.json();
    setApiData(data.results[0]);
  };

  useEffect(() => {
    if (id) {
      handelData();
    }
  }, [id]);
  console.log(apiData);

  return (
    <div className="relative min-h-screen bg-black">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(From, { replace: true })}
        className="absolute left-4 top-4 z-20 flex items-center gap-2"
      >
        <img src={arrow} alt="Back" className="h-8 w-8 md:h-10 md:w-10" />
      </button>

      {/* VIDEO WRAPPER */}
      <div className="flex min-h-screen  items-center justify-center px-4">
        <div className="relative w-full h-[650px] max-w-7xl max-h-5xl aspect-video">
          {apiData && (
            <iframe
              src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&mute=1`}
              title="YouTube video player"
              className="absolute inset-0 h-full w-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
