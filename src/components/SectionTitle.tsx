import React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <div>
    <p className="text-sm font-medium tracking-widest text-gray-400 after:mx-3 after:inline-block after:h-px after:w-32 after:bg-green-hack after:align-middle">
      {title}
    </p>
  </div>
);

export default SectionTitle;
