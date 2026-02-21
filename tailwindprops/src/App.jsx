import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

    let myObj = { //can be passed into props as variable
    username: "akash",
    age: 22
    }

    let newArr = [1, 2, 3]  //can be passed into props as variable

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-3xl'>Tailwind Test</h1>
     <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  )
}

export default App
