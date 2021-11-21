import React from "react";
import Section from "./Section";

const text = `I'm passionate about programming, infosec and hacking.

Currently working as software developer @ Alten Italia and in my spare time I enjoy programming, discovering and experimenting.

I'm not a graduate, I learned a lot of my knowledge on the web thanks to StackOverflow, GitHub, Wikipedia and blogs of people like me (who want to share without any price).

The internet is an immense resource, one of the most complex human creations that gives us an enormous source of free knowledge. 
`;

const AboutSection = () => (
  <Section id="about" title="ABOUT" subTitle="WHOAMI">
    <p className="text-xl font-light whitespace-pre-line">{text}</p>
  </Section>
);

export default AboutSection;
