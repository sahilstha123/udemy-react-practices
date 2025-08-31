import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  
  const handleOnSelect = ()=>{
    setActivePlayer((curActivePlayer)=>curActivePlayer === "X" ? "O":"X")
  }
 useEffect(() => {
  console.log("activePlayer updated:", activePlayer);
}, [activePlayer]);
  return (
    <div >
      <Navbar/>
      <Main OnSelectPlayer = {handleOnSelect} ActivePlayer = {activePlayer}/>
    </div>
  );
}

export default App;
