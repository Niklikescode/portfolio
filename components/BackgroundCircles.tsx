import React from 'react'
import { motion } from "framer-motion"
import dynamic from "next/dynamic";



type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial= {{ 
      opacity: 0,

    }}
    animate={{   
      scale: [1,2,2,3,1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], 
      borderRadius: ["20%", "20%", "50%", "80%", "20%"] 
    }}

    transition={{
      duration: 2.5,
      ease: "easeInOut",
     
    }}
    
    className='relative flex justify-center items-center mt-20'>
        <div className=' absolute border border-[#086788] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className=' absolute border border-[#6d7281] border-opacity-80 rounded-full h-[300px] w-[300px] mt-52 animate-ping ' />
        <div className=' absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping '/>
        <div className=' absolute border border-[#086788] border-opacity-80 rounded-full opacity-20 h-[700px] w-[700px] mt-52 animate-pulse ' />
        <div className=' absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping '/>

    </motion.div>
  )
}

export default BackgroundCircles