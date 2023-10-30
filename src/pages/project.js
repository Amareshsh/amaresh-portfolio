import React from "react";
import {
  ContactSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function projectPage() {
  return (
    <>
      <Seo title="Amaresh" />
      <Page useSplashScreenAnimation>
        <ProjectsSection sectionId="features" heading="Project Details" />
        <ContactSection sectionId="github" heading="Contact Details" />
      </Page>
    </>
  );
}
