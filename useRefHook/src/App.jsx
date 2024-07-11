import { useState,useRef } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(10)  //  first usecase: storing the value of a across the rendering of component
  const btnref = useRef()
  // let a = 10  not store the value acrross the rendering

  useEffect(() => {
    alert("rendering....")
    a.current = a.current + 1;
    btnref.current.style.backgroundColor = "red";   // second usecase : to refers a button
    console.log(a.current)

  })
  

  return (
    <>
      <div>
        <h2>Counter:{count}</h2>
        <button ref={btnref} onClick={()=>{setCount(count+1)}}>Click Me</button>
      </div>
      
    </>
  )
}

export default App
