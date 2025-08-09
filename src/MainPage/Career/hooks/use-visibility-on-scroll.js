import { useState, useEffect } from "react";

const useVisibilityOnScroll = (elementId, offset = 100) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        setIsVisible(top < windowHeight - offset && bottom > 0);
      }
    };

    handleScroll(); // sprawdzenie przy mountcie
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementId, offset]);

  return isVisible;
};

export default useVisibilityOnScroll;
