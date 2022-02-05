import React, { useMemo, useState } from "react";
import { LogoGithub, LogoLinkedin, LogoStackoverflow } from "react-ionicons";

export const supportedPlatforms = [
  "linkedin",
  "github",
  "stackoverflow",
] as const;

type ContactLogoProps = {
  icon: typeof supportedPlatforms[number];
  href: string;
};

const LOGO_WIEGHT = "1.2rem";
const LOGO_COLOR = "white";
const LOGO_HOVER_COLOR = "#18d26e";

const ContactLogo = ({ icon, href }: ContactLogoProps) => {
  const [hover, setHover] = useState(false);

  const color = useMemo(() => (hover ? LOGO_HOVER_COLOR : LOGO_COLOR), [hover]);

  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={href}
    >
      {icon == "linkedin" ? (
        <LogoLinkedin color={color} width={LOGO_WIEGHT} height={LOGO_WIEGHT} />
      ) : icon == "github" ? (
        <LogoGithub color={color} width={LOGO_WIEGHT} height={LOGO_WIEGHT} />
      ) : icon == "stackoverflow" ? (
        <LogoStackoverflow
          color={color}
          width={LOGO_WIEGHT}
          height={LOGO_WIEGHT}
          style={{ transition: "color 10s" }}
        />
      ) : null}
    </a>
  );
};

export default ContactLogo;
