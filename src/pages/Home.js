import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import OpportunitiesHighlight from "../components/Opportunities Highlight/OpportunitiesHighlight";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <OpportunitiesHighlight />
      <Footer />
    </>
  );
};

export default Home;
