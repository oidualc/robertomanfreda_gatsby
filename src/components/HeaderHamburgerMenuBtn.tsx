import React from "react";

type HamburgerMenuBtnProps = {
  open: boolean;
  onClick: () => void;
};

const HamburgerMenuBtn = ({ open, onClick }: HamburgerMenuBtnProps) => {
  return (
    <button
      className="relative text-white w-6 h-6 focus:outline-none"
      onClick={onClick}
    >
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out ${
          open ? "rotate-45" : "-translate-y-1.5"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out ${
          open ? "opacity-0" : ""
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out ${
          open ? "-rotate-45" : "translate-y-1.5"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenuBtn;
