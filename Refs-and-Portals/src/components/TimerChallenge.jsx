import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ challenges }) => {
  // useRef to store the timer id (persistent across renders)
  const timer = useRef();
  const modalref = useRef();
 
  const [currentTargetTime, setCurrentTargetTime] = useState()
  const [activeTimers, setActiveTimers] = useState(
    challenges.map(() => ({ timestarted: false, Expired: false }))
  );

  const handleOnStart = (index, targetTime) => {
    setCurrentTargetTime(targetTime)
    // mark this challenge as started
    const StartTime = [...activeTimers];
    StartTime[index] = { timestarted: true, Expired: false };
    setActiveTimers(StartTime);

    // after targetTime seconds, mark as expired
    timer.current = setTimeout(() => {
      setActiveTimers((prevTimers) => {
        const newTimers = [...prevTimers];
        newTimers[index] = { timestarted: false, Expired: true };
        return newTimers;
      });

      modalref.current.open();
    }, targetTime * 1000);
  };

  /**
   * Stop the currently running timer
   */
  const handleOnStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <div className="mt-10 grid gird-cols-1 md:grid-cols-2 gap-5 md:gap-10">
      {challenges.map((item, index) => (
        <div
          key={index}
          className="bg-sky-600 p-10 rounded-lg flex flex-col items-center justify-center text-center h-64"
        >
          {/* Challenge title */}
          <h1 className="font-bold text-3xl text-gray-900 mb-1">
            {item?.name}
          </h1>

          {/* Show "You lost" if timer expired */}
          {activeTimers[index]?.Expired && <p>You lost</p>}

          <ResultModal ref={modalref} timeChanger={currentTargetTime} />

          {/* Challenge duration */}
          <p className="border px-2 py-1 w-36 mb-8">
            {item?.targetTime} second{item?.targetTime > 1 ? "s" : ""}
          </p>

          {/* Start/Stop button */}
          <button
            className="bg-green-700 px-4 py-2 rounded-md text-white mb-1 cursor-pointer hover:bg-green-800 transition"
            onClick={
              !activeTimers[index]?.timestarted
                ? () => handleOnStart(index, item?.targetTime)
                : () => handleOnStop(index)
            }
          >
            {!activeTimers[index]?.timestarted ? "start" : "stop"} challenges
          </button>

          {/* Timer status */}
          <p>
            {!activeTimers[index]?.timestarted
              ? "timer inactive"
              : "timer is running..."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TimerChallenge;
