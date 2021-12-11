import React, { useEffect, useState } from "react";
import HeaderNavLink from "./HeaderNavLink";
import HamburgerMenuBtn from "./HeaderHamburgerMenuBtn";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  const handleScroll = () => setCompact(window.scrollY > 70);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-10 fixed top-0 w-full bg-black bg-opacity-90">
      <div
        className={`relative flex flex-col md:flex-row items-start md:items-center justify-between md:w-11/12 lg:w-4/5 max-w-6xl mx-auto transition-all duration-500 ${
          compact ? "my-2" : "my-6"
        }`}
      >
        <div className="relative w-4/5 mx-auto">
          <h1 className="font-hacked text-3xl lg:text-4xl whitespace-nowrap">
            ROBERTO MANFREDA
          </h1>
          <span className="absolute -top-0.5 right-0 md:hidden">
            <HamburgerMenuBtn open={open} onClick={() => setOpen(!open)} />
          </span>
        </div>

        <div
          className={`absolute md:static md:top-auto top-11 w-full bg-black bg-opacity-90 md:transform-none transition md:transition-none origin-top duration-500 ${
            !open ? "scale-y-0 opacity-0 md:opacity-100" : ""
          }`}
        >
          <nav className="w-4/5 md:w-auto mx-auto flex flex-col md:flex-row transition duration-500">
            <HeaderNavLink to="/#about" label="ABOUT" />
            <HeaderNavLink to="/#projects" label="PROJECTS" />
            <HeaderNavLink to="/#main-interests" label="TECNHOLOGIES" />
            <HeaderNavLink to="/#contact" label="CONTACT" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
