import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onClick, header, isOpen }) => {
  const rotation = isOpen ? 90 : 180;

  return (
    <button onClick={onClick} className={classes.headerButton}>
      <p>{header}</p>
      <FontAwesomeIcon
        icon={faPlay}
        className={classes.playIcon}
        rotation={rotation}
      />
    </button>
  );
};

export default Header;
