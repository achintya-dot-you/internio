import React from "react";

import Navbar from "../components/Navbar/Navbar";
import OpportunitiesList from "../components/Opportunities/OpportunitiesList";

import "./Opportunities.scss";

const Opportunities = () => {
  return (
    <div>
      <Navbar />
      <OpportunitiesList />
    </div>
  );
};

export default Opportunities;
