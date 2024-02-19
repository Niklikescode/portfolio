import { motion } from "framer-motion";
import React from "react";


type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once:true}}
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/project-management-536789.png"
              alt=""
            />

            <div className="space-y-10 px-0 md-:px-10 max-w-6xl">
              <h4 className="text-4xl font font-semibold text-center"> <span className="underline decoration-orange-400/50">Project {i + 1} of {projects.length}:</span> Bubble</h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, adipisci explicabo! Necessitatibus facilis voluptate, aut deserunt natus alias hic blanditiis minus dolor excepturi, praesentium id perferendis quod doloribus architecto tempora.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;