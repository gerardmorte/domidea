import { createContext } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

export default ThemeContext;
