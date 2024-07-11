import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./assets/components/Card.jsx" 

function App() {
  let mydata = {
    name:"Mahesh patil",
    age:20,
    grade:"A",
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className="bg-green-200 text-black rounded-xl p-1 mb-2" >Profiles</h1>
      {/* passing objects to card */}
      {/* props passing */}
      <Card username="Maheshkawhale" btntext="click me"/>
      <div className="mb-2"></div>
      <Card username="hanumankawhale"/>

    </>
  );
}

export default App;
