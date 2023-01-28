import "./App.css";
import { domainNameGenerator } from "../services/ia";
import { useState, useEffect } from "react";

export default function App() {
  const [generatedName, setGeneratedName] = useState(null);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [inputsArray, setInputsArray] = useState([]);

  const handleInput1Change = (e) => setInput1(e.target.value);
  const handleInput2Change = (e) => setInput2(e.target.value);
  const handleInput3Change = (e) => setInput3(e.target.value);

  const handleButtonClick = () => {
    setInputsArray([input1, input2, input3]);
  };

  useEffect(() => {
    const words = inputsArray.join(", ");
    const example1 = `www.${inputsArray[0]}${inputsArray[1]}.com`;
    const example2 = `www.${inputsArray[1]}${inputsArray[2]}.org`;

    console.log(inputsArray);
    console.log(words + "\n" + example1 + "\n" + example2);

    async function fetchData() {
      const data = await domainNameGenerator(words, example1, example2);
      setGeneratedName(data);
    }
    fetchData();
  }, [inputsArray]);

  return (
    <div className="text-3xl text-white text-center flex flex-col justify-center items-center h-screen">
      <h1>domidea 💡</h1>
      <div>{generatedName ? <p>{generatedName}</p> : <p>Loading...</p>}</div>
      <input
        className="mt-2 mb-2 text-black"
        type="text"
        onChange={handleInput1Change}
        value={input1}
      />
      <input
        className="mb-2 text-black"
        type="text"
        onChange={handleInput2Change}
        value={input2}
      />
      <input
        className="mb-2 text-black"
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
    </div>
  );
}