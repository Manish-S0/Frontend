import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/manish-S0').then((res)=>res.json())
    .then(data=>setData(data))
  },[])
  return (
    <div className='text-center bg-gray-600 p-3 text-3xl text-white'>Github followers:{data.followers}
    <img src={data.avatar_url} alt='profile' width={300} />
    </div>
  )
}

export default Github