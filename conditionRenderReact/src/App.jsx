import { useState } from 'react'
import './App.css'
// Condition rendering 
function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <div>
        {show ? <h2>Hello Mahesh</h2> : <h2>Sorry</h2>}
        {/* {show && <h2>Hello Mahesh</h2>} */}
        <button onClick={()=>{
          setShow(!show)
        }}>ShowBtn</button>
      </div>
    </>
  )
}

export default App
