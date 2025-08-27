import React from "react";

const Main = () => {
  return (
    <main>
      <div className="flex justify-center mt-15">
        <div className="bg-gray-700 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 text-white p-10 rounded-md">
          <ol className="flex justify-between">
            <li className="flex gap-2">
              <span>Player 1</span>
              <span>X</span>
            </li>
            <li className="flex gap-2">
              <span>Player 2</span>
              <span>O</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Main;
