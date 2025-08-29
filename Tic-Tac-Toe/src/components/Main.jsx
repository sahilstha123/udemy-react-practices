import React from "react";
import Player from "./Player";

const Main = () => {
  return (
    <main>
      <div className="flex justify-center mt-15">
        <div className="bg-gray-700 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 text-white p-10 rounded-md shadow-2xl">
          <ol className="flex justify-between">
            
           <Player player="player 1" symbol = "X"/>
           <Player player="player 2" symbol = "0"/>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Main;
