// performance optimization using useMemo- Memoizes the result of a calculation and Runs only when dependencies change.

import React, { useMemo, useState } from "react";

const UseMemo = ({ num }) => {
  const result = useMemo(() => {
    console.log("Calculating...");
    return num * 1000; // imagine this is heavy work
  }, [num]);

  return <h2>Result: {result}</h2>;
};

export default UseMemo;
