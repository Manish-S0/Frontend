import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)// since same work is repeated 3 times the fibre takes it as same batch and only one call is made
    setCount((prev)=>prev+1)//setCount takes a callback func which return new value after each updation
    setCount((prev)=>prev+1)
  }
  const subValue=()=>{
    if (count>0){
      setCount(count-1)
    }
    
  }

  return (
    <>
      <h1>useState</h1>
      <h2>counter Value: {count}</h2>
      <button onClick={addValue}>Add value:{count}</button>
      <button onClick={subValue}>Sub value:{count}</button>

    </>
  )
}

export default App
