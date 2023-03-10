import { useEffect, useState, useContext } from "react";
import Generator from "./Generator";
import ThemeContext from "./ThemeContext";

export default function Main() {
  const { theme } = useContext(ThemeContext);
  const [appearAnimation, setAppearAnimation] = useState("");

  useEffect(() => {
    setAppearAnimation("appearAnimation");
  }, []);

  return (
    <>
      <div className="flex flex-col w-10/12 md:w-8/12 mx-auto mb-3 mt-6 md:mt-0">
        <h1
          className={`text-4xl md:text-5xl text-center mb-10 mt-7 font-bold ${
            theme == "dark"
              ? "text-white bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text"
              : "text-dark"
          }`}
        >
          Name ideas for web domains.
        </h1>
        <h2
          className={`text-3xl md:text-4xl text-center md:text-left md:w-8/12 mt-6 ${
            theme == "dark" ? "text-zinc-200" : "text-dark"
          } ${appearAnimation}`}
        >
          Enter three words or concepts to generate an{" "}
          <span className="font-medium">available</span> name for a{" "}
          <span className="font-medium">web domain.</span>
        </h2>
        <Generator />
      </div>
    </>
  );
}
