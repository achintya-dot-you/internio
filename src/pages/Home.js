import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
// import OpportunitiesHighlight from "../components/OpportunitiesHighlight/OpportunitiesHighlight";
import PartnersHighlight from "../components/PartnersHighlight/PartnersHighlight";
import ResourcesHighlight from "../components/ResourcesHighlight/ResourcesHighlight";
import TeamHighlight from "../components/TeamHighlight/TeamHighlight";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Introduction />
      {/* <OpportunitiesHighlight /> */}
      <PartnersHighlight />
      <ResourcesHighlight />
      <TeamHighlight />
      <Footer />
    </>
  );
};

export default Home;
