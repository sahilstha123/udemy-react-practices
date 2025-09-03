import React, { useState } from "react";
import Player from "./Player";
import Gameboard from "./Gameboard";

const Main = ({ActivePlayer, OnSelectPlayer, gameboard,winnerSymbol}) => {
  
  return (
    <main>
      <div className="flex justify-center mt-15">
        <div className="bg-gray-700 w-11/12 sm:w-8/12 lg:w-5/12 text-white p-10 rounded-md shadow-2xl">
          <ol className="flex justify-between gap-2">
            
           <Player player="player 1" symbol = "X" isActive = {ActivePlayer === "X"}/>
           <Player player="player 2" symbol = "0" isActive = {ActivePlayer === "O"}/>
          </ol>
          {winnerSymbol && <p>You won {winnerSymbol}!</p>}
          <Gameboard  OnSelectPlayer={OnSelectPlayer} gameboard = {gameboard} />
        </div>
      </div>
    </main>
  );
};

export default Main;
