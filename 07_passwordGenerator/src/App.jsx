import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength]=useState(8)
  const [numbersAllowed, setNumbersAllowed]=useState(false)
  const [charactersAllowed, setCharactersAllowed]=useState(false)
  const [Password, setPassword]=useState('')

  const passwordref=useRef(null)



  const generatePassword=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numbersAllowed) str+='0123456789'
    if (charactersAllowed) str+='!@#$%^&*()_+'

    for (let i=0;i<length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length+1))
    }
    setPassword(pass)

  },[length,numbersAllowed,charactersAllowed])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    generatePassword()
  },[length,numbersAllowed,charactersAllowed,generatePassword])

  return (
    <>
      <div className=' w-full max-w-md mx-auto rounded-lg p-4 text-orange-500 bg-gray-800'>

        <h1 className='text-white text-center mb-2'> Password Generator</h1>
        <div className=' flex flex-col gap-4'>
          <input type="text" value={Password} className='p-2 rounded-lg bg-gray-700' placeholder='password' readOnly 
          ref={passwordref}  />

          <button className='bg-blue-500 p-2 rounded-lg text-white' onClick={copyPasswordToClipboard}
          onMouseOver={()=>{}}>copy</button>
        </div>
        
      
      <div className='flex gap-x-2'>
        < div className='flex items-center gap-x-1'>
          <input type="range"min={6} max={25}value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/><label htmlFor="">length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" checked={numbersAllowed} onChange={(e)=>{setNumbersAllowed((prev)=>!prev)}} />
        <label htmlFor="">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'><input type="checkbox" checked={charactersAllowed} onChange={(e)=>{setCharactersAllowed((prev)=>!prev)}} /><label htmlFor="">Characters</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
