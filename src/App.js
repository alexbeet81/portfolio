import classes from './App.module.css';
import { useState, useContext } from 'react';
import DarkLightContext from './store/dark-light-context';

import NavBar from './Components/UI/NavBar';

function App() {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const backgroundClasses = isDarkMode ? classes.backgroundDark : classes.backgroundLight

  return (
    <div className={`${classes.background} ${backgroundClasses}`}>
      <NavBar />
    </div>
  );
}

export default App;
