// import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  
    const {userid} = useParams()
  return (
      <div className='px-4 py-6 font-bold text-2xl bg-gray-500 text-white text-center'>User: {userid}</div>
  )
}

export default User