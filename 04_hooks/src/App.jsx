import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    setCount(count+1)
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
      <button onClick={addValue}>Add value</button>
      <button onClick={subValue}>Sub value</button>

    </>
  )
}

export default App
