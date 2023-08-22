import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import OpportunitiesHighlight from "../components/OpportunitiesHighlight/OpportunitiesHighlight";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Introduction />
      <OpportunitiesHighlight />
      <Footer />
    </>
  );
};

export default Home;
