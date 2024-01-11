// import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
function Card() {
  return (
    <>
      <div className='relative overflow-hidden w-60 h-72 rounded-[35px] bg-zinc-900 text-white p-6'>
        <FaRegFileAlt />
        <p className="font-base mt-[20px] leading-tight text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex item-center justify-between px-8 py-3 mb-3 ">
            <h5 className="text-sm">.4mb</h5>
            <span className="w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center">
              <LuDownload size="0.8rem" />
            </span>

          </div>
          <div className="tag w-full py-3 bg-green-600 flex items-center justify-center hover:cursor-pointer">
            <h3 className="text-sm font-semibold ">Download Now</h3>

          </div>
        </div>
      </div>
    </>
  )
}

export default Card