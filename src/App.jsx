import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="flex flex-col justify-between h-auto md:min-h-screen background relative">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
