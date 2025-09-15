// Basic controlled form

import React, { useState } from "react";

const Forms1 = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Name:{" "}
        <input
          type="text"
          value={name}              // controlled by state
          onChange={(e) => setName(e.target.value)} // update state
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms1;
