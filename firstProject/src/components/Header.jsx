import React, { useEffect, useState } from "react";
import reactLogo from "../assets/reactLogo.png";
const Header = () => {
  const content = ["Fundamental", "crucial", "core"];
  const [items, setItems] = useState("")
  useEffect(() => {
    const randomitem = content[Math.floor(Math.random()*content.length)]
    setItems(randomitem)
  }, []);

  return (
    <div >
      <header>
        <div className="flex justify-center">
          <img src={reactLogo} alt="" width="250px" height="150px" />
        </div>
        <div className="flex flex-col items-center flex-wrap md:flex-nowrap text-center px-3 ">
          <h1 className=" mb-3 font-bold text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  bg-clip-text text-transparent ">
            React Essentials
          </h1>
          <p className="text-purple-500 text-2xl md:text-3xl font-light">
          {items} React Concepts you will need for almost any app you are
            going to build
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
