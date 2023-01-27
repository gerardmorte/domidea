import "./App.css";
import { domainNameGenerator } from "../services/ia";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getData = async () => {
      let promise = domainNameGenerator();
      const value = await promise;
      console.log(value);
    };
    getData();
  }, []);

  return (
    <div className="text-3xl text-white text-center flex justify-center items-center h-screen">
      <h1>domidea 💡</h1>
    </div>
  );
}

export default App;
