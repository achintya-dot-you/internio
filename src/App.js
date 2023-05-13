import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import NotFound from "./pages/NotFound";

import "./styles/initialization.scss";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
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
            path='/opportunities'
            element={<Opportunities />}
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
