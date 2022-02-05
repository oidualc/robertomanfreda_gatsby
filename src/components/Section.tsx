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
    className="mx-auto max-w-lg py-12 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
  >
    <div className="mb-2">
      <SectionTitle title={title} />
    </div>
    <h1 className="mb-4 font-poppins text-4xl font-bold">{subTitle}</h1>
    {children}
  </div>
);

export default Section;
