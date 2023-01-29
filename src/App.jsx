import "./App.css";
import { domainNameGenerator } from "../services/ia";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { AiOutlineCopy } from "react-icons/ai";

export default function App() {
  const [isGenerate, setIsGenerate] = useState(false);
  const [generatedName, setGeneratedName] = useState("www.example.com");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [randomness, setRandomness] = useState(2.5);
  const [appearAnimation, setAppearAnimation] = useState("");
  const [copiedAlert, setCopiedAlert] = useState("");
  const [disableBtnClipboard, setDisableBtnClipboard] = useState(false);

  useEffect(() => {
    setAppearAnimation("appearAnimation");
  }, []);

  const handleButtonClipboard = () => {
    navigator.clipboard.writeText(generatedName);
    setCopiedAlert("alertEffect");
    setDisableBtnClipboard(true);
    setTimeout(() => {
      setCopiedAlert("");
      setDisableBtnClipboard(false);
    }, 2000);
  };

  const handleInput1Change = (e) => setInput1(e.target.value);
  const handleInput2Change = (e) => setInput2(e.target.value);
  const handleInput3Change = (e) => setInput3(e.target.value);
  const handleInputRange = (e) => setRandomness(e.target.value);

  const handleButtonClick = () => {
    const inputsArray = [input1, input2, input3];

    setIsGenerate(true);

    const words = inputsArray.join(", ");
    const example1 = `www.${inputsArray[0]}${inputsArray[1]}.com`;
    const example2 = `www.${inputsArray[1]}${inputsArray[2]}.com`;

    console.log(inputsArray);
    console.log(words + "\n" + example1 + "\n" + example2);

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
    <div className="flex flex-col justify-between h-auto md:min-h-screen bg-neutral-900 relative">
      <Header />
      <div className="text-white flex flex-col w-10/12 md:w-8/12 mx-auto md:mb-2">
        <h1 className="text-4xl md:text-5xl text-center mb-10 mt-7 font-bold text-white bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
          Name ideas for web domains.
        </h1>
        <h2
          className={`text-4xl text-center md:text-left md:w-6/12 mt-6 text-zinc-200 ${appearAnimation}`}
        >
          Enter three words or concepts to generate a name for a web domain.
        </h2>
        <div
          className={`flex flex-col md:flex-row my-12 w-12/12 gap-10 ${appearAnimation}`}
        >
          <div className="flex flex-col justify-between md:w-6/12 gap-10">
            <div className="flex flex-col p-6 bg-neutral-800 slimBoxShadow w-12/12 text-zinc-200">
              <label className=" text-left p-2 text-xl" htmlFor="">
                Word 1:
              </label>
              <input
                className="bg-neutral-900 text-center mb-5 px-8 md:px-12 py-5 text-xl md:text-2xl rounded-xl slimBoxShadow"
                type="text"
                onChange={handleInput1Change}
                value={input1}
                placeholder="Write a word or concept..."
              />
              <label className="text-left p-2 text-xl" htmlFor="">
                Word 2:
              </label>
              <input
                className=" bg-neutral-900 text-center mb-5 px-8 md:px-12 py-5 text-xl md:text-2xl rounded-xl slimBoxShadow"
                type="text"
                onChange={handleInput2Change}
                value={input2}
                placeholder="Write a word or concept..."
              />
              <label className="text-left p-2 text-xl" htmlFor="">
                Word 3:
              </label>
              <input
                className="bg-neutral-900 text-center px-8 md:px-12 py-5 text-xl md:text-2xl rounded-xl slimBoxShadow mb-5"
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
                    className="text-zinc-200 text-xl text-left p-2"
                    htmlFor=""
                  >
                    Randomness:{" "}
                    <span className="bg-neutral-900 px-3 pt-2 pb-3 rounded-xl">
                      {randomness}
                    </span>
                  </label>
                  <input
                    className="py-10 accent-white"
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
                className="text-3xl text-zinc-200 font-bold bg-purple-800 pb-5 pt-4 rounded-3xl hover:opacity-70 transition duration-500 w-12/12"
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
      </div>
      <footer className="flex">
        <p className="flex w-10/12 py-5 mx-auto justify-end text-zinc-200">
          by Gerard Morte
        </p>
      </footer>
      <div
        className={`rounded-2xl font-bold p-2 px-12 absolute left-0 right-0 ml-auto mr-auto max-w-max bottom-0 opacity-0 bg-purple-800 ${copiedAlert}`}
      >
        <p className="text-white text-right">Copied to clipboard</p>
      </div>
    </div>
  );
}
