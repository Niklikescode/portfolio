import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    title: "Software Developer",
    image: "path/to/image1.jpg",
    description: "",
    text: "ejnefjfnefnegfen",
  },
  {
    title: "Job 2",
    image: "path/to/image2.jpg",
    description: "biefewfwufbfewffwfw",
  },
  {
    title: "Job 3",
    image: "path/to/image2.jpg",
    description: "Description for Job 2",
  },
  {
    title: "Job 4",
    image: "path/to/image2.jpg",
    description: "Description for Job 2",
  },
  // Add more data for other cards
];

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {experienceData.map((item, index) => (
          <ExperienceCard
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </motion.div>
  );
}



export default WorkExperience;
