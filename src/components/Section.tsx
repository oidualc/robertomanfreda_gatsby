import React, { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

type SectionProps = {
  title: string;
  subTitle: string;
  children: ReactNode;
  id?: string;
};

const Section = ({ title, subTitle, children, id }: SectionProps) => (
  <div
    id={id}
    className="max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto py-12"
  >
    <div className="mb-2">
      <SectionTitle title={title} />
    </div>
    <h1 className="text-4xl font-bold font-poppins mb-4">{subTitle}</h1>
    {children}
  </div>
);

export default Section;
