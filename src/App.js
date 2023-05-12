import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import Oppurtunities from "./pages/Oppurtunities";
import NotFound from "./pages/NotFound";

import "./styles/initialization.scss";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/oppurtunities'
            element={<Oppurtunities />}
          />
          <Route
            path='/*'
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
