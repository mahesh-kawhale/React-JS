import { useState } from "react";

function App() {

  const [color, setColor] = useState("white");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="flex justify-center bottom-12 fixed inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 bg-white shadow-xl
          px-2 py-2 rounded-md">
            <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" 
            style={{backgroundColor:"red"}}>red</button>

            <button onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" 
            style={{backgroundColor:"green"}}>green</button>

            <button onClick={()=>{setColor("yellow")}} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" 
            style={{backgroundColor:"yellow"}}>yellow</button>

            <button onClick={()=>{setColor("blue")}} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" 
            style={{backgroundColor:"blue"}}>blue</button>

            <button onClick={()=>{setColor("pink")}} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" 
            style={{backgroundColor:"pink"}}>pink</button>

            <button onClick={()=>{setColor("black")}} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" 
            style={{backgroundColor:"black"}}>black</button>

            <button onClick={()=>{setColor("violet")}} className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg" 
            style={{backgroundColor:"violet"}}>violet</button>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default App
