"use client"
import React from 'react'

const page = () => {
  let marks = 80;
  const updateMarks =  function(){marks = 90}
  return (
    <>
      <div className="h-screen bg-gradient-to-br from-[#0A0D0D] via-[#2D4F4A] to-[#8DB1A4] flex flex-col justify-center items-center gap-4 text-white">
        <div className='font-bold text-3xl'>My total marks are {marks}</div>
        <button onClick={()=>{updateMarks}} className='bg-gray-600 px-5 py-2 rounded mt-5 text-white font-bold'>Update</button>
      </div>
    </>
  )  
} 

export default page