import { useEffect, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { domainNameGenerator } from "../../services/ia";
import CopiedAlert from "./CopiedAlert";

export default function Generator() {
  const [isGenerate, setIsGenerate] = useState(false);
  const [generatedName, setGeneratedName] = useState("www.example.com");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [randomness, setRandomness] = useState(2.5);
  const [appearAnimation, setAppearAnimation] = useState("");
  const [copiedAlertClass, setCopiedAlertClass] = useState("");
  const [disableBtnClipboard, setDisableBtnClipboard] = useState(false);

  useEffect(() => {
    setAppearAnimation("appearAnimation");
  }, []);

  const handleButtonClipboard = () => {
    navigator.clipboard.writeText(generatedName);
    setCopiedAlertClass("alertEffect");
    setDisableBtnClipboard(true);
    setTimeout(() => {
      setCopiedAlertClass("");
      setDisableBtnClipboard(false);
    }, 2000);
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
    setIsGenerate(true);
    const words = inputsArray.join(", ");
    const example1 = `www.${inputsArray[0]}${inputsArray[1]}.com`;
    const example2 = `www.${inputsArray[1]}${inputsArray[2]}.com`;

    async function fetchData() {
      const data = await domainNameGenerator(
        words,
        example1,
        example2,
        parseFloat(randomness)
      );
      setIsGenerate(false);
      setGeneratedName(data);
    }
    fetchData();
  };

  return (
    <>
      <div
        className={`flex flex-col md:flex-row my-12 w-12/12 gap-10 ${appearAnimation}`}
      >
        <div className="flex flex-col justify-between md:w-6/12 gap-10">
          <div className="flex flex-col p-6 bg-neutral-800 slimBoxShadow w-12/12 text-zinc-200">
            <label className=" text-left p-2 text-lg md:text-xl" htmlFor="">
              Word 1:
            </label>
            <input
              className="bg-neutral-900 text-center mb-5 px-8 md:px-12 py-5 text-lg md:text-2xl rounded-xl slimBoxShadow"
              type="text"
              onChange={handleInput1Change}
              value={input1}
              placeholder="Write a word or concept..."
            />
            <label className="text-left p-2 text-lg md:text-xl" htmlFor="">
              Word 2:
            </label>
            <input
              className=" bg-neutral-900 text-center mb-5 px-8 md:px-12 py-5 text-lg md:text-2xl rounded-xl slimBoxShadow"
              type="text"
              onChange={handleInput2Change}
              value={input2}
              placeholder="Write a word or concept..."
            />
            <label className="text-left p-2 text-lg md:text-xl" htmlFor="">
              Word 3:
            </label>
            <input
              className="bg-neutral-900 text-center px-8 md:px-12 py-5 text-lg md:text-2xl rounded-xl slimBoxShadow mb-5"
              type="text"
              onChange={handleInput3Change}
              value={input3}
              placeholder="Write a word or concept..."
            />
          </div>
        </div>
        <div className="md:w-6/12">
          <div className="flex flex-col justify-between md:w-12/12 gap-10">
            <div className="flex flex-col justify-between w-12/12">
              <div className="flex flex-col p-6 bg-neutral-800 slimBoxShadow w-12/12">
                <label
                  className="text-zinc-200 text-lg md:text-xl text-left p-2"
                  htmlFor=""
                >
                  Randomness:{" "}
                  <span className="bg-neutral-900 px-3 pt-2 pb-2 ml-1 rounded-xl">
                    {randomness}
                  </span>
                </label>
                <input
                  className="py-6 md:py-10 accent-white"
                  type="range"
                  value={randomness}
                  min="0"
                  max="5"
                  step="0.10"
                  onChange={handleInputRange}
                ></input>
              </div>
            </div>
            <button
              className="text-2xl md:text-3xl text-zinc-200 font-bold bg-purple-800 pb-5 pt-4 rounded-3xl md:hover:opacity-70 transition duration-300 w-12/12"
              onClick={handleButtonClick}
            >
              Generate name
            </button>
            <div className="relative slimBoxShadow py-10 px-1 md:p-10 bg-neutral-800 text-2xl md:text-3xl text-center break-words">
              {!isGenerate ? (
                <>
                  <button
                    className="text-white text-3xl absolute right-0 top-0 m-1 cursor-pointer p-1"
                    onClick={handleButtonClipboard}
                    disabled={disableBtnClipboard}
                  >
                    <AiOutlineCopy />
                  </button>
                  <p className="text-zinc-200 font-bold">{generatedName}</p>
                </>
              ) : (
                <span className="loader"></span>
              )}
            </div>
          </div>
        </div>
      </div>
      <CopiedAlert copiedAlertClass={copiedAlertClass} />
    </>
  );
}
