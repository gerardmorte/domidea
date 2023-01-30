import { TiTick } from "react-icons/ti";

export default function ({ copiedAlertClass }) {
  return (
    <div
      className={`flex gap-2 rounded-2xl font-bold p-2 px-12 absolute left-0 right-0 ml-auto mr-auto max-w-max bottom-0 opacity-0 bg-purple-800 ${copiedAlertClass}`}
    >
      <TiTick className="text-2xl text-green-500" />
      <p className="text-zinc-200">Copied to clipboard</p>
    </div>
  );
}
