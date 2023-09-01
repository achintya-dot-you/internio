import React from "react";

import Navbar from "../components/Navbar/Navbar";
import OpportunitiesCard from "../components/Opportunities/OpportunitiesCard";

import "./Opportunities.scss";

const Opportunities = () => {
  return (
    <div>
      <Navbar />
      <OpportunitiesCard />
    </div>
  );
};

export default Opportunities;
