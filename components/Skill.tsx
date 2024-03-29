import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";


type Props = {
  image: string;
  directionLeft?: boolean;
};

function Skill({ image, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          
          opacity: 0,
        }}

       transition={{ duration: .7 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360}}
            
            // animate={{  }}
            viewport={{ once: true }}
    
        src={image}
        className=" rounded-full border border-gray-500 object-cover w-14 h-14  2xl:w-32 2xl:h-32 filter group-hover:grayscale    "
      />

      <div className="absolute opacity-0 group-hover:opacity-80  group-hover:bg-white h-14 w-14  2xl:w-32 2xl:h-32 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full">
          {/* <p className="text-3xl font-bold text-black opacity-100"> </p> this is where the proficiency level will go insisde the p tag */}
        </div>
      </div>
    </div>
  );
};

export default Skill