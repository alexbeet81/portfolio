import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Fragment } from "react/cjs/react.production.min";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import Resume from "../../resume/resume.pdf";

import DarkLightContext from "../../store/dark-light-context";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const darkLightIconHandler = (event) => {
    event.preventDefault();

    darkLightCtx.toggleDarkLight();
  };

  const navBarDarkLightClasses = isDarkMode
    ? classes.navbarDark
    : classes.navbarLight;
  const iconDarkLightClasses = isDarkMode
    ? classes.iconDarkMode
    : classes.iconLightMode;

  const darkModeToggleIcon = isDarkMode ? <BsSunFill /> : <MdDarkMode />;

  return (
    <Fragment>
      <div className={`${classes.navbar} ${navBarDarkLightClasses}`}>
        <div
          onClick={darkLightIconHandler}
          className={`${classes.darkLightModeIcon} ${iconDarkLightClasses}`}
        >
          {darkModeToggleIcon}
        </div>
        <div className={classes.navLinks}>
          <Link
            to="home"
            name="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="about"
            name="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            to="work"
            name="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
