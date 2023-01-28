import "./App.css";
import { domainNameGenerator } from "../services/ia";
import { useState } from "react";

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
    <div className="text-3xl text-white text-center flex flex-col justify-center items-center h-screen">
      <h1 className="my-7 text-6xl">domidea 💡</h1>
      <input
        className="mt-2 mb-2 text-black text-center"
        type="text"
        onChange={handleInput1Change}
        value={input1}
      />
      <input
        className="mb-2 text-black text-center"
        type="text"
        onChange={handleInput2Change}
        value={input2}
      />
      <input
        className="mb-2 text-black text-center"
        type="text"
        onChange={handleInput3Change}
        value={input3}
      />
      <button
        className="border-2 border-white p-2 mt-2"
        onClick={handleButtonClick}
      >
        Generate name!
      </button>
      <div className="mt-10">
        {!isGenerate ? <p>{generatedName}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
}
