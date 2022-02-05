import React from "react";

type TechnologyBlockProps = {
  title: string;
  img: string;
};

const TechnologyBlock = ({ title, img }: TechnologyBlockProps) => (
  <div className="flex items-center bg-gray-hack-900 p-5 transition duration-500 hover:scale-105 hover:bg-gray-hack-800">
    <img src={img} alt={img} />
    <p className="font-poppins font-bold">{title}</p>
  </div>
);

export default TechnologyBlock;
