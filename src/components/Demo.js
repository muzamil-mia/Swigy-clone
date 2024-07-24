import React, { useMemo } from "react";
import { useState } from "react";

import { findNthPrime } from "../utils/NthPrime";

//demonstrating useMemo hook
function Demo() {
  const [text, setText] = useState(0);
  const [isDarkTheme, setDarkTheme] = useState(true);

  const handleDarkTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  //calculating nthPrime a very havey operation
  // const prime = () => {
  //   console.log("calculating prime number");
  //   return findNthPrime(text);
  // };

  //now this prime variable will have memoized value of cache
  //dependency array is for if we dont want to memoize it
  const prime = useMemo(() => findNthPrime(text),[text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " + (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <button
        className="border border-2 p-2 m-2 rounded-lg"
        onClick={handleDarkTheme}
      >
        Dark
      </button>
      <div>
        <input
          type="number"
          className={"border border-black w-72 p-2" + (isDarkTheme ?  "text-black" : "text-white")}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="font-bold">nth prime is : {prime}</h1>
      </div>
    </div>
  );
}

export default Demo;
