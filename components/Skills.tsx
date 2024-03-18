import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import dynamic from "next/dynamic";


type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-4">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text text-gray-500 text-sm">
        HOVER OVER EACH SKILL TO SEE PROFICIENCY (IN DEVELOPMENT)
      </h3>

      <div className="grid grid-cols-5 gap-5 md:mt-16">
        <Skill image="html5-original.svg" />
        <Skill image="css.svg" />
        <Skill image="tailwind.svg" />
        <Skill image="javascript.svg" />
        <Skill image="typescript.svg" />
        <Skill image="react3.png" />
        <Skill image="nextjs.svg" />
        <Skill image="python.svg" />
        <Skill image="nodejs.svg" />
        <Skill image="postgres.svg" />
        <Skill image="mongodb.svg" />
        <Skill image="jest.svg" />
        <Skill image="playwright.png" />
        <Skill image="git.svg" />
        <Skill image="vscode2.svg" />
        <Skill image="chakra.svg" />
        <Skill image="photoshop.svg" />
        <Skill image="canva.svg" />
        <Skill image="figma.svg" />
        <Skill image="trello.svg" />
      </div>
    </motion.div>
  );
}

export default Skills