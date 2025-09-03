// import React, { useState } from "react";



const Gameboard = ({ OnSelectPlayer, gameboard }) => {
 
  // const [gameBoard, setGameBoard] = useState(initialGameboard);

  // const handleOnClick = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameboard) => {
  //     const updatedGameboard = prevGameboard.map(innerArry => [...innerArry]);
  //     updatedGameboard[rowIndex][colIndex] = ActivePlayer;
  //     console.log(updatedGameboard);
  //     return updatedGameboard;
  //   });
  //   OnSelectPlayer()
  // };

  return (
    <ol className="flex flex-col items-center gap-4 m-9">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-4">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="
                    primary-color text-white font-semibold
                    w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                    flex items-center justify-center
                    rounded
                    transition-transform hover:scale-105
                    cursor-pointer
                    text-4xl font-serif
                  "
                  onClick={() => OnSelectPlayer(rowIndex, colIndex)}
                  disabled = {playerSymbol!==null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboard;
