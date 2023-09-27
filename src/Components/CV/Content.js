import React from "react";
import classes from "./Content.module.css";

const Content = ({ content: { description, jobs }, isDarkMode }) => {
  const containerClasses = isDarkMode
    ? classes.containerDarkMode
    : classes.containerLightMode;

  return (
    <div className={`${containerClasses} ${classes.container}`}>
      <p className={classes.description}>{description}</p>
      {jobs.map((job, jobIndex) => {
        return (
          <div key={jobIndex} className={classes.jobContainer}>
            <div className={classes.jobTitle}>
              <p className={classes.dates}>{job.dates}</p>
              <p className={classes.jobTitle}>{job.jobTitle}</p>
            </div>
            <p className={classes.jobDescription}>{job.jobDescription}</p>
            {job.bulletPoints.map((bulletPoint, bulletIndex) => {
              return (
                <p
                  key={`bullet-${bulletIndex}`}
                  className={classes.bulletPoint}
                >
                  • {bulletPoint}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Content;
