import "./App.css";
import Header from "./components/Header";
import Coreconcept from "./components/Coreconcept";
import { CORE_CONCEPTS } from "../data";
import Footer from "./components/Footer";
import Tabbutton from "./components/Tabbutton";

function App() {
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
          <section className="container mx-auto  pl-4  xl:pl-56">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4 ">
              Example
            </h2>
            <menu className="flex ">
              <Tabbutton>Components</Tabbutton>
              <Tabbutton>JSX</Tabbutton>
              <Tabbutton>Props</Tabbutton>
              <Tabbutton>State</Tabbutton>
            </menu>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
