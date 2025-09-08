import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CalculatorForm from "./Components/CalculatorForm";
import { calculateInvestmentResults } from "./util/investment";
import TableForm from "./Components/TableForm";

function App() {
  const [inputs, setInputs] = useState({
    InitialInvestment: 1000,
    AnnualInvestment: 100,
    ExpectedReturn: 2,
    Duration: 1,
  });
  const { InitialInvestment, AnnualInvestment, ExpectedReturn, Duration } =
    inputs;

  // Only calculate if all inputs are filled
  const results = calculateInvestmentResults({
    initialInvestment: InitialInvestment,
    annualInvestment: AnnualInvestment,
    expectedReturn: ExpectedReturn,
    duration: Duration,
  });

  const inputIsValid = inputs.Duration >= 1;
  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: +e.target.value,
    });
  };
  return (
    <div className="h-screen ">
      <Navbar />
      <CalculatorForm handleOnChange={handleOnChange} inputs={inputs} />
      {!inputIsValid && (
        <p className="text-center mt-4 text-red-500 font-bold">Please Enter a duration greater than Zero</p>
      )}
      {inputIsValid && <TableForm results={results} inputs={inputs} />}
    </div>
  );
}

export default App;
