import React from "react";

const ResultModal = ({ results, timeChanger }) => {
  return (
    <dialog open className="p-4 w-9/12 md:w-4/12 md:p-10 rounded-lg dialog text-left bg-blue-200">
      <h2 className="text-4xl font-bold font-mono ">You {results} lost</h2>
      <p className="text-xl">
        The target Time was <strong className="text-green-700">{timeChanger}</strong>
      </p>
      <p className="text-xl">
        You stopped the timer with <strong className="text-green-700"> X second left</strong>
      </p>
      <form method="dialog" className="text-right mt-4">
        <button className="bg-green-600 px-2 py-1 rounded-md text-white cursor-pointer hover:bg-green-700 hover:scale-105 transition-transform duration-300">
          Close
        </button>
      </form>
    </dialog>
  );
};

export default ResultModal;
