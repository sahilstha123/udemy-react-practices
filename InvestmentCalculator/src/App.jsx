import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CalculatorForm from "./Components/CalculatorForm";
import { calculateInvestmentResults } from "./util/investment";
import TableForm from "./Components/TableForm";

function App() {
  const [inputs, setInputs] = useState({
      InitialInvestment: "",
      AnnualInvestment: "",
      ExpectedReturn: "",
      Duration: "",
    });
    const { InitialInvestment, AnnualInvestment, ExpectedReturn, Duration } = inputs;

    // Only calculate if all inputs are filled
      const results = calculateInvestmentResults({
        initialInvestment: InitialInvestment,
        annualInvestment: AnnualInvestment,
        expectedReturn: ExpectedReturn,
        duration: Duration,
      });
      
      const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: +e.target.value,
    });
  };
  return (
    <div className="h-screen ">
      <Navbar />
      <CalculatorForm handleOnChange ={handleOnChange} inputs={inputs}/>
      <TableForm results={results} inputs={inputs}/>
    </div>
  );

}

export default App;
