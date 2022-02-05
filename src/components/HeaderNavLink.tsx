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
      className="relative py-3 text-xl font-extrabold group-hover:text-green-hack md:px-2 lg:px-3"
    >
      <span className="absolute bottom-0 h-[2px] w-9 origin-left scale-x-0 bg-green-hack text-green-hack transition-transform group-hover:scale-x-100"></span>
      {label}
    </AnchorLink>
  </div>
);

export default HeaderNavLink;
