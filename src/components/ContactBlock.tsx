import React, { ReactNode } from "react";

type ContactBlockProps = {
  title: string;
  children: ReactNode;
  icon: ReactNode;
};

const ContactBlock = ({ title, children, icon }: ContactBlockProps) => (
  <div className="flex bg-gray-hack-900 py-5 transition duration-500 hover:scale-105 hover:bg-gray-hack-800">
    <div className="mx-5 flex-shrink-0 flex-grow-0">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-hack-700 text-center text-white">
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
