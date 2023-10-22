// ** Imports **
// Importing React
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing all pages
import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import Team from "./pages/Team";
import Mission from "./pages/Mission";
import NotFound from "./pages/NotFound";
import OpportunitiesDetails from "./pages/OpportunitiesDetails";

// Importing general components
import Title from "./components/General/Title";
import ScrollToTop from "./components/General/ScrollToTop";

// Importing Styles
import "./styles/initialization.scss";

function App() {
  // Redirecting to job board in /careers link
  const ApplyPage = () => {
    useEffect(() => {
      window.location.href =
        "https://internio.notion.site/Job-Board-f02cf790ddc944f1ab233c22cf44157e";
    }, []);

    return null;
  };

  const ResourcesPage = () => {
    useEffect(() => {
      window.location.href =
        "https://internio.notion.site/Resources-internio-3d3d31a80407462ea943c323dc21ccb4?pvs=4";
    }, []);

    return null;
  };

  const DonatePage = () => {
    useEffect(() => {
      window.location.href = "https://www.paypal.com/paypalme/internio";
    }, []);

    return null;
  };

  // ** JSX **
  return (
    // Routing every page link
    <>
      <Router>
        <ScrollToTop />
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
            exact
            path='/team'
            element={<Team />}
          />
          <Route
            exact
            path='/mission'
            element={<Mission />}
          />
          <Route
            exact
            path='/donate'
            element={<DonatePage />}
          />
          <Route
            exact
            path='/resources'
            element={<ResourcesPage />}
          />
          <Route
            path='/opportunity/:id'
            element={<OpportunitiesDetails />}
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
