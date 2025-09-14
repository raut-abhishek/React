// Event Handling- Handling Text Input

import React, { useState } from 'react'

const HandlingTextInput = () => {
    const [input, setinput] = useState("");
    const userInput = (data)=>{
        setinput(data.target.value);
    }
  return (
    <div>
        <input type="text" placeholder='Type something' value={input} onChange={userInput}/>
        <p>You typed : {input}</p>

    </div>
  )
}

export default HandlingTextInput