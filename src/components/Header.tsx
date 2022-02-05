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
    <header className="fixed top-0 z-10 w-full bg-black bg-opacity-90">
      <div
        className={`relative mx-auto flex max-w-6xl flex-col items-start justify-between transition-all duration-500 md:w-11/12 md:flex-row md:items-center lg:w-4/5 ${
          compact ? "my-2" : "my-6"
        }`}
      >
        <div className="relative mx-auto w-4/5">
          <h1 className="whitespace-nowrap font-hacked text-3xl lg:text-4xl">
            ROBERTO MANFREDA
          </h1>
          <span className="absolute -top-0.5 right-0 md:hidden">
            <HamburgerMenuBtn open={open} onClick={() => setOpen(!open)} />
          </span>
        </div>

        <div
          className={`absolute top-11 w-full origin-top bg-black bg-opacity-90 transition duration-500 md:static md:top-auto md:transform-none md:transition-none ${
            !open ? "scale-y-0 opacity-0 md:opacity-100" : ""
          }`}
        >
          <nav className="mx-auto flex w-4/5 flex-col transition duration-500 md:w-auto md:flex-row">
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
