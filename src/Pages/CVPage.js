import React, { useContext } from "react";

import Resume from "../resume/resume.png";
import CVSection from "../Components/CV/CVSection";
import { cvData } from "../Components/CV/Data/cv-data";
import classes from "./CVPage.module.css";
import Button from "../Components/UI/Button";

import DarkLightContext from "../store/dark-light-context";

const CVPage = () => {
  const darkLightCtx = useContext(DarkLightContext);
  const isDarkMode = darkLightCtx.isDarkMode;

  const cvSections = cvData.map((section, index) => {
    return (
      <CVSection
        key={index}
        header={section.header}
        content={section.content}
        isDarkMode={isDarkMode}
      />
    );
  });

  const introClasses = isDarkMode ? classes.introDark : classes.introLight;

  return (
    <div className={classes.mainContainer}>
      <div className={`${introClasses} ${classes.intro}`}>
        <h1>CV</h1>
        <p>
          Here is a detailed look at my professional life. Click on each section
          to learn more.
        </p>
        <div className={classes.buttons}>
          <Button
            size="sm"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Button>
          <Button size="sm">4 Page CV</Button>
        </div>
      </div>
      <div className={classes.sections}>{cvSections}</div>
    </div>
  );
};

export default CVPage;
