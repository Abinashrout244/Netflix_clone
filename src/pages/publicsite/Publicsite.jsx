import React from "react";
import PublicHeader from "../../components/publiclayout/PublicHeader";

import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/footer";
const Publicsite = () => {
  return (
    <div>
      <PublicHeader />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Publicsite;
