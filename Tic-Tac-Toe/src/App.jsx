import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);

  const handleOnSelect = (rowIndex,colIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
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
      <Main OnSelectPlayer={handleOnSelect}  turns={gameTurn} />
      <Log />
    </div>
  );
}

export default App;
