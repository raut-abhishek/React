// Child to Parent Communication

import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Data from Child: {childData}</h1>
      <Child sendData={handleChildData} />
    </div>
  );
};

export default Parent;