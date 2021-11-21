import React from "react";
import ServiceResourceIcon from "./ServiceResourceIcon";

type ServiceBoxProps = {
  title: string;
  text: string;
  btn: { text: string; link: string };
};

const ServiceBox = ({ title, text, btn }: ServiceBoxProps) => (
  <div className="h-96 flex flex-col items-center justify-between p-5 py-10 lg:py-5 xl:py-10 bg-gray-hack-900 hover:bg-gray-hack-800 transition duration-500 hover:scale-105">
    <div className="flex flex-col items-center">
      <ServiceResourceIcon />
      <div className="h-3" />
      <h2 className="font-poppins font-extrabold text-2xl text-center">
        {title}
      </h2>
      <div className="h-3" />
      <p className="font-sans text-base text-center overflow-ellipsis">
        {text}
      </p>
    </div>
    <a
      className="bg-gray-hack-800 px-3 py-1 transition-colors duration-500 hover:bg-white hover:text-black"
      href={btn.link}
    >
      {btn.text}
    </a>
  </div>
);

export default ServiceBox;
