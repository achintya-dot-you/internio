import React from "react";

import Header from "../components/header/Header";
import Navbar from "../components/header/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div id='home'>
        <Navbar type='gradient' />
        <Header />
      </div>
    </>
  );
};

export default Home;
