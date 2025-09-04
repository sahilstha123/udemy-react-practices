import React from "react";
// import "./App.css";

const GameOver = ({ winner }) => {
  return (
    <div className="absolute top-0 left-4 sm:left-20 md:left-32  lg:left-[300px]  xl:left-[444px] w-11/12 sm:w-8/12 lg:w-5/12 h-full flex items-center justify-center bg-cyan-900/90 text-white rounded-lg">
      <div>
        <h2 className=" font-serif text-5xl text-pink-400">Game Over</h2>
        {winner ?( <p className="text-center mt-2 text-2xl">You have won {winner}!</p>):
         (<p className="text-center mt-2 text-2xl">Its a draw</p>)
        }
        
        <div className="flex justify-center">
          <button className="border border-pink-400 mt-4 px-3 py-1 rounded-md hover:bg-pink-300 text-gray-300 hover:border-none  cursor-pointer hover:scale-105 transition duration-300">Rematch</button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
