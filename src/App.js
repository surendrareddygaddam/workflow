import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  
  return (
    <div>
      <h1>Git main branch</h1>
      <h2>Hello some changes has been added to the git hub branch Added</h2>
      <h3>Added by the git repository</h3>
      {JSON.stringify(data)}
    </div>
  )
}

export default App
