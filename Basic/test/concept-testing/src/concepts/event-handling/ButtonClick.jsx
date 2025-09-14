// Event Handling: working with user inputs

import React, { useState } from 'react'

const ButtonClick = () => {
  const [message, setMessage] = useState("Hello!");
  const handleClick = ()=>{
    setMessage("You clicked on button");
  }
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleClick}>Click Me</button>

    </div>
  )
}

export default ButtonClick;