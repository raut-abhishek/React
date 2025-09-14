// passing data to components
import React from 'react'

const User = ({user}) => {
  let data = Object.entries(user);
  return (
    <div>
        {data.map(([key, value])=>{
          return(
          <h1 key={key}>
            {key}: {value}
          </h1>
          )
        })}
    </div>
  )
}

export default User;