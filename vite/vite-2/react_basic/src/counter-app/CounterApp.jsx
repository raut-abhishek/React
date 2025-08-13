import React, { useState } from "react";
import './style.css';

function CounterApp(){
    const [count, setCount] = useState(0);
    const increaseCount = ()=>{
        setCount(count+1);
    }
    const decreaseCount = ()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    return(
    <>
    <div className="h1-container">
        <h1 id="hero">Count = </h1>
        <h1 id="count">{count}</h1>
    </div>
    <div className="button-container">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
    </>)
}
export default CounterApp;