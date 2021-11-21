import React from "react";
import MainInterestsContent from "../../content/main-interests.json";
import TechnologiesSection from "./TechnologiesSection";

const MainInterestsSections = () => (
  <TechnologiesSection
    id="main-interests"
    subTitle="Main Interests"
    data={MainInterestsContent}
  />
);

export default MainInterestsSections;
