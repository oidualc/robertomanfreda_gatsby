import React from "react";

type HamburgerMenuBtnProps = {
  open: boolean;
  onClick: () => void;
};

const HamburgerMenuBtn = ({ open, onClick }: HamburgerMenuBtnProps) => {
  return (
    <button
      className="text-white w-10 h-10 relative focus:outline-none"
      onClick={onClick}
    >
      <div className="block w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-6 bg-current transition duration-500 ease-in-out ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-6 bg-current transition duration-500 ease-in-out ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-6 bg-current transition duration-500 ease-in-out ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerMenuBtn;
