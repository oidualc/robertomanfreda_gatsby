import React from "react";
import OtherInterestsContent from "../../content/other-interests.json";
import TechnologiesSection from "./TechnologiesSection";

const OtherInterests = () => (
  <TechnologiesSection
    id="other-interests"
    subTitle="Other Interests"
    data={OtherInterestsContent}
  />
);

export default OtherInterests;
