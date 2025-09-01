import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Log from "./components/Log";
// helper function
const deriveactivePlayer = (gameTurns)=>{
let currentPlayer = "X";
      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      return currentPlayer
}
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = deriveactivePlayer(gameTurn)

  const handleOnSelect = (rowIndex,colIndex) => {
    setGameTurn((prevTurns) => {
      const currentPlayer = deriveactivePlayer(prevTurns)
      const updateTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updateTurns
    });
  };
  console.log(gameTurn)
  useEffect(() => {
    console.log("activePlayer updated:", activePlayer);
  }, [activePlayer]);
  return (
    <div>
      <Navbar />
      <Main OnSelectPlayer={handleOnSelect}  turns={gameTurn} ActivePlayer={activePlayer} />
      <Log turns = {gameTurn}/>
    </div>
  );
}

export default App;
