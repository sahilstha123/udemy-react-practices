import { useState } from "react";

import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-green-900 min-h-screen w-full">
      <div className="flex justify-center">

      <Hero />
      </div>
    </div>
  );
}

export default App;
