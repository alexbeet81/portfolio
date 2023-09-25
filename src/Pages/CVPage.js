import React from "react";
import CVSection from "../Components/CV/CVSection";
import { cvData } from "../Components/CV/Data/cv-data";
import classes from "./CVPage.module.css";

const CVPage = () => {
  const cvSections = cvData.map((section, index) => {
    return (
      <CVSection
        key={index}
        header={section.header}
        content={section.content}
      />
    );
  });

  return <div className={classes.sections}>{cvSections}</div>;
};

export default CVPage;
