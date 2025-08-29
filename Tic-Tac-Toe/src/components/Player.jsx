import React from "react";

const Player = ({player, symbol}) => {
  return (
    <>
      <li className="flex gap-2">
        <span className="flex gap-7">
          <span>{player}</span>
          <span>{symbol}</span>
        </span>
        <button>Edit</button>
      </li>
    </>
  );
};

export default Player;
