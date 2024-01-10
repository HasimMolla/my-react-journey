import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [noAllowed, setnoAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (noAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, noAllowed, charAllowed, setPassword])
  //#edeef0


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 49);
    window.navigator.clipboard.writeText(password)
  }, [password])

  //useEffect hook
  useEffect(() => { passwordGenerator() }, [length, noAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto rounded-lg text-orange-500 shadow-lg p-4  my-8 bg-gray-700'>
        <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex rounded-lg shadow-md  overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none text-lg w-full py-2 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-500 font-bold text-white px-4 py-0.5 shrink-0 hover:bg-blue-800 hover:text-gray-300 '>copy</button>
        </div>
        <div className='flex text-md mt-5 gap-x-5'>
          <div className='flex item-center gap-x-1'>
            <input type="range" id='range' min={8} max={50} value={length} className='curser-pointer' onChange={(e) => { setlength(e.target.value) }} />
            <label htmlFor="range">Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={noAllowed} id='noInput' onChange={() => {
              setnoAllowed((prev) => !prev)
            }} />
            <label htmlFor="noInput">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {
              setcharAllowed((prev) => !prev)
            }} />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
