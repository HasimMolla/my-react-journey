import React, { useState, useContext } from 'react'
import UserContext from '../context/Usercontext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

 const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }
  return (
    <div className='border border-gray-400 p-4 m-6 rounded-xl'>
      <h2 className='text-xl font-bold'>Login</h2>
      <input className='m-4 px-4 py-2 rounded-lg border border-gray-400 outline-none' type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input className='m-4 px-4 py-2 rounded-lg border border-gray-400 outline-none' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
      <br />
      <button className='border-none' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login