import { useState } from "react";

import "./App.css";
import Hero from "./components/Hero";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  const challenges = [
    {name:"Easy", targetTime:20},
    {name:"Not Easy", targetTime:10},
    {name:"Getting Tough",targetTime:5},
    {name:"Pros Only", targetTime:10},
  ]
  return (
    <div className="bg-green-900 min-h-screen w-full">
      <div className="flex justify-center">
        <div className="bg-gray-900 w-full max-w-3xl m-4 mt-10  p-6 sm:p-10 rounded-lg text-gray-300 shadow-lg">
          <Hero />
        <TimerChallenge  challenges={challenges}/>
        
        </div>
      </div>
    </div>
  );
}

export default App;
