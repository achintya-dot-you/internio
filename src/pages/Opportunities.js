import React from "react";

import Header from "../components/oppurtunities/OppurtunitiesHeader";
import Navbar from "../components/header/Navbar";

import "./Opportunities.scss";

const Opportunities = () => {
  return (
    <div id='opportunities'>
      <Navbar type='gradient' />
      <Header />
    </div>
  );
};

export default Opportunities;
