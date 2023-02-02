import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { MdModeNight } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import ThemeContext from "./ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <header
        className={`flex justify-around md:justify-between gap-20 w-10/12 mx-auto py-3 ${
          theme == "dark" ? "text-white" : "text-dark"
        } text-3xl`}
      >
        <div className="flex flex-row gap-2">
          <FcIdea />
          <a href="/" className="text-purple-600 font-bold">
            domidea
          </a>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
            {theme == "dark" ? (
              <RiSunFill className="mt-1" />
            ) : (
              <MdModeNight className="mt-1" />
            )}
          </button>
          <a
            href="https://github.com/gerardmorte/domidea"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub className="mt-1 text-3xl" />
          </a>
        </div>
      </header>
    </div>
  );
}
