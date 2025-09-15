// Parent to Child Communication

import React from "react";
import Child1 from "./Child1";

const Parent = () => {
  const message = "Hello from Parent!";
  return <Child1 text={message} />;
};

export default Parent;