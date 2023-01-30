import { useEffect, useState } from "react";
import Generator from "./Generator";

export default function Main() {
  const [appearAnimation, setAppearAnimation] = useState("");

  useEffect(() => {
    setAppearAnimation("appearAnimation");
  }, []);

  return (
    <>
      <div className="text-white flex flex-col w-10/12 md:w-8/12 mx-auto mb-3 mt-6 md:mt-0">
        <h1 className="text-4xl md:text-5xl text-center mb-10 mt-7 font-bold text-white bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
          Name ideas for web domains.
        </h1>
        <h2
          className={`text-3xl md:text-4xl text-center md:text-left md:w-6/12 mt-6 text-zinc-200 ${appearAnimation}`}
        >
          Enter three words or concepts to generate a name for a web domain.
        </h2>
        <Generator />
      </div>
    </>
  );
}
