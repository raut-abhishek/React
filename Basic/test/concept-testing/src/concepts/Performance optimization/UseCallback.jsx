// performance optimization using useCallback - Memoizes a function so it doesn’t get re-created on every render.

import React, { useState, useCallback } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <Child onClick={increment} />
    </div>
  );
};

export default UseCallback;
