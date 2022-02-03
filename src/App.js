import classes from './App.module.css';
import { useState } from 'react'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const backgroundClasses = isDarkMode ? classes.backgroundDark : classes.backgroundLight

  return (
    <div className={`${classes.background} ${backgroundClasses}`}>
      <button>Click me</button>
    </div>
  );
}

export default App;
