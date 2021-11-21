import React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <div>
    <p className="text-sm text-gray-400 font-medium tracking-widest after:w-32 after:inline-block after:bg-green-hack after:h-px after:align-middle after:mx-3">
      {title}
    </p>
  </div>
);

export default SectionTitle;
