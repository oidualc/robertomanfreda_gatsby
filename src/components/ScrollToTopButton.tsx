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
      className={`fixed bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-green-hack transition duration-500 ${
        !visible ? "scale-0 opacity-0" : ""
      }`}
      onClick={scrollToTop}
    >
      <ChevronUpOutline color="white" height="25px" width="25px" />
    </div>
  );
};

export default ScrollToTopButton;
