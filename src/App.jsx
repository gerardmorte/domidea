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

  const handleInput1Change = (e) => setInput1(e.target.value);
  const handleInput2Change = (e) => setInput2(e.target.value);
  const handleInput3Change = (e) => setInput3(e.target.value);

  const handleButtonClick = () => {
    const inputsArray = [input1, input2, input3];

    setIsGenerate(true);

    const words = inputsArray.join(", ");
    const example1 = `www.${inputsArray[0]}${inputsArray[1]}.com`;
    const example2 = `www.${inputsArray[1]}${inputsArray[2]}.org`;

    console.log(inputsArray);
    console.log(words + "\n" + example1 + "\n" + example2);

    async function fetchData() {
      const data = await domainNameGenerator(words, example1, example2);
      setIsGenerate(false);
      setGeneratedName(data);
    }

    fetchData();
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="text-white flex flex-col w-8/12 mx-auto">
        <h1 className="text-6xl mt-5">domidea</h1>
        <h1 className="text-4xl md:text-5xl text-left mt-12">
          Name ideas for web domains. 💡
        </h1>
        <div className="flex justify-between my-12 w-10/12">
          <div className="flex flex-col justify-between w-6/12">
            <h2 className="text-4xl text-left">
              Enter three words or concepts to generate a name for a web domain.
            </h2>
            <button
              className="text-3xl bg-purple-600 text-white pb-5 pt-4 rounded-3xl hover:opacity-70 transition duration-500 w-6/12"
              onClick={handleButtonClick}
            >
              Generate name
            </button>
            <div className="w-auto mb-5 slimBoxShadow p-10 formBackground text-4xl text-center">
              {!isGenerate ? (
                <p className="formBackground">{generatedName}</p>
              ) : (
                <p className="formBackground">Loading...</p>
              )}
            </div>
          </div>
          <div className="flex flex-col p-6 formBackground slimBoxShadow">
            <label className="formBackground text-left p-2" htmlFor="">
              Word 1
            </label>
            <input
              className="text-white text-center mb-5 px-8 md:px-12 py-5 text-2xl rounded-xl slimBoxShadow"
              type="text"
              onChange={handleInput1Change}
              value={input1}
              placeholder="Write a word or concept..."
            />
            <label className="formBackground text-left p-2" htmlFor="">
              Word 2
            </label>
            <input
              className="text-white text-center mb-5 px-8 md:px-12 py-5 text-2xl rounded-xl slimBoxShadow"
              type="text"
              onChange={handleInput2Change}
              value={input2}
              placeholder="Write a word or concept..."
            />
            <label className="formBackground text-left p-2" htmlFor="">
              Word 3
            </label>
            <input
              className="text-white text-center px-8 md:px-12 py-5 text-2xl rounded-xl slimBoxShadow mb-5"
              type="text"
              onChange={handleInput3Change}
              value={input3}
              placeholder="Write a word or concept..."
            />
          </div>
        </div>
        {/* <div className="w-auto mb-5 slimBoxShadow p-10 formBackground text-5xl text-center">
          {!isGenerate ? (
            <p className="formBackground">{generatedName}</p>
          ) : (
            <p className="formBackground">Loading...</p>
          )}
        </div> */}
      </div>
      <footer className="flex bg-black">
        <p className="flex w-10/12 py-5 bg-black mx-auto text-white">
          by Gerard Morte
        </p>
      </footer>
    </div>
  );
}
