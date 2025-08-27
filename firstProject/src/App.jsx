import "./App.css";
import Header from "./components/Header";
import Coreconcept from "./components/Coreconcept";
import { CORE_CONCEPTS } from "../data";
import Footer from "./components/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Example from "./components/Example";
import Concepts from "./components/concepts";

function App() {
  const [selectTopic, setSelectTopic] = useState("");
  const handleOnclick = (selectedButton) => {
    setSelectTopic(selectedButton);
    console.log(selectedButton);
  };

  return (
    <div className="bg-indigo-950 min-h-screen">
      <div className="container mx-auto">
        <Header />
        <main>
          {/* coreconcept */}
          <section className=" flex justify-center">
            <Concepts/>
          </section>

          {/* example */}
          <section className="container mx-auto  pl-4 xl:pl-64 pr-4">
            <Example handleOnclick={handleOnclick} selectTopic={selectTopic}/>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
