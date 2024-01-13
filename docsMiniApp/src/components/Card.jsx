/* eslint-disable react/prop-types */
// import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
function Card({ data, reference }) {

  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 4 }} className='relative overflow-hidden w-60 h-72 rounded-[35px] bg-zinc-900 text-white p-6 hover:cursor-grab'>
        <FaRegFileAlt />
        <p className="font-base mt-[20px] leading-tight text-sm">{ data.decs}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex item-center justify-between px-8 py-3 mb-3 ">
            <h5 className="text-sm">{data.filesize}</h5>
            <span className="w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center">
              {data.close ? <IoClose/> : <LuDownload size="0.8rem" /> }            
            </span>
          </div>
          {
            data.tag.isOpen && (
              <div className="tag w-full py-3 bg-green-600 flex items-center justify-center hover:cursor-pointer">
                <h3 className="text-sm font-semibold ">Download now</h3>

              </div>
            ) 
          }
          
        </div>
      </motion.div>
    </>
  )
}

export default Card