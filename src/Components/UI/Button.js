import React, { useContext } from "react";
import DarkLightContext from "../../store/dark-light-context";
import classes from "./Button.module.css";

const Button = ({ href, children, size, target, rel, download = false }) => {
  const darkLightCtx = useContext(DarkLightContext);
  const isDarkMode = darkLightCtx.isDarkMode;

  const darkModeButtonClasses = isDarkMode
    ? classes.buttonDark
    : classes.buttonLight;

  let buttonSizeClasses = classes.button;

  if (size) {
    buttonSizeClasses = `${classes.button} ${classes.button_sm}`;
  }

  return (
    <a href={href} target={target} rel={rel} download={download}>
      <button
        type="button"
        className={`${buttonSizeClasses} ${darkModeButtonClasses}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
