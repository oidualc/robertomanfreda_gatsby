import React, { useEffect } from "react";
import { ChevronUpOutline } from "react-ionicons";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const ScrollToTopButton = () => {
  const [visible, setVisible] = React.useState(false);

  const handleScroll = () => setVisible(window.scrollY > 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-3 right-3 bg-green-hack rounded-full h-11 w-11 flex justify-center items-center transition duration-500 ${
        !visible ? "opacity-0 scale-0" : ""
      }`}
      onClick={scrollToTop}
    >
      <ChevronUpOutline color="white" height="25px" width="25px" />
    </div>
  );
};

export default ScrollToTopButton;
