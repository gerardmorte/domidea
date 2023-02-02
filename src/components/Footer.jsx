import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`flex border-t ${
        theme == "dark" ? "border-zinc-600" : "border-zinc-300"
      }`}
    >
      <div
        className={`${
          theme == "dark" ? "text-zinc-200" : "text-black"
        } flex flex-col md:flex-row w-10/12 py-5 mx-auto justify-end gap-2`}
      >
        <div className="flex gap-2">
          <p>Made by</p>
          <a
            className="underline"
            href="https://github.com/gerardmorte"
            rel="noreferrer"
            target="_blank"
          >
            Gerard Morte
          </a>
          <p>🚀</p>
        </div>
        <div className="flex gap-2">
          <p>Using</p>
          <a
            className="underline"
            href="https://cohere.ai/"
            rel="noreferrer"
            target="_blank"
          >
            Cohere:ai
          </a>
          <p>& React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
