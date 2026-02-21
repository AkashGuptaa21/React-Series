import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(5)
  
  // let counter =5  //update ho skta hai , but UI me updation nhi dikhega iska 

  const addValue = () => {
    setCounter(counter+1)
  }

  const removeValue = ()=>{
    
     if(counter>0) setCounter(counter-1)
   
  }

  return (
     
    <>
    
      <h1>Chai aur React L-5</h1>
      <h2>Counter Value: {counter} </h2>

      <button 
       onClick={addValue}>Add Value{counter}</button>
      <br />
      <button
       onClick={removeValue}>Remove Value{counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
