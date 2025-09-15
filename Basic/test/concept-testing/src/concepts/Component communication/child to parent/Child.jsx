// Child to Parent Communication

import React from "react";

const Child = ({ sendData }) => {
  return (
    <button onClick={() => sendData("Hello from Child!")}>
      Send to Parent
    </button>
  );
};

export default Child;