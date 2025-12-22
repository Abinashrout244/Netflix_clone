import React, { useEffect, useState } from "react";
import MainHeader from "../../components/Privatelayout/mainHeader";
import MainBody from "../../components/Privatelayout/mainBody";
import Card from "../../components/publiclayout/Card";
import Footer from "../../components/Footer/Footer";
const MainSite = () => {
  return (
    <div className="bg-black ">
      <MainHeader />
      <MainBody />
      <div className="md:pl-3 flex flex-col mt-5 gap-5 md:gap-15 md:pt-2 md:mt-24 border-b border-b-slate-50 pb-10">
        <Card category="now_playing" title_text="Blockbluster Movies" />
        <Card category="popular" title_text="Only On NetFlix" />
        <Card category="top_rated" title_text="Upcoming" />
        <Card category="upcoming" title_text="Top Pics For you" />
        {/* <Card category="" />
        <Card category="" /> */}
      </div>
      <Footer />
    </div>
  );
};

export default MainSite;
