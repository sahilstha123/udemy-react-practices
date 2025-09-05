import React from "react";
import logo from "../assets/game-logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="mt-10">
        <div className="flex justify-center">
          <img src={logo} alt="logo" width="100px" />
        </div>
          <h1 className="text-center mt-5 font-bold text-5xl font-mono">Tic-Tac-Toe</h1>
      </nav>
    </>
  );
};

export default Navbar;
