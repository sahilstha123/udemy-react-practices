import React, { useState } from "react";
import Player from "./Player";
import Gameboard from "./Gameboard";
import GameOver from "./GameOver";

const Main = ({ActivePlayer, OnSelectPlayer, gameboard,winner, draw,rematch, onChangeName,playername}) => {
  
  return (
    <main className="relative">
      <div className="flex justify-center mt-15">
        <div className="bg-gray-700 w-11/12 sm:w-8/12 lg:w-5/12 text-white p-10 rounded-md shadow-2xl">
          <ol className="flex justify-between gap-2">
            
           <Player player={playername.X} symbol = "X" isActive = {ActivePlayer === "X"} onChangeName={onChangeName}/>
           <Player player={playername.O} symbol = "0" isActive = {ActivePlayer === "O"} onChangeName={onChangeName}/>
          </ol>
          <Gameboard  OnSelectPlayer={OnSelectPlayer} gameboard = {gameboard}  />
        </div>
      </div>
      {(winner || draw) && <GameOver winner={winner} rematch={rematch}/>}
    </main>
  );
};

export default Main;
