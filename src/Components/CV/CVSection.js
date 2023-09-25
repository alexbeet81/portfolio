import React, { useState } from "react";
import classes from "./CVSection.module.css";
import Header from "./Header";
import Content from "./Content";

const CVSection = ({ header, content }) => {
  // react-spring or framer-motion for animations
  const [isOpen, setIsOpen] = useState(false);

  const expandSectionHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header
        onClick={expandSectionHandler}
        className={classes.headerButton}
        header={header}
        isOpen={isOpen}
      />
      {isOpen && <Content content={content} />}
    </>
  );
};

export default CVSection;
