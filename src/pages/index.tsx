import React from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import MainInterestsSections from "../components/MainInterestsSection";
import OtherInterests from "../components/OtherInterestsSection";
import ProjectsSection from "../components/ProjectsSection";
import Layout from "../layouts/Layout";

const IndexPage = () => (
  <Layout>
    <AboutSection />
    <ProjectsSection />
    <MainInterestsSections />
    <OtherInterests />
    <ContactSection />
  </Layout>
);

export default IndexPage;
