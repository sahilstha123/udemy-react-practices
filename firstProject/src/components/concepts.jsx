import React from "react";
import Coreconcept from "./Coreconcept";
import { CORE_CONCEPTS } from "../../data";

const Concepts = () => {
  return (
    <div className="bg-black p-6 rounded-lg  w-5xl m-4 ">
      <h2 className=" text-2xl font-semibold text-purple-500 mb-4 text-center">
        Core Concepts
      </h2>
      <div className="flex gap-3 flex-wrap flex-grow">
        {/* <Coreconcept {...CORE_CONCEPTS[0]} /> */}
        {CORE_CONCEPTS.map((item, index) => {
          return <Coreconcept key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Concepts;
