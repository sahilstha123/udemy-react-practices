import React from "react";
import InvestmentLogo from "../assets/InvestmentLogo.png";
const Navbar = () => {
  return (
    <nav className="flex flex-col items-center gap-4 justify-center ">
      <div className="w-40 h-40 md:w-44 md:h-44 mt-6">
        <img
          src={InvestmentLogo}
          alt="Investment Logo"
          className="w-full h-full object-cover "
        />
      </div>
      <h2 className="font-mono text-2xl text-[var(--primary-color)] ">Investment Calculator</h2>
    </nav>
  );
};

export default Navbar;
