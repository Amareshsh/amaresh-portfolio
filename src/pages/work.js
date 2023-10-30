import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function workPage() {
  return (
    <>
      <Seo title="Amaresh" />
      <Page useSplashScreenAnimation>
      <ContactSection sectionId="github" heading="Contact Details" />
      </Page>
    </>
  );
}
