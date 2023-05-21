import React from "react";

import Header from "../components/header/Header";
import Navbar from "../components/header/Navbar";
import Carousel from "../components/Carousel/Carousel";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <main id='home-header'>
        <Navbar type='gradient' />
        <Header />
      </main>

      <Carousel />
    </>
  );
};

export default Home;
