import classes from "./App.module.css";
import React, { useContext, useEffect, useReducer } from "react";
import DarkLightContext from "./store/dark-light-context";

import Intro from "./Components/Intro";
import NavBar from "./Components/UI/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Learning from "./Components/Learning";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// const reducer = (state, action) => {
//   return { animationIsFinished: true };
// };

const reducer = (state, action) => {
  switch (action.type) {
    case 'ANIMATION_FINISHED':
      return { animationIsFinished: true };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { animationIsFinished: false });


  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'ANIMATION_FINISHED'});
    }, 4000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const darkLightCtx = useContext(DarkLightContext);
  const isDarkMode = darkLightCtx.isDarkMode;

  const backgroundClasses = isDarkMode
    ? classes.backgroundDark
    : classes.backgroundLight;

  const mainComponent = state.animationIsFinished ? (
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
  ) : (
    <Intro />
  );

  
  return <div className={backgroundClasses}>{mainComponent}</div>;
}

export default App;
