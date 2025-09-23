  // performance optimization using react.memo -only re-renders if props change
import React from "react";

const Child = ({ value }) => {
  console.log("Child rendered");
  return <h2>{value}</h2>;
};

export default React.memo(Child);
