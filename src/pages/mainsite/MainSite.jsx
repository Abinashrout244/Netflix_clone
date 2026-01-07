import React, { useContext } from "react";
import MainHeader from "../../components/Privatelayout/MainHeader";
import MainBody from "../../components/Privatelayout/MainBody";
import Card from "../../components/Privatelayout/Card";
import Footer from "../../components/Footer/Footer";
import { DataContext } from "../../context/DataProvider";

const MainSite = () => {
  const { searchResults, isSearching } = useContext(DataContext);

  return (
    <div className="bg-black">
      <MainHeader />
      <MainBody />

      {/* 🔥 CARD PLACE / SEARCH RESULT PLACE */}
      <div className="md:pl-3 mt-5 md:mt-24 border-b border-b-slate-50 pb-10">
        {isSearching ? (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6">
            {searchResults.length === 0 ? (
              <p className="text-white h-[20vh] mt-11 text-5xl col-span-full text-center">
                No movie found 😢
              </p>
            ) : (
              searchResults.map((movie) => (
                <div key={movie.id} className="cursor-pointer">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    className="rounded hover:scale-105 transition"
                  />
                  <p className="text-white text-sm mt-2 truncate">
                    {movie.title}
                  </p>
                </div>
              ))
            )}
          </div>
        ) : (
          // ✅ NORMAL CARDS
          <>
            <Card category="now_playing" title_text="Blockbluster Movies" />
            <Card category="popular" title_text="Only On NetFlix" />
            <Card category="top_rated" title_text="Upcoming" />
            <Card category="upcoming" title_text="Top Pics For you" />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MainSite;
