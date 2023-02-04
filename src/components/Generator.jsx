import { useEffect, useState, useContext } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { checkDomainAvailable, domainNameGenerator } from "../../services/ia";
import CopiedAlert from "./CopiedAlert";
import { TiTick } from "react-icons/ti";
import { MdError } from "react-icons/md";
import ThemeContext from "./ThemeContext";

export default function Generator() {
  const { theme } = useContext(ThemeContext);

  const [appearAnimation, setAppearAnimation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedName, setGeneratedName] = useState("www.example.com");
  const [generatedNamesList, setGeneratedNamesList] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [randomness, setRandomness] = useState(3);
  const [disableBtnGenerate, setDisableBtnGenerate] = useState(false);
  const [disableBtnClipboard, setDisableBtnClipboard] = useState(false);
  const [showClipboardAlert, setShowClipboardAlert] = useState(false);
  const [showRequiredInputsAlert, setShowRequiredInputsAlert] = useState(false);

  useEffect(() => {
    setAppearAnimation("appearAnimation");
  }, []);

  const handleButtonClipboard = () => {
    navigator.clipboard.writeText(generatedName);
    setShowClipboardAlert(true);
    setDisableBtnClipboard(true);
    setTimeout(() => {
      setShowClipboardAlert(false);
      setDisableBtnClipboard(false);
    }, 3000);
  };

  const handleInput1Change = (e) => setInput1(e.target.value);
  const handleInput2Change = (e) => setInput2(e.target.value);
  const handleInput3Change = (e) => setInput3(e.target.value);
  const handleInputRange = (e) => setRandomness(e.target.value);

  const handleButtonClick = () => {
    const inputsArray = [
      input1.toLocaleLowerCase(),
      input2.toLocaleLowerCase(),
      input3.toLocaleLowerCase(),
    ];
    if (inputsArray.some((word) => word.length === 0)) {
      setShowRequiredInputsAlert(true);
      setDisableBtnGenerate(true);
      setTimeout(() => {
        setShowRequiredInputsAlert(false);
        setDisableBtnGenerate(false);
      }, 3000);
    } else {
      setIsGenerating(true);
      setDisableBtnGenerate(true);
      const words = inputsArray.join(", ");
      const example1 = `www.${inputsArray[0]}${inputsArray[1]}.com`;
      const example2 = `www.${inputsArray[1]}${inputsArray[2]}.com`;
      fetchData(words, example1, example2, parseFloat(randomness));
    }

    async function fetchData(words, example1, example2, randomness) {
      const MAX_CHARACTERS = 30;
      const data = await domainNameGenerator(
        words,
        example1,
        example2,
        randomness
      );
      const isAvailable = await checkDomainAvailable(data);
      if (
        generatedNamesList.includes(data) ||
        !isAvailable ||
        data.length >= MAX_CHARACTERS ||
        data.includes(" ")
      ) {
        handleButtonClick();
      } else {
        setGeneratedNamesList([...generatedNamesList, data]);
        setIsGenerating(false);
        setGeneratedName(data.toLocaleLowerCase());
        setDisableBtnGenerate(false);
      }
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row my-12 w-12/12 gap-10 ${appearAnimation}`}
    >
      <div className="flex flex-col justify-between md:w-6/12 gap-10">
        <form
          action=""
          className={`flex flex-col p-6 ${
            theme == "dark"
              ? "bg-neutral-800 text-zinc-200 border-zinc-600"
              : "bg-zinc-100 text-dark border-zinc-100"
          } w-12/12 border rounded-xl`}
        >
          <label className=" text-left p-2 text-lg md:text-xl" htmlFor="">
            Word 1:
          </label>
          <input
            className={`${
              theme == "dark"
                ? "bg-neutral-900 border-zinc-600"
                : "bg-white border-zinc-100"
            } text-center mb-5 px-8 md:px-12 py-5 text-lg md:text-2xl border rounded-xl`}
            type="text"
            onChange={handleInput1Change}
            value={input1}
            placeholder="Write a word or concept..."
          />
          <label className="text-left p-2 text-lg md:text-xl" htmlFor="">
            Word 2:
          </label>
          <input
            className={`${
              theme == "dark"
                ? "bg-neutral-900 border-zinc-600"
                : "bg-white border-zinc-100"
            } text-center mb-5 px-8 md:px-12 py-5 text-lg md:text-2xl border rounded-xl`}
            type="text"
            onChange={handleInput2Change}
            value={input2}
            placeholder="Write a word or concept..."
          />
          <label className="text-left p-2 text-lg md:text-xl" htmlFor="">
            Word 3:
          </label>
          <input
            className={`${
              theme == "dark"
                ? "bg-neutral-900 border-zinc-600"
                : "bg-white border-zinc-100"
            } text-center mb-5 px-8 md:px-12 py-5 text-lg md:text-2xl border rounded-xl`}
            type="text"
            onChange={handleInput3Change}
            value={input3}
            placeholder="Write a word or concept..."
          />
        </form>
      </div>

      <div className="flex flex-col justify-between md:w-6/12 gap-10">
        <form
          action=""
          className={`flex flex-col p-6 ${
            theme == "dark"
              ? "bg-neutral-800 border-zinc-600"
              : "bg-zinc-100 border-zinc-100"
          }  border rounded-xl w-12/12`}
        >
          <label
            className={`${
              theme == "dark" ? "text-zinc-200" : "text-black"
            } text-lg md:text-xl text-left p-2`}
            htmlFor=""
          >
            Randomness:{" "}
            <span
              className={`${
                theme == "dark" ? "bg-neutral-900" : "bg-white"
              } px-3 pt-2 pb-2 ml-1 rounded-xl`}
            >
              {randomness}
            </span>
          </label>
          <input
            className={`py-6 md:py-10 ${
              theme == "dark" ? "accent-white" : "accent-neutral-700"
            }`}
            type="range"
            value={randomness}
            min="1"
            max="5"
            step="0.10"
            onChange={handleInputRange}
          ></input>
        </form>
        <div className="flex flex-col relative">
          <button
            className="text-2xl md:text-3xl text-zinc-200 font-bold bg-purple-700 pb-5 pt-4 rounded-3xl hover:bg-purple-800 transition duration-1000 w-12/12 cursor-pointer"
            onClick={handleButtonClick}
            disabled={disableBtnGenerate}
          >
            Generate name
          </button>
          <CopiedAlert
            showAlert={showRequiredInputsAlert}
            message={"Please, write three words."}
            iconComponent={<MdError className="text-2xl text-white" />}
            backgroundColor={"bg-red-700"}
          />
        </div>
        <div
          className={`relative py-10 px-1 md:p-10 ${
            theme == "dark"
              ? "bg-neutral-800 border-zinc-600"
              : "bg-zinc-100 border-zinc-100"
          } border rounded-xl text-2xl md:text-3xl text-center break-words`}
        >
          {!isGenerating ? (
            <>
              <button
                className={`${
                  theme == "dark" ? "text-white" : "text-neutral-600"
                } text-3xl absolute right-0 top-0 m-1 cursor-pointer p-1`}
                onClick={handleButtonClipboard}
                disabled={disableBtnClipboard}
              >
                <AiOutlineCopy />
              </button>
              <p
                className={`${
                  theme == "dark" ? "text-zinc-200" : "text-neutral-900"
                }  font-bold`}
              >
                {generatedName}
              </p>
            </>
          ) : (
            <span className="loader"></span>
          )}
          <CopiedAlert
            showAlert={showClipboardAlert}
            message="Copied to clipboard"
            iconComponent={<TiTick className="text-2xl text-white" />}
            backgroundColor={"bg-green-800"}
          />
        </div>
      </div>
    </div>
  );
}
