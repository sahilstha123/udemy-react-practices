import "./App.css";
import Header from "./components/Header";
import Coreconcept from "./components/Coreconcept";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import Footer from "./components/Footer";
import Tabbutton from "./components/Tabbutton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import CodeBlock from "./components/CodeBlock";

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
            <div className="bg-black p-6 rounded-lg  w-5xl m-4 ">
              <h2 className=" text-2xl font-semibold text-purple-500 mb-4 text-center">
                Core Concepts
              </h2>
              <div className="flex gap-3 flex-wrap flex-grow">
                {/* <Coreconcept {...CORE_CONCEPTS[0]} /> */}
                {CORE_CONCEPTS.map((item, index) => {
                  return <Coreconcept key={index} {...item} />;
                })}
              </div>
            </div>
          </section>

          {/* example */}
          <section className="container mx-auto  pl-4 xl:pl-64 pr-4">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4 ">
              Example
            </h2>
            <menu className="flex ">
              <Tabbutton onCLick={() => handleOnclick("components")}>
                Components
              </Tabbutton>
              <Tabbutton onCLick={() => handleOnclick("JSX")}>JSX</Tabbutton>
              <Tabbutton onCLick={() => handleOnclick("Props")}>
                Props
              </Tabbutton>
              <Tabbutton onCLick={() => handleOnclick("State")}>
                State
              </Tabbutton>
            </menu>
            {/* {Object.keys(EXAMPLES).map((key) => {
              if (key === selectTopic) {
                return (
                  <div
                    key={key}
                    className="bg-purple-950 w-full max-w-[750px] md:max-w-5xl rounded-md p-4 mt-3 text-gray-300"
                  >
                    <h3 className="font-bold text-xl">{EXAMPLES[key].title}</h3>
                    <p className="font-light">{EXAMPLES[key].description}</p>
                    <CodeBlock code={EXAMPLES[key].code} />
                  </div>
                );
              }
              return null;
            })} */}
            {selectTopic ? (
              <div
                
                className="bg-purple-950 w-full max-w-[750px] md:max-w-5xl rounded-md p-4 mt-3 text-gray-300"
              >
                <h3 className="font-bold text-xl">{EXAMPLES[selectTopic].title}</h3>
                <p className="font-light">{EXAMPLES[selectTopic].description}</p>
                <CodeBlock code={EXAMPLES[selectTopic].code} />
              </div>
            ) : (
              <p className="mt-4 text-red-600 font-sans">Please Select a Topic</p>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
