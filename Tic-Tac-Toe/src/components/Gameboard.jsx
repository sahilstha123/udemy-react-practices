import React from "react";

const initialGameboard = [
  ["sahil", "sahil", "sahil"],
  ["sahil", "sahil", "sahil"],
  ["sahil", "sahil", "sahil"],
];

const Gameboard = () => {
  return (
    <ol className="flex flex-col items-center gap-2 m-9">
      {initialGameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-2">
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
                  "
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
