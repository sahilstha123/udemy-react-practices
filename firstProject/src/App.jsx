import "./App.css";
import Header from "./components/Header";
import Coreconcept from "./components/Coreconcept";
import components from "./assets/components.png"

function App() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <div className="container mx-auto">
        <Header />
        <section className=" flex justify-center">
          <div className="bg-black p-6 rounded-lg mt-6 w-4xl">
            <main>
              <h2 className=" text-2xl font-semibold text-purple-500 mb-4 text-center">
                Core Concepts
              </h2>
              <Coreconcept image={components} title={"Components"} description = {"The core UI building block"}/>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
