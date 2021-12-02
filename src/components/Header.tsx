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
  }, [window.scrollY]);

  return (
    <header className="z-10 fixed top-0 w-full bg-black bg-opacity-90">
      <div
        className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-4/5 md:w-11/12 lg:w-4/5 max-w-6xl mx-auto transition-all duration-500 ${
          compact ? "my-2" : "my-6"
        }`}
      >
        <h1 className="font-hacked text-3xl lg:text-4xl whitespace-nowrap">
          ROBERTO MANFREDA
        </h1>
        <span className="absolute top-0 right-0 md:hidden">
          <HamburgerMenuBtn open={open} onClick={() => setOpen(!open)} />
        </span>

        <nav
          className={`absolute md:static top-12 md:top-auto bg-black w-full md:w-auto bg-opacity-90 flex flex-col md:flex-row transition md:transition-none transform md:transform-none origin-top duration-500 ${
            !open ? "scale-y-0 opacity-0 md:opacity-100" : ""
          }`}
        >
          <HeaderNavLink to="/#about" label="ABOUT" />
          <HeaderNavLink to="/#projects" label="PROJECTS" />
          <HeaderNavLink to="/#main-interests" label="TECNHOLOGIES" />
          <HeaderNavLink to="/#contact" label="CONTACT" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
