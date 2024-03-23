import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Template from './components/Template'


function App() {
  
  return (
    <>
      <h1 className='bg-green-400  text-white rounded-lg'>Hello World
      </h1>
      <Template username="cena" designation="developer"/>     
      <Template username="manis" designation="manager"/>
    </>
  )
}

export default App
