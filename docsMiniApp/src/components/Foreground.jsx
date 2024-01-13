/* eslint-disable react/jsx-key */
// import React, { useState } from 'react'
import { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const data = [{
    decs: 'This is a mini docs webApps, In future i will add a form where user add their data.',
    filesize: '.4mb',
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: 'green' },
  }];
  const ref = useRef(null)
  return (
    <>
      <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen p-5 flex flex-wrap gap-5 '>
        {/* <Card  reference={ref} tagName="open now" />
        <Card  reference={ref} filesize=".8mb" />
        <Card reference={ref} filesize=".2mb"  content="This is a normal docs webApps but I will update day by day."/> */}
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
       
      </div>
    </>
  )
}

export default Foreground