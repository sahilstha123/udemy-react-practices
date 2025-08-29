import React, { useState } from "react";

const Player = ({ player, symbol }) => {
  const [playerName, setPlayerName] = useState(player);
  const [isEditing, setisEditing] = useState(false);

  const handleOnClick = () => {
    setisEditing((editing) => !editing);
  };

  const handleOnChange = (e) => {
    setPlayerName(e.target.value);
  };

  const keyDown = (e)=>{
    if(e.key === "Enter")
    {
        setisEditing(false)
    }
  }
  return (
    <li className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
      <span className="flex gap-4 flex-wrap items-center">
        {isEditing ? (
          <input
            type="text"
            // defaultValue={player}
            className="bg-gray-400 px-3 py-1 w-full sm:w-32 max-w-[150px] focus:outline-none rounded-md mr-4"
            value={playerName}
            onChange={handleOnChange}
            onKeyDown={keyDown}
          />
        ) : (
          <span>{playerName}</span>
        )}

        <span className="flex items-center">{symbol}</span>
      </span>

      <button
        onClick={handleOnClick}
        className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm w-[80%]  sm:w-24"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
