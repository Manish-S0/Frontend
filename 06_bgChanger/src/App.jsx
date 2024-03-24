import { useState } from 'react'



function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor:color}}>
        <h1 className='text-center text-white text-3xl'>Background Changer</h1>
        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white p-1 rounded-2xl'> 
            <button onClick={() => setColor ('red')} className=' rounded-md text-white m-1 pl-1 pr-1'
            style={{backgroundColor:'red'}}>Red</button>
            <button onClick={() => setColor('black')} className=' rounded-md text-white m-1 pl-1 pr-1'
            style={{backgroundColor:'black'}}>black</button>
            <button onClick={() => setColor('purple')} className= 'rounded-md text-white m-1 pl-1 pr-1'
            style={{backgroundColor:'purple'}}>purple</button>
            <button onClick={() => setColor('blue')} className='rounded-md text-white m-1 pl-1 pr-1'
            style={{backgroundColor:'blue'}}>blue</button>
            <button onClick={() => setColor('yellow')} className=' rounded-md text-white m-1 pl-1 pr-1'
            style={{backgroundColor:'yellow'}}>yellow</button>
            <button onClick={() => setColor('green')} className=' rounded-md text-white m-1 pl-1 pr-1'
            style={{backgroundColor:'green'}}>green</button>
            <button onClick={() => setColor('pink')} className=' rounded-md text-white m-1 pl-1 pr-1'
            style={{backgroundColor:'hotpink'}}>pink</button>
            <button onClick={() => setColor('brown')} className=' rounded-md text-white m-1 pl-1 pr-1'
            style={{backgroundColor:'brown'}}>brown</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
