import React, { useState } from "react";

const Player = ({ player, symbol,isActive }) => {
  const [playerName, setPlayerName] = useState(player);
  const [isEditing, setisEditing] = useState(false);

  const handleOnClick = () => {
    setisEditing((editing) => !editing);
  };

  const handleOnChange = (e) => {
    setPlayerName(e.target.value);
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      setisEditing(false);
    }
  };
  return (
    <li className="flex flex-col sm:flex-row md:flex-none gap-2 items-start sm:items-center">
      <span className={`flex gap-4 flex-wrap items-center ${isActive ? "border-2 rounded-lg border-pink-400 px-4 py-2":""}`}>
        {isEditing ? (
          <input
            type="text"
            // defaultValue={player}
            className="bg-gray-400 px-3 py-1 w-full sm:w-32  md:w-[90px] mr-2  md:mr-0 lg:mr-2 max-w-[150px] focus:outline-none rounded-md "
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
        className="primary-color  px-3 py-1 rounded-md text-sm w-[80%]  md:w-20 lg:w-28  sm:w-24"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
