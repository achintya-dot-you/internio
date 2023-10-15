// ** Imports **
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ** Main Component **
const Title = () => {
  // Getting link
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname; // Get the current pathname
    const titleMap = {
      "/": "internio | Home",
      "/home": "internio | Home",
      "/opportunities": "internio | Opportunities",
      "/team": "internio | Team",
      "/apply": "internio | Apply",
      "/mission": "internio | Mission",
    }; // Set up mapping for different pathnames

    const defaultTitle = "internio | Page Not Found"; // Configuring a default title
    const title = titleMap[pathname] || defaultTitle; // Setting the title based on pathname

    document.title = title; // Set the document title in the DOM
  }, [location]);

  return null; // Render nothing in the component
};

// ** Exporting Component **
export default Title;
