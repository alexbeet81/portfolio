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

  return (
    <div className={classes.mainContainer}>
      <div className={classes.intro}>
        <h1>CV</h1>
        <p>Dive into each section below to uncover my professional journey.</p>
      </div>
      <div className={classes.sections}>{cvSections}</div>
    </div>
  );
};

export default CVPage;
