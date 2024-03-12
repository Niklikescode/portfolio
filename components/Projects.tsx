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
      name: " Bubble (SoC)",
      description:
        "As part of a team of 5 and 4 weeks to produce from concept to deployment. Bubble is a tablet app designed to aid children's wellbeing by helping them reflect and understand their thoughts and feelings. Both adults and children can use Bubble! Children are encouraged to log their emotions and optionally engage in a breathing exercise whilst adults have access to view their little one's logs in both graphical and written format.",
      image: "bubblecanva.png",
    },
    { 
      name: " Bottled Courage (SoC) ",
      description: "As part of a team of 6 and a week to produce from concept to deployment. My team believed there are many mental issues that stem from a lack of confidence during the c of our bootcamp. This can be a lack of self-esteem, morale, isolation and imposter syndrome. We designed an app that helps educate, raise awareness and combat the prevalance of this on the bootcamp.",
      image: "bottledcourage.png",
    },
    { 
      name: " Portfolio Website",
      description: "The website you're on right now! I built this website using Next.js, Tailwind CSS and Framer Motion, as well as as some design ideas from Canva. I wanted to create a website that was both visually appealing and interactive. I also wanted to showcase my skills and projects in a unique way. I've learned a great deal from this project by utilising the knowledge knowledge gained from the School of Code bootcamp as well as using a 'just in time' approach to learing. I'm really happy with the results so far but there are many areas that require tweaking. I'm excited to see how this website evolves over time.",
      image: "personalwebsite.png",
    },
    { 
      name: " Fitness App ",
      description: "I wanted to create something that closely alignes with my interests and hobbies. I'm a big fan of fitness and I wanted to create an app that would help people track their workouts and progress. I also wanted to include a feature that would generate a workout plan based on the user's goals and preferences. I'm still in the early stages of this project but I'm excited to see where it goes. I'm also open to collaborating with other developers on this project. If you're interested, feel free to reach out to me!",
      image: "comingsoon.png",
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
              <h4 className="text-1xl lg:text-4xl font font-semibold text-center">
                <span className="underline decoration-orange-400/50">
                  Project {index + 1} of {projects.length}:
                </span>
                {project.name}
              </h4>

              <p className="text-center  md:text-left text-1xl mt-1 overflow-y-scroll  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin h-40">
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
