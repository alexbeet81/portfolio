import classes from "./App.module.css";
import React, { useContext, useEffect, useReducer } from "react";
import DarkLightContext from "./store/dark-light-context";

import Intro from "./Components/Intro";
import NavBar from "./Components/UI/NavBar";
import MainPage from "./Pages/MainPage";
import CVPage from "./Pages/CVPage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { setItemWithExpiry, getItemWithExpiry } from "./utils/localStorageHelper";

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
    if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [window.location.hash]);

  useEffect(() => {
    // Check if the user has visted the page before.
    const hasVisted = getItemWithExpiry('hasVisited');

    if (hasVisted) {
      dispatch({type: 'ANIMATION_FINISHED'})
    } else {
      const timer = setTimeout(() => {
        dispatch({ type: 'ANIMATION_FINISHED'});
        setItemWithExpiry('hasVisited', 'true', 3600000);
      }, 4000);

      console.log('Setting hasVisited to true in localStorage');
      return () => clearTimeout(timer);
    }  
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
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/cv" element={<CVPage />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  ) : (
    <Intro />
  );

  
  return <div className={backgroundClasses}>{mainComponent}</div>;
}

export default App;
