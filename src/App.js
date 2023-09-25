// ** Imports **
// Importing React
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing all pages
import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import Team from "./pages/Team";
import Mission from "./pages/Mission";
import NotFound from "./pages/NotFound";
import Title from "./components/General/Title";
import OpportunitiesDetails from "./pages/OpportunitiesDetails";

// Importing Styles
import "./styles/initialization.scss";

function App() {
  // Redirecting to job board in /careers link
  const ApplyPage = () => {
    React.useEffect(() => {
      window.location.href =
        "https://internio.notion.site/Job-Board-f02cf790ddc944f1ab233c22cf44157e";
    }, []);

    return null; // or you can render some loading/spinner component if needed
  };

  // ** JSX **
  return (
    // Routing every page link
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
