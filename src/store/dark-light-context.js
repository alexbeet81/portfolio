import React, { useState } from "react";

const DarkLightContext = React.createContext({
  isDarkMode: true,
  toggleDarkLight: () => {}
})

export const DarkLightContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkLight = () => {
    setIsDarkMode((prevState) => !prevState)
  }

  const contextValue = {
    isDarkMode: isDarkMode,
    toggleDarkLight: toggleDarkLight
  }

  return (
    <DarkLightContext.Provider value={contextValue}>
      {props.children}
    </DarkLightContext.Provider>
  )
};

export default DarkLightContext;