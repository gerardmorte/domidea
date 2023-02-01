import { BsGithub } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";

export default function Header() {
  return (
    <div className="">
      <header className="flex justify-between gap-20 w-10/12 mx-auto py-3 text-white text-3xl">
        <div className="flex flex-row gap-2">
          <FcIdea />
          <a href="/" className="text-purple-600 font-bold">
            domidea
          </a>
        </div>
        <a
          href="https://github.com/gerardmorte/domidea"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub className="mt-1 text-3xl" />
        </a>
      </header>
    </div>
  );
}
