import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";


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
        "A School of Code project, and as part of a team of 5 with 3.5 weeks to produce from concept to deployment. Bubble is a tablet app designed to aid children's wellbeing by helping them reflect and understand their thoughts and feelings. Both adults and children can use Bubble! Children are encouraged to log their emotions and optionally engage in a breathing exercise whilst adults have access to view their little one's logs in both graphical and written format. Together with using our newly-acquired knowlege from the Bootcamp, this was acheived through adhering to a solid Agile Manifesto, extensive planning and research through to wireframing and prototyping, and continuous collaboration. Click on the YouTube icon above to view an in-depth breakdown on how my team approached this project!",
      image: "bubblecanva2.png",
    },
    { 
      name: " Bottled Courage",
      description: "A School of Code project, and as part of a team of 6 with 1 week to produce from concept to deployment. My team believed there are many mental issues that stem from a lack of confidence during the course of our bootcamp. This can be a lack of self-esteem, morale, isolation and imposter syndrome. We designed an app that helps educate, raise awareness and combat the prevalance of this on the bootcamp.",
      image: "bottledcourage70.png",
    },
    { 
      name: " Portfolio Website",
      description: "The website you're on right now! I built this website using Next.js, Tailwind CSS and Framer Motion, as well as as some design ideas from Canva and various NPM packages and colour palettes. I wanted to create a website that was both visually appealing and interactive, whilst showcasing my skills and projects in a unique way. I've learned a great deal from this project by utilising the knowledge gained from the School of Code bootcamp as well as using the 'just in time' approach to learning (kudos Chris Meah!). I'm really happy with the results so far but there are many areas that require tweaking. I'm excited to see how this website evolves over time.",
      image: "personalwebsite.png",
    },
    { 
      name: " Fitness App ",
      description: "I wanted to create something that closely alignes with my interests and hobbies. I'm a big fan of weightlifting and I wanted to create an app that would help people track their workouts and progress. I also wanted to include a feature that would generate a workout plan based on the user's goals and preferences. I'm still in the early stages of this project but I'm excited to see where it goes. I'm also open to collaborating with other developers on this project. If you're interested, feel free to reach out to me!",
      image: "comingsoon3.png",
    },
  ];

  return (

    

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      {/* existing code for the heading and scrollbar */}

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <div
            key={project.name} // Use a unique key for each project
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5  items-center justify-center p-10 md:p-44 h-screen"
          >
            {/* existing code for image and project details */}
            <motion.img
              className=" object-fill object-center mt-8 md:w-[700px] md:h-[600px]"
              //  existing image animation props ...
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


      {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3> */}

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" sm:text-2xl px-0 lg:text-4xl font font-semibold text-center">
                <span className="underline decoration-orange-400/50">
                  Project {index + 1} of {projects.length}:
                </span>
                {project.name}
              </h4>

              <p className=" text-left md:text-left text-1xl mt-1 overflow-y-scroll scrollbar-thin h-40 2xl:h-40 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* existing code for the background decoration */}

      
      <div className="w-full absolute top-[30%] bg-[#086788]/30 left-0 h-[500px] -skew-y-12 uppercase tracking-[19px] lg:tracking-[50px] text-gray-500 text-[50px] lg:text-5xl" > projects</div>
    </motion.div>
  );
}

export default Projects