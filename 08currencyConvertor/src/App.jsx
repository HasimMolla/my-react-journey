import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-orange-500 text-3xl p-4 text-center'>Currency Convertor App</h1>
    </>
  )
}

export default App
