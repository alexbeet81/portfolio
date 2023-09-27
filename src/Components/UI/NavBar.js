import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { getItemWithExpiry } from "../../utils/localStorageHelper";
import AOS from "aos";
import "aos/dist/aos.css";

import DarkLightContext from "../../store/dark-light-context";
import classes from "./NavBar.module.css";

const NavBar = () => {
  AOS.init({
    once: true,
  });

  const location = useLocation();
  const hasVisited = getItemWithExpiry("hasVisited");
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
  const isCVPage = location.pathname == "/cv";

  return (
    <section
      {...(hasVisited
        ? {}
        : { "data-aos": "fade-down", "data-aos-duration": "500" })}
    >
      <div className={`${classes.navbar} ${navBarDarkLightClasses}`}>
        <div
          onClick={darkLightIconHandler}
          className={`${classes.darkLightModeIcon} ${iconDarkLightClasses}`}
        >
          {darkModeToggleIcon}
        </div>
        <div className={classes.navLinks}>
          {isCVPage ? (
            <RouteLink to="/">Home</RouteLink>
          ) : (
            <Link
              to="home"
              name="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          )}
          {isCVPage && (
            <>
              <RouteLink to="/#about">About</RouteLink>
              <RouteLink to="/#work">Work</RouteLink>
              <RouteLink to="/#contact">Contact</RouteLink>
            </>
          )}
          {!isCVPage && (
            <>
              <Link
                to="about"
                name="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
              <Link
                to="work"
                name="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </>
          )}
          <RouteLink to="/cv">CV</RouteLink>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
