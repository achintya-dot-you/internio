// ** Imports **
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ** Main Component **
const Title = () => {
  // Getting link
  const location = useLocation();

  // Setting page title
  useEffect(() => {
    const pathname = location.pathname; // Get the current pathname
    let title = "internio | Page Not Found"; // Set your default title here

    // Map the pathname to the desired title for each route
    if (pathname === "/" || pathname === "/home") {
      title = "internio | Home";
    } else if (pathname === "/opportunities") {
      title = "internio | Opportunities";
    } else if (pathname === "/team") {
      title = "internio | Team";
    } else if (pathname === "/apply") {
      title = "internio | Apply";
    }

    document.title = title; // Set the document title
  }, [location]);

  return null; // Render nothing in the component
};

// ** Exporting Component **
export default Title;
