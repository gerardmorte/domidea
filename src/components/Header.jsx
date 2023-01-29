import { BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <div className="">
      <header className="flex justify-between gap-20 w-10/12 mx-auto py-3 text-white text-2xl">
        <h1 className=" text-zinc-200">domidea.app</h1>
        <a
          href="https://github.com/gerardmorte/domidea"
          rel="noreferrer"
          target="_blank"
          className=""
        >
          <BsGithub className="mt-1 text-3xl" />
        </a>
      </header>
    </div>
  );
}
