import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";


type Props = {
  title: string;
  company: string;
  image: string;
  description: string;
};

function ExperienceCard({ title, company, image, description }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-16 flex-shrink-0 w-[290px] md:w-[600px] 2xl:w-[900px] snap-center p-13 mt-16 bg-[#191f2c] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden  ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className=" mt-8 w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-fill object-center"
        src={image}
        alt="work experience icons"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-x2 my-2 justify-center">
          {/* <img
            className=" h-10 w-10 rounded-full"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react logo"
          />

          <img
            className="h-10 w-10 rounded-full"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react logo"
          />

          <img
            className="h-10 w-10 rounded-full"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react logo"
          /> */}

          <div>
          <p className=" text-1xl mt-1 overflow-y-scroll  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin h-40">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard