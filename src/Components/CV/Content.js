import React from "react";
import classes from "./Content.module.css";

const Content = ({ content: { description, jobs } }) => {
  return (
    <div className={classes.container}>
      <p className={classes.description}>{description}</p>
      {jobs.map((job, jobIndex) => {
        return (
          <div key={jobIndex}>
            <div className={classes.jobTitle}>
              <p>{job.dates}</p>
              <p>{job.jobTitle}</p>
            </div>
            <p>{job.jobDescription}</p>
            {job.bulletPoints.map((bulletPoint, bulletIndex) => {
              return <p key={`bullet-${bulletIndex}`}>• ${bulletPoint}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Content;
