import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CalculatorForm from "./Components/CalculatorForm";
import TableForm from "./Components/TableForm";

function App() {
  return (
    <div className="h-screen ">
      <Navbar />
      <CalculatorForm />
      <TableForm/>
    </div>
  );
}

export default App;
