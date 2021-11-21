import React from "react";
import Section from "./Section";
import TechnologyBlock from "./TechnologyBlock";

type TechnologyProps = {
  subTitle: string;
  data: { title: string; img: string }[];
  id?: string;
};

const TechnologiesSection = ({ subTitle, data, id }: TechnologyProps) => (
  <Section id={id} title="TECHNOLOGIES" subTitle={subTitle}>
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <div className="w-full md:w-1/3 lg:w-1/4 p-3" key={index}>
          <TechnologyBlock img={item.img} title={item.title} />
        </div>
      ))}
    </div>
  </Section>
);

export default TechnologiesSection;
