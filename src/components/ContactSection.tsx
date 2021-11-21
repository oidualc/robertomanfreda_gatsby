import React from "react";
import { MailOutline, ShareSocialOutline } from "react-ionicons";
import contacts from "../../content/contacts.json";
import ContactBlock from "./ContactBlock";
import ContactLogo, { supportedPlatforms } from "./ContactLogo";
import Section from "./Section";

const ICON_WIDTH = "1.5rem";
const ICON_COLOR = "#00fa00";

const blocks = [
  {
    title: "Email",
    icon: (
      <MailOutline color={ICON_COLOR} width={ICON_WIDTH} height={ICON_WIDTH} />
    ),
    content: <p className="text-sm">robertomanfreda1994@gmail.com</p>,
  },
  {
    title: "Profiles",
    icon: (
      <ShareSocialOutline
        color={ICON_COLOR}
        width={ICON_WIDTH}
        height={ICON_WIDTH}
      />
    ),
    content: (
      <div className="flex">
        {contacts.map(({ title, href }, index) => (
          <div className="mr-4" key={index}>
            <ContactLogo
              icon={title as typeof supportedPlatforms[number]}
              href={href}
            />
          </div>
        ))}
      </div>
    ),
  },
];

const ContactSection = () => (
  <Section id="contact" title="CONTACT" subTitle="CONTACT ME">
    <div className="flex flex-wrap">
      {blocks.map(({ title, icon, content }, index) => (
        <div className="w-full lg:w-1/2" key={index}>
          <div className="m-3">
            <ContactBlock title={title} icon={icon}>
              {content}
            </ContactBlock>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default ContactSection;
