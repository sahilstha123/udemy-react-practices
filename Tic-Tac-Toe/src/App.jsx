import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Log from "./components/Log";
import { WINNING_COMBINATION } from "./winning-combination";
import GameOver from "./components/GameOver";
import "./App.css";

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
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState({
    X: "player 1",
    O: "player 2",
  });

  // derive active player
  const activePlayer = deriveActivePlayer(gameTurns);

  // derive game board from turns
  const gameBoard = initialGameboard.map((inner)=>[...inner]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  useEffect(() => {
    let newWinner = null;
    for (const combination of WINNING_COMBINATION) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].col];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].col];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].col];

      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        console.log("you win");
        newWinner = player[firstSquareSymbol];
        break;
      }
    }
    setWinner(newWinner);
  }, [gameTurns]);

  const hasdraw = gameTurns.length === 9 && !winner;

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

  // rematch the game
  const handleRematch = () => {
    setGameTurns([]);
    setWinner(null);
  };
  // useEffect(() => {
  //   console.log("activePlayer updated:", activePlayer);
  // }, [activePlayer]);

  // get the player name
  const handleGetPlayerName = (symbol, newName) => {
    setPlayer((prevplayer) => {
      return {
        ...prevplayer,
        [symbol]: newName,
      };
    });
  };

  console.log(player)
  return (
    <div>
      <Navbar />
      <Main
        OnSelectPlayer={handleOnSelect}
        gameboard={gameBoard}
        ActivePlayer={activePlayer}
        winner={winner}
        draw={hasdraw}
        rematch={handleRematch}
        onChangeName = {handleGetPlayerName}
      />
      <Log turns={gameTurns} />
    </div>
  );
}

export default App;
