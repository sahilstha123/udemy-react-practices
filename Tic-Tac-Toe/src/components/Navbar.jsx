import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="mt-6">
        <div className="flex justify-center">
          <img src="/game-logo.png" alt=""  width="100px"/>
        </div>
          <h1 className="text-center mt-3 font-bold text-5xl font-mono">Tic-Tac-Toe</h1>
      </nav>
    </>
  );
};

export default Navbar;
