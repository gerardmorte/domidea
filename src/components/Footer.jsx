export default function Footer() {
  return (
    <footer className="flex border-t border-zinc-600">
      <div className="flex flex-col md:flex-row w-10/12 py-5 mx-auto justify-end text-zinc-200 gap-2">
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
