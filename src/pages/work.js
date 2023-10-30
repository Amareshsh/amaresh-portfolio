import React from "react";
import {
  ContactSection,
  Page,
  ExperincesSection,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function projectPage() {
  return (
    <>
      <Seo title="Amaresh" />
      <Page useSplashScreenAnimation>
        <ExperincesSection sectionId="featuress" heading="Experince Details" />
        <ContactSection sectionId="github" heading="Contact Details" />
      </Page>
    </>
  );
}
