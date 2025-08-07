import React, { useState } from 'react'

function Product({productValue}) {

  const [a,b] = useState(false);
  return (
    <div className='text-gray-950 font-bold'>
      <button onClick={()=>{b(!a)}} className={`${a=== false ? "text-red-600" : "text-green-600"}`}>{a === false ? "Flase" : "True"}</button>
    </div>
  )
}

export default Product