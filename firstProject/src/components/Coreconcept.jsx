import React from "react";

const Coreconcept = ({ image, title, description }) => {
  return (
    <div className="text-gray-300  bg-gray-900 p-3 flex-1 min-w-[200px] rounded-md hover:cursor-pointer hover:scale-105 transition duration-300">
      <img src={image} alt="figure" width="150px" className="mx-auto" />
      <h3 className="text-center font-semibold text-2xl">{title}</h3>
      <p className=" text-justify font-light">{description}</p>
    </div>
  );
};

export default Coreconcept;
