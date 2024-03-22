// this page shows two divs for social media icons and a div for email icon. Both are animated using framer-motion.

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"
import Link from "next/link";
import dynamic from "next/dynamic";


type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 md:items-center"> 
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 0.8
      }}
      transition={{
        duration: 1.5,
      }}
      >
        <SocialIcon
          url="https://github.com/Niklikescode"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/nikhilbhalla38/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/NikB305"
          fgColor="grey"
          bgColor="transparent"
        />
        
        <SocialIcon
          url="https://www.youtube.com/channel/UCSmc0SQYcUH4zPI1NLEzGdA"
          fgColor="grey"
          bgColor="transparent"
        />
      <SocialIcon
     
          url="https://drive.google.com/file/d/19FcJPf8R7Bg3uhz4lfa8C6ECh5K54Wej/view?usp=drive_link"
          fgColor="grey"
          bgColor="transparent"
        />

     </motion.div>

<Link href="#contact">
      <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 0.8
      }}
      transition={{
        duration: 1.5,
      }}
      
      className="flex flex-row mr-6 items-center text-gray-300 cursor-pointer z-20">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch!</p>
      </motion.div>
</Link>
    </header>
  );
}

export default dynamic (() => Promise.resolve(Header), {ssr: false})


