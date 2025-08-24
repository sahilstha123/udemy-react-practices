import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./CodeBlock.css"

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // hide after 1.5s
  };

  return (
    <div className="relative mt-2 group">
      <pre className="overflow-x-auto bg-gray-900 p-3 rounded text-sm">
        <code>{code}</code>
      </pre>

      <button
        onClick={handleCopy}
        className="absolute top-2 right-2  bg-purple-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer"
      >
        
        <FontAwesomeIcon icon={faCopy}  className="text-xl"/>
      </button>
      {/* Copied text */}
        {copied && (
          <span className=" text-xs font-semibold absolute top-2 right-17 px-4 py-1  text-black animate-bounce " id="talkbubble">
            Copied!
          </span>
        )}
    </div>
  );
};

export default CodeBlock;
