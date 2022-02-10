import classes from "./App.module.css";
import React, { useContext } from "react";
import DarkLightContext from "./store/dark-light-context";

import Intro from "./Components/Intro";
import NavBar from "./Components/UI/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Learning from "./Components/Learning";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const backgroundClasses = isDarkMode
    ? classes.backgroundDark
    : classes.backgroundLight;

  const introComponent = (
    <Intro />
  )

  const mainComponent = (
    <div>
      {" "}
      <NavBar />
      <main className={classes.mainContainer}>
        <Hero />
        <About />
        <Learning />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );

  return (
    <div className={backgroundClasses}>
      {introComponent}
    </div>
  );
}

export default App;
