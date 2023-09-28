import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onClick, header, isOpen, isDarkMode }) => {
  const rotation = isOpen ? 90 : 180;

  const headerButtonClasses = isDarkMode
    ? classes.headerButtonDarkMode
    : classes.headerButtonLightMode;

  const playIconClasses = isDarkMode
    ? classes.playIconDarkMode
    : classes.playIconLightMode;

  return (
    <button
      onClick={onClick}
      className={`${headerButtonClasses} ${classes.headerButton}`}
    >
      <p>{header}</p>
      <FontAwesomeIcon
        icon={faPlay}
        className={`${classes.playIcon} ${playIconClasses}`}
        rotation={rotation}
      />
    </button>
  );
};

export default Header;
