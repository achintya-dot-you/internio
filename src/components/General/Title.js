import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Title = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname; // Get the current pathname
    let title = "internio | Page Not Found"; // Set your default title here

    // Map the pathname to the desired title for each route
    if (pathname === "/") {
      title = "Internio | Home";
    } else if (pathname === "/opportunities") {
      title = "Internio | Opportunities";
    } else if (pathname === "/team") {
      title = "Internio | Team";
    } else if (pathname === "/apply") {
      title = "Internio | Apply";
    }

    document.title = title; // Set the document title
  }, [location]);

  return null; // Render nothing in the component
};

export default Title;
