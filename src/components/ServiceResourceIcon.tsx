import React from "react";
import { CodeWorkingOutline } from "react-ionicons";

const ICON_WIDTH = "3.6rem";

const ServiceResourceIcon = () => (
  <div className="w-32 h-32 rounded-full border-[10px] border-green-hack flex justify-center items-center">
    <CodeWorkingOutline color="white" width={ICON_WIDTH} height={ICON_WIDTH} />
  </div>
);

export default ServiceResourceIcon;
