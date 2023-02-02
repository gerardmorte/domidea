import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ThemeContext from "./components/ThemeContext";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const value = { theme, setTheme };
  return (
    <div
      className={`flex flex-col justify-between h-auto md:min-h-screen ${
        theme == "dark" ? "bg-neutral-900" : "bg-white"
      } relative`}
    >
      <ThemeContext.Provider value={value}>
        <Header />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
