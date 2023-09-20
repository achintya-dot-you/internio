import React from "react";

import Navbar from "../components/Navbar/Navbar";
import OpportunitiesList from "../components/Opportunities/OpportunitiesList";
import Footer from "../components/Footer/Footer";

import "./Opportunities.scss";

const Opportunities = () => {
  return (
    <div>
      <Navbar />
      <OpportunitiesList />
      <Footer />
    </div>
  );
};

export default Opportunities;
