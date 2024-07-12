import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';


function App() {
  const [cards, setCards] = useState([]);

  const fetchApi = async function(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setCards(data);

  }

  useEffect(() => {
    fetchApi()
  }, [])
  

  return (
    <>
    <Navbar/>
    {/* This Method is used to render List items */}
      <div className='main'>
        {cards.map((card)=>{
          return <div key={card.id} className='card'>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App
