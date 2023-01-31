export default function ({
  showAlert,
  message,
  iconComponent,
  backgroundColor,
}) {
  return (
    <div
      className={`text-base flex gap-2 rounded-2xl font-bold p-2 px-8 absolute left-0 right-0 ml-auto mr-auto max-w-max -bottom-10 opacity-0 ${backgroundColor} ${
        showAlert ? "alertEffect" : ""
      }`}
    >
      {iconComponent}
      <p className="text-zinc-200">{message}</p>
    </div>
  );
}
