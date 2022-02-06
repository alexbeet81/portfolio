import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { DarkLightContextProvider } from "./store/dark-light-context";

ReactDOM.render(
  <React.StrictMode>
    <DarkLightContextProvider>
      <App />
    </DarkLightContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
