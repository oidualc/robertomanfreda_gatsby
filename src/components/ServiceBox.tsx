import React from "react";
import ServiceResourceIcon from "./ServiceResourceIcon";

type ServiceBoxProps = {
  title: string;
  text: string;
  btn: { text: string; link: string };
};

const ServiceBox = ({ title, text, btn }: ServiceBoxProps) => (
  <div className="flex h-96 flex-col items-center justify-between bg-gray-hack-900 p-5 py-10 transition duration-500 hover:scale-105 hover:bg-gray-hack-800 lg:py-5 xl:py-10">
    <div className="flex flex-col items-center">
      <ServiceResourceIcon />
      <div className="h-3" />
      <h2 className="text-center font-poppins text-2xl font-extrabold">
        {title}
      </h2>
      <div className="h-3" />
      <p className="overflow-ellipsis text-center font-sans text-base">
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
