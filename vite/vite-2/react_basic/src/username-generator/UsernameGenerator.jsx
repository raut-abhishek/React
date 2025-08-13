import React, { useState } from "react";
import './style.css';

function App(){
  const [a, setA] = useState("abhishek01")
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