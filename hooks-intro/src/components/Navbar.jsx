import React from 'react'
import { useEffect } from 'react';


// when this component get renders , useEffect get Triggred
const Navbar = ({color}) => {
    useEffect(() => {

        alert("Hello I am running on every render");
      
    }, [])

    useEffect(() => {

        alert("Hello I am running on color changed:");
      
    }, [color])


    
  return (
    <div>
      <h1>I am Navbar of color:{color}</h1>
    </div>
  )
}

export default Navbar
