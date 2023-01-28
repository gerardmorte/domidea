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
    <div className="flex flex-col h-screen">
      <Header />
      <div className="text-white text-center flex flex-col justify-center items-center">
        <h1 className="my-12 md:mt-20 md:mb-16 text-4xl md:text-6xl">
          Name ideas for web domains
        </h1>
        <input
          className="text-black text-center mb-5 px-8 md:px-12 py-5 text-2xl"
          type="text"
          onChange={handleInput1Change}
          value={input1}
          placeholder="Write a word or concept..."
        />
        <input
          className="text-black text-center mb-5 px-8 md:px-12 py-5 text-2xl"
          type="text"
          onChange={handleInput2Change}
          value={input2}
          placeholder="Write a word or concept..."
        />
        <input
          className="text-black text-center mb-5 px-8 md:px-12 py-5 text-2xl"
          type="text"
          onChange={handleInput3Change}
          value={input3}
          placeholder="Write a word or concept..."
        />
        <div className="flex p-2 pb-4 text-3xl md:text-6xl md:my-6">
          <div className="p-4 ">
            {!isGenerate ? <p>{generatedName}</p> : <p>Loading...</p>}
          </div>
        </div>
        <button
          className="border-2 border-white p-4 mt-4 md:mt-8 text-3xl"
          onClick={handleButtonClick}
        >
          Generate name!
        </button>
      </div>
    </div>
  );
}
