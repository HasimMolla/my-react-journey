import { useState } from 'react'
import './App.css'

// problem is UI updation , this is control by React
// React reacts on the updation of variables
// that's why it was named React , it's a very reactive library
// it reacts everwhere when any thing update
//React and UI syncing
// every hooks a individual hooks 

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    setCounter(counter + 1)
    if (counter === 20) {
      setCounter(20)
    }
    console.log("clicked", counter);


  }
  const removeValue = () => {
    setCounter(counter - 1)
    if (counter === 0) {
      setCounter(0)
    }
    console.log("clicked", counter);

  }

  return (
    <>
      <h1>Click the button to update counter value</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
