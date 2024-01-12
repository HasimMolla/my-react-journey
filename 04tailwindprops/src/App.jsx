import './App.css'
import Card from './components/Card'
function App() {
  // let myObj = {
  //   name: "chai",
  //   age:23
  // }
  // let myArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg font-bold text-lg mb-4'>Tailwind test</h1>
      <div className='flex gap-10 mt-10'>
        <Card username="chaiaurcode" btnText="click me" />
        <Card username="Hasim" btnText="visit me" />
      </div>
    </>
  )
}

export default App
