import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

import classes from "./CVSection.module.css";
import Header from "./Header";
import Content from "./Content";

const CVSection = ({ header, content, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const { height, opacity } = useSpring({
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isOpen ? 1 : 0,
      height: isOpen ? contentRef.current.scrollHeight : 0,
    },
  });

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
        isDarkMode={isDarkMode}
      />
      <animated.div
        style={{
          overflow: "hidden",
          height,
          opacity,
        }}
        ref={contentRef}
      >
        <Content content={content} isDarkMode={isDarkMode} />
      </animated.div>
    </>
  );
};

export default CVSection;
