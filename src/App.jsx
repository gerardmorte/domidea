import "./App.css";
import { domainNameGenerator } from "../services/ia";
import { useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [isGenerate, setIsGenerate] = useState(false);
  const [generatedName, setGeneratedName] = useState("www.puppyum.com");
  const [input1, setInput1] = useState("happy");
  const [input2, setInput2] = useState("dog");
  const [input3, setInput3] = useState("meal");
  const [randomness, setRandomness] = useState(2.5);

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
    <div className="flex flex-col justify-between h-screen bg-neutral-900">
      <Header />
      <div className="text-white flex flex-col w-8/12 mx-auto">
        <h1 className="text-4xl md:text-5xl text-center mb-10 mt-5">
          Name ideas for web domains.
        </h1>
        <h2 className="text-4xl w-6/12 mt-6">
          Enter three words or concepts to generate a name for a web domain.
        </h2>
        <div className="flex my-12 w-12/12 gap-10">
          <div className="flex flex-col justify-between w-6/12 gap-10">
            <div className="flex flex-col p-6 bg-neutral-800 slimBoxShadow w-12/12">
              <label className=" text-left p-2 text-xl" htmlFor="">
                Word 1:
              </label>
              <input
                className="text-white bg-neutral-900 text-center mb-5 px-8 md:px-12 py-5 text-2xl rounded-xl slimBoxShadow"
                type="text"
                onChange={handleInput1Change}
                value={input1}
                placeholder="Write a word or concept..."
              />
              <label
                className="formBackground text-left p-2 text-xl"
                htmlFor=""
              >
                Word 2:
              </label>
              <input
                className="text-white bg-neutral-900 text-center mb-5 px-8 md:px-12 py-5 text-2xl rounded-xl slimBoxShadow"
                type="text"
                onChange={handleInput2Change}
                value={input2}
                placeholder="Write a word or concept..."
              />
              <label
                className="formBackground text-left p-2 text-xl"
                htmlFor=""
              >
                Word 3:
              </label>
              <input
                className="text-white bg-neutral-900 text-center px-8 md:px-12 py-5 text-2xl rounded-xl slimBoxShadow mb-5"
                type="text"
                onChange={handleInput3Change}
                value={input3}
                placeholder="Write a word or concept..."
              />
            </div>
          </div>
          <div className="flex flex-col justify-between w-6/12">
            <div className="flex flex-col justify-between w-12/12">
              <div className="flex flex-col p-6 bg-neutral-800 slimBoxShadow w-12/12">
                <label
                  className="formBackground text-xl text-left p-2"
                  htmlFor=""
                >
                  Randomness: {randomness}
                </label>
                <input
                  className="py-10"
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
              className="text-3xl text-black font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 pb-5 pt-4 rounded-3xl hover:opacity-70 transition duration-500 w-12/12"
              onClick={handleButtonClick}
            >
              Generate name
            </button>
            <div className="slimBoxShadow p-10 bg-neutral-800 text-4xl text-center">
              {!isGenerate ? (
                <p className="formBackground">{generatedName}</p>
              ) : (
                <p className="formBackground">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="flex">
        <p className="flex w-10/12 py-5 mx-auto text-white">by Gerard Morte</p>
      </footer>
    </div>
  );
}
