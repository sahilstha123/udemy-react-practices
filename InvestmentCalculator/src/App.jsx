import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CalculatorForm from "./Components/CalculatorForm";

function App() {
  return (
    <div className="h-screen ">
      <Navbar />
      <CalculatorForm />
    </div>
  );
}

export default App;
