// passing data to components
import React from 'react'

const User = ({name, age, email}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Email: {email}</h1>
    </div>
  )
}

export default User;