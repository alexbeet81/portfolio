import { Fragment } from "react/cjs/react.production.min";
import { MdDarkMode } from 'react-icons/md'

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Fragment>
      <h1 className={classes.test}><MdDarkMode /></h1>
      <div className={`${classes.navbar} ${classes.navbarDark}`}>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </div>
    </Fragment>
  );
};

export default NavBar;
