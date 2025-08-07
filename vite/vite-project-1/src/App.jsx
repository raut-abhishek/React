import { useState } from "react";
import Product from "./Product";

export default function App() {
  var [a,b] = useState(10)
  return (
    <div className="h-screen bg-green-500 text-white flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Welcome to React 🎉</h1>
      <button onClick={()=>{b(a+10)}} className="px-6 py-2 bg-blue-600 hover:bg-blue-800 rounded-md">
        Click Me
      </button>
      <Product productValue= "100" />
      <h1>{a}</h1>
    </div>
  );
}
