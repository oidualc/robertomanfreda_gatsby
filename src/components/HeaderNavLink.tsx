import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";

type NavLinkProps = {
  label: string;
  to: string;
};

const HeaderNavLink = ({ label, to }: NavLinkProps) => (
  <div className="group flex flex-col justify-center">
    <AnchorLink
      to={to}
      className="md:px-2 lg:px-3 py-3 font-extrabold text-xl relative group-hover:text-green-hack"
    >
      <span className="absolute bottom-0 bg-green-hack w-9 h-[2px] text-green-hack transition-transform origin-left scale-x-0 group-hover:scale-x-100"></span>
      {label}
    </AnchorLink>
  </div>
);

export default HeaderNavLink;
