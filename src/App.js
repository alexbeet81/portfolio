import classes from './App.module.css';
import { useContext } from 'react';
import DarkLightContext from './store/dark-light-context';

import NavBar from './Components/UI/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Learning from './Components/Learning';
import Footer from './Components/Footer';

function App() {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const backgroundClasses = isDarkMode ? classes.backgroundDark : classes.backgroundLight

  return (
    <div className={`${classes.background} ${backgroundClasses}`}>
      <NavBar />
      <main className={classes.mainContainer}>
        <Hero />
        <About />
        <Learning />
      </main>
      <Footer />
    </div>
  );
}

export default App;
