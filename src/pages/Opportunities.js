import React from "react";

import Navbar from "../components/Navbar/Navbar";
import OpportunitiesList from "../components/Opportunities/OpportunitiesList";
import Footer from "../components/Footer/Footer";
import OpportunitiesHeader from "../components/Opportunities/OpportunitiesHeader";

import "./Opportunities.scss";

const Opportunities = () => {
  return (
    <div>
      <Navbar />
      <OpportunitiesHeader />
      <OpportunitiesList />
      <Footer />
    </div>
  );
};

export default Opportunities;
