import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let person = 'reem'
   const changeName = () =>{
      person ="ahmed"
   }

  return (
    <>
      

      <div className="card">
        <h1>My name is {person} </h1>
        <button onClick={changeName}>
          change name
        </button>
      </div>
        
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     
    </>
  )
}

export default App
