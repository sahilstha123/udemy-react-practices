import React, { useRef, useState } from "react";

const Hero = () => {
  const playerName = useRef();
  const [name, setName] = useState("");
  // const [submittedName, setSubmittedName] = useState("");

  // const handleOnchange = (e) => {
  //   setName(e.target.value);
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setSubmittedName(name);
    setName(playerName.current.value);
    // setName("");
  };

  return (
<div className="text-center ">      <h1 className="font-bold text-2xl sm:text-3xl">
        The <span className="text-sky-500">Almost</span> Final Countdown
      </h1>
      <p className="my-2 text-sm sm:text-base">
        Stop the timer once you estimate that time is (Almost) up
      </p>

      <h5 className="text-green-700 font-bold text-lg sm:text-xl">
        Welcome {name?.trim() || "Unknown entity"}
      </h5>

      <form onSubmit={handleOnSubmit}>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            name="name"
            // value={name}
            ref={playerName}
            placeholder="Enter your name"
            className="w-1/2 sm:w-2/3 py-2 px-2 border border-r-0 border-green-700 focus:outline-none focus:ring-0 rounded-l-md text-gray-300 text-sm sm:text-base"
            // onChange={handleOnchange}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 border border-green-700 cursor-pointer text-white rounded-r-md text-sm sm:text-base"
          >
            Set Name
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
