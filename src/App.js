import classes from './App.module.css';
import { useState } from 'react'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkModeHandler = () => {
    setIsDarkMode((prevState) => !prevState)
  }

  const backgroundClasses = isDarkMode ? classes.backgroundDark : classes.backgroundLight

  return (
    <div className={`${classes.background} ${backgroundClasses}`}>
      <button onClick={darkModeHandler}>Click me</button>
    </div>
  );
}

export default App;
