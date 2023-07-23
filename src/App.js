import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Opportunities from "./pages/Opportunities";
import NotFound from "./pages/NotFound";
import Title from "./components/General/Title";

import "./styles/initialization.scss";
import "./App.scss";

function App() {
  const ApplyPage = () => {
    React.useEffect(() => {
      window.location.href =
        "https://internio.notion.site/Job-Board-f02cf790ddc944f1ab233c22cf44157e";
    }, []);

    return null; // or you can render some loading/spinner component if needed
  };
  return (
    <>
      <Router>
        <Title />
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
            exact
            path='/apply'
            element={<ApplyPage />}
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
