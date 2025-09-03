import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Log from "./components/Log";
import { WINNING_COMBINATION } from "./winning-combination";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// helper function
const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  // derive active player
  const activePlayer = deriveActivePlayer(gameTurns);

  // derive game board from turns
  const gameBoard = initialGameboard.map((innerArray) => [...innerArray]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATION) {
  const firstSquareSymbol  = gameBoard[combination[0].row][combination[0].col];
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
  const thirdSquareSymbol  = gameBoard[combination[2].row][combination[2].col];

  if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
  {
    console.log("you win")
  }
  console.log("combination",combination);
  // console.log("---",firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol);
}


  const handleOnSelect = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  };

  useEffect(() => {
    console.log("activePlayer updated:", activePlayer);
  }, [activePlayer]);

  return (
    <div>
      <Navbar />
      <Main
        OnSelectPlayer={handleOnSelect}
        gameboard={gameBoard}
        ActivePlayer={activePlayer}
      />
      <Log turns={gameTurns} />
    </div>
  );
}

export default App;
