// Conditional Rendering with State

import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [show, setShow] = useState(true);


  return (
    <div>
        
        <button onClick={()=>{ setShow(!show)}}>
            {show ? "Hide": "Show"}
        </button>
        {show && <h1>Hello Abhishek</h1>}
        
    </div>
  )
}

export default ConditionalRendering;