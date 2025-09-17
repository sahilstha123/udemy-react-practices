import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(({ results, timeChanger }, ref) => {
  const dialogRef = useRef();

  // Expose open/close methods to parent
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(),
    close: () => dialogRef.current.close(),
  }));

  return (
    <dialog
      ref={dialogRef} // attach internal ref here
      className="p-4 w-9/12 md:w-4/12 md:p-10 rounded-lg dialog text-left bg-blue-200"
    >
      <h2 className="text-4xl font-bold font-mono">You {results} lost</h2>
      <p className="text-xl">
        The target Time was{" "}
        <strong className="text-green-700">{timeChanger}</strong>
      </p>
      <p className="text-xl">
        You stopped the timer with{" "}
        <strong className="text-green-700">X second left</strong>
      </p>
      <p className="text-right">
        <button
          className="bg-green-600 px-2 py-1 rounded-md text-white cursor-pointer hover:bg-green-700 mt-4 hover:scale-105 transition-transform duration-300"
          onClick={() => ref.current.close()} // call close via ref
        >
          Close
        </button>
      </p>
    </dialog>
  );
});

export default ResultModal;
