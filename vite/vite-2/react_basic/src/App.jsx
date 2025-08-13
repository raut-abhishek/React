import React, { useState } from "react";
function App(){
  var [a, setA] = useState("abhishek01")
  const age = 23;
  const user = "Abhishek"
  const changeUsername = ()=>{
      setA(`abhishek${Math.floor(Math.random()*1000)}`);
  }
  return (
  <>
  <h1>Hello {user}</h1>
  <h2> Your username- {a}</h2>
  <button onClick={changeUsername}>Change username</button>
  </>)
}

export default App;