import React from "react";
import { CodeWorkingOutline } from "react-ionicons";

const ICON_WIDTH = "3.6rem";

const ServiceResourceIcon = () => (
  <div className="flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-green-hack">
    <CodeWorkingOutline color="white" width={ICON_WIDTH} height={ICON_WIDTH} />
  </div>
);

export default ServiceResourceIcon;
