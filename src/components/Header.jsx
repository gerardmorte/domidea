import { BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <div className="bg-black">
      <header className="flex justify-between gap-20 w-10/12 mx-auto py-3 text-white text-2xl bg-black">
        <h1 className="bg-black text-yellow-400">domidea</h1>
        <a
          href="https://github.com/gerardmorte/domidea"
          rel="noreferrer"
          target="_blank"
          className="bg-black"
        >
          <BsGithub className="bg-black mt-1 text-3xl" />
        </a>
      </header>
    </div>
  );
}
