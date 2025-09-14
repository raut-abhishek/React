// List Rendering with .map()

import React from 'react'

const RenderNameList = () => {
    const list = ["Abhishek", "Shubham", "Mayur", "Swapnil", "Adinath"];
  return (
    <div>
        {list.map((name, index)=>(
            <h1 key={index}>{name}</h1>
        ))}
    </div>
  )
}

export default RenderNameList;