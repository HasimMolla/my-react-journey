import { useState, useRef } from 'react'
import artistImage from '../src/assets/Artists_main.png'
import { motion, useScroll, useTransform } from "framer-motion"

import './App.css'

function App() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: container,
      offset: ['start start', 'end end']
    }
  );
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const transformer = useTransform(scrollYProgress, [0, 1], ["0px", "50vh"])
  return (
    <>
      <div ref={container} className='container relative h-[200vh] w-screen'>
        <div className='sticky top-0 z-[20] h-[100vh] w-full bg-orange-500'>
          <div className='w-full h-full absolute top-0 flex flex-col items-center justify-center'>
            <motion.div style={{ translateY: transformer }} className='text-[#F5F1E9] uppercase text-[120px] font-[700] tracking-[-2px] 2xl:tracking-[-7.5px] 2xl:text-[189px]'>ARTIST</motion.div>
            <div className='w-full h-full flex justify-between items-center'>
              <div className="w-[22%]  flex flex-col justify-start items-center gap-[10px]">
                <div className="text-[13px] text-[#F5F1E9] 2xl:text-[20px] font-[400]">
                  We are an independent museum with a wide range of inspiring hiphop art – located in Amsterdam (the Netherlands) and Barcelona (Spain). Damien Hirst, KAWS, Jeff Koons, Yayoi Kusama, Andy Warhol, Studio Irma, and so many more! We offer visitors an unparalleled collection of art to reflect on modern society.
                </div>
                <div className="text-[13px] text-[#F5F1E9] 2xl:text-[20px] font-[400]">
                  Black Museum has made its home in the historic Villa Alsberg on Museumplein (Honthorststraat 20, 1071 DE Amsterdam, NL) and the former Palacio Cervelló (c / Montcada 25, 08003 Barcelona, SP). Starting Summer 2024, Moco London will open its doors across the historic Marble Arch.
                </div>

              </div>
              <motion.div style={{ scale: scale4 }} className='w-[25vw] h-[25vh] relative '>
                <img className='object-cover object-center' src={artistImage} alt="" />

              </motion.div>
              <div className="w-[22%]  flex flex-col justify-start items-center gap-[10px]">
                <div className="text-[13px] text-[#F5F1E9] 2xl:text-[20px] font-[400]">
                  We are an independent museum with a wide range of inspiring hiphop art – located in Amsterdam (the Netherlands) and Barcelona (Spain). Damien Hirst, KAWS, Jeff Koons, Yayoi Kusama, Andy Warhol, Studio Irma, and so many more! We offer visitors an unparalleled collection of art to reflect on modern society.
                </div>

                <div className="text-[13px] text-[#F5F1E9] 2xl:text-[20px] font-[400]">
                  Black Museum has made its home in the historic Villa Alsberg on Museumplein (Honthorststraat 20, 1071 DE Amsterdam, NL) and the former Palacio Cervelló (c / Montcada 25, 08003 Barcelona, SP). Starting Summer 2024, Moco London will open its doors across the historic Marble Arch.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className='relative z-[99] h-[100vh] w-screen bg-blue-500'>

      </div>

    </>
  )
}

export default App
