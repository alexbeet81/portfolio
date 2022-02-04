import classes from './App.module.css';
import { useState } from 'react'; 

import NavBar from './Components/UI/NavBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkModeHandler = () => {
    setIsDarkMode((prevState) => !prevState)
  }

  const backgroundClasses = isDarkMode ? classes.backgroundDark : classes.backgroundLight

  return (
    <div className={`${classes.background} ${backgroundClasses}`}>
      <NavBar />
      <button onClick={darkModeHandler}>Click me</button>
    </div>
  );
}

export default App;
