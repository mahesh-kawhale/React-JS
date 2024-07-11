import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState(0)


  useEffect(()=>{
    alert("count changed");
    setcolor(color + 1);      
  },[count])


  return (
    <>
    {/* // When Navbar renderd useEffect hook get Triggred */}
    <Navbar color={color}/>  
      <div>
        Counter:{count}
        <button onClick={()=>{setCount(count+1)}}>Update</button>
      </div>
        
    </>
  )
}

export default App
