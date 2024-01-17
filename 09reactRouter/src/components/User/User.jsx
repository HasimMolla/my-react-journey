import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  
    const {userid} = useParams()
  return (
      <div className='px-4 py-2 font-bold text-2xl bg-red-700 text-white text-center'>User: {userid}</div>
  )
}

export default User