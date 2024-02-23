import { motion } from "framer-motion";
import React from "react";

type Project = {
  name: string;
  description: string;
  image: string;
};

type Props = {};

function Projects({}: Props) {
  const projects: Project[] = [
    {
      name: " Bubble",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
      image: "bubbleproject2.png",
    },
    { 
      name: " Bottled Courage ",
      description: "Another amazing project...",
      image: "bottledcourage.png",
    },
    { 
      name: " Portfolio Website",
      description: "uifiufhrwfuwh",
      image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/project-management-536789.png",
    },
    { 
      name: " Fitness App ",
      description: "Another amazing project...",
      image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/project-management-536789.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      {/* Your existing code for the heading and scrollbar */}

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <div
            key={project.name} // Use a unique key for each project
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            {/* Your existing code for image and project details */}
            <motion.img
              // ... your existing image animation props ...
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once:true}}
              src={project.image}
              alt={project.name}
            />

            <div className="space-y-10 px-0 md-:px-10 max-w-6xl">
              <h4 className="text-4xl font font-semibold text-center">
                <span className="underline decoration-orange-400/50">
                  Project {index + 1} of {projects.length}:
                </span>
                {project.name}
              </h4>

              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Your existing code for the background decoration */}

      
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
