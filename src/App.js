import classes from './App.module.css';
import { useContext } from 'react';
import DarkLightContext from './store/dark-light-context';

import NavBar from './Components/UI/NavBar';
import Hero from './Components/Hero';

function App() {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const backgroundClasses = isDarkMode ? classes.backgroundDark : classes.backgroundLight

  return (
    <div className={`${classes.background} ${backgroundClasses}`}>
      <NavBar />
      <main className={classes.mainContainer}>
        <Hero />
      </main>
    </div>
  );
}

export default App;
