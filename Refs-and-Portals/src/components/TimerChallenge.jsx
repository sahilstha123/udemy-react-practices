import React, { useState } from "react";

const TimerChallenge = ({ challenges }) => {
  const [activeTimers, setActiveTimers] = useState(
    challenges.map(() => ({ timestarted:false, Expired: false }))
  );

  const handleOnStart = (index, targetTime) => {

    const StartTime = [...activeTimers]
    StartTime[index] = { timestarted:true, Expired: false }
    setActiveTimers(StartTime)
    setTimeout(() => {
      const updateTimers = [...activeTimers];
      updateTimers[index] ={ timestarted:false, Expired: true}
      setActiveTimers(updateTimers);
    }, targetTime * 1000);
  };
  return (
    <div className="mt-10 grid  gird-cols-1 md:grid-cols-2 gap-5 md:gap-10">
      {challenges.map((item, index) => (
        <div
          key={index}
          className="bg-sky-600 p-10  rounded-lg flex flex-col items-center justify-center text-center h-64"
        >
          <h1 className="font-bold text-3xl text-gray-900 mb-1">
            {item?.name}
          </h1>
          {activeTimers[index]?.Expired && <p>You lost</p>}

          <p className="border px-2 py-1 w-36 mb-8">
            {item?.targetTime}second{item?.targetTime > 1 ? "s" : ""}
          </p>
          <button
            className="bg-green-700 px-4 py-2 rounded-md  text-white mb-1 cursor-pointer hover:bg-green-800 transition"
            onClick={() => handleOnStart(index, item?.targetTime)}
          >
            {!activeTimers[index]?.timestarted?"start":"stop"} challenges
          </button>
          <p> {!activeTimers[index]?.timestarted?"timer inactive":"timer is running..."}</p>
        </div>
      ))}
    </div>
  );
};

export default TimerChallenge;
