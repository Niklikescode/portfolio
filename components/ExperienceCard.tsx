import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  company: string;
  image: string;
  description: string;
};

function ExperienceCard({ title, company, image, description }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-fill object-center"
        src={image}
        alt="work experience icons"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
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
          <p className="font-bold text-1xl mt-1">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
