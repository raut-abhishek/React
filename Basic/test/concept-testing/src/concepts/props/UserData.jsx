import React from 'react';
import User from './User';

function UserData() {
    let userObject = {
        name: "Abhishek",
        age: 23,
        email:"abhishek@test.com",
        gender:"Male",
        city:"Pune"
    }
  return (
    <div>
        <User user={userObject}/>
    </div>
  )
}

export default UserData;