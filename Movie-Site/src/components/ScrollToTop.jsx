import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop scrolls the window to the top whenever the pathname changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Effect to scroll to the top of the page when the pathname changes
  useEffect(() => {
    console.log("Scrolling to top for:", pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });;
  }, [pathname]);

  return null;
};

export default ScrollToTop;