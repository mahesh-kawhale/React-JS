import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10);

  function increment(){
    counter = counter + 1;
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    
    // console.log(counter)
  }

  function decrement(){
    counter = counter - 1;
    setCounter(counter)
    // console.log(counter)
  }

  return (
    <>
      <h2>Counter:{counter}</h2>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </>
  )
}

export default App
