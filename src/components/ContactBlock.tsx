import React, { ReactNode } from "react";

type ContactBlockProps = {
  title: string;
  children: ReactNode;
  icon: ReactNode;
};

const ContactBlock = ({ title, children, icon }: ContactBlockProps) => (
  <div className="flex bg-gray-hack-900 py-5 hover:bg-gray-hack-800 transition duration-500 hover:scale-105">
    <div className="flex-shrink-0 flex-grow-0 mx-5">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-hack-700 text-white text-center">
        {icon}
      </div>
    </div>
    <div className="flex flex-col justify-center font-poppins">
      <h3 className="text-xl font-bold">{title}</h3>
      {children}
    </div>
  </div>
);

export default ContactBlock;
