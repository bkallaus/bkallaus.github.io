import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { setup } from "goober";
import { theme } from "./theme";

const ThemeContext = React.createContext(theme);
const useTheme = () => React.useContext(ThemeContext);

declare module "goober" {
  export interface DefaultTheme {
    borderRadius: string;
    spacing: number;
    color: {
      primary: string;
      background: string;
      paper: string;
      light: string;
      dark: string;
      accent: string;
      accentLight: string;
      accentDark: string;
    };
  }
}

setup(React.createElement, undefined, useTheme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
