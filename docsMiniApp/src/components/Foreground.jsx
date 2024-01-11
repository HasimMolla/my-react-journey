// import React, { useState } from 'react'
import { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null)
  return (
    <>
      <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen p-5 flex flex-wrap gap-5 '>
        <Card  reference={ref}/>
        <Card  reference={ref}/>
        <Card  reference={ref}/>
      </div>
    </>
  )
}

export default Foreground