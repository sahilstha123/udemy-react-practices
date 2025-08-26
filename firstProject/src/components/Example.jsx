import React from "react";
import { EXAMPLES } from "../../data";
import Tabbutton from "./Tabbutton";
import CodeBlock from "./CodeBlock";
const Example = ({handleOnclick, selectTopic}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-purple-500 mb-4 ">Example</h2>
      <menu className="flex  gap-1">
        <Tabbutton
          onCLick={() => handleOnclick("components")}
          isSelected={selectTopic === "components"}
        >
          Components
        </Tabbutton>
        <Tabbutton
          onCLick={() => handleOnclick("JSX")}
          isSelected={selectTopic === "JSX"}
        >
          JSX
        </Tabbutton>
        <Tabbutton
          onCLick={() => handleOnclick("Props")}
          isSelected={selectTopic === "Props"}
        >
          Props
        </Tabbutton>
        <Tabbutton
          onCLick={() => handleOnclick("State")}
          isSelected={selectTopic === "State"}
        >
          State
        </Tabbutton>
      </menu>
      {/* {Object.keys(EXAMPLES).map((key) => {
              if (key === selectTopic) {
                return (
                  <div
                    key={key}
                    className="bg-purple-950 w-full max-w-[750px] md:max-w-5xl rounded-md p-4 mt-3 text-gray-300"
                  >
                    <h3 className="font-bold text-xl">{EXAMPLES[key].title}</h3>
                    <p className="font-light">{EXAMPLES[key].description}</p>
                    <CodeBlock code={EXAMPLES[key].code} />
                  </div>
                );
              }
              return null;
            })} */}
      {selectTopic ? (
        <div className="bg-purple-950 w-full max-w-[750px] md:max-w-5xl rounded-md p-4 mt-3 text-gray-300">
          <h3 className="font-bold text-xl">{EXAMPLES[selectTopic].title}</h3>
          <p className="font-light">{EXAMPLES[selectTopic].description}</p>
          <CodeBlock code={EXAMPLES[selectTopic].code} />
        </div>
      ) : (
        <p className="mt-4 text-red-600 font-sans">Please Select a Topic</p>
      )}
    </>
  );
};

export default Example;
