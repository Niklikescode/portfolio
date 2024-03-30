import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import diving from "../public/diving.png";
import Link from "next/link";
import dynamic from "next/dynamic";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-1xl md:text-2xl ml-4">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={diving}
          className="-mb-24 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg lg:w-full lg:h-full 2xl:w-[5000px] 2xl:h-[500px] mt-12 md:mt-0"
          alt="Me diving"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="-mb-4 mt-4 text-[22px] lg:text-4xl font-semibold ">
          Here&apos;s a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background about me...<span></span>
        </h4>

        <div className=" overflow-y-scroll scrollbar-thin h-72 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
          <p className="mb-2 text-left">
            Firstly, thanks for stopping by!
            <br />
            <br />
            My professional career up to now has predominantly been in the
            technology space within a sales and managerial/client-relations
            capacity, where I&apos;ve had the pleasure of working with some
            amazing companies across a diverse collection of industries.
            I&apos;ve been lucky enough to work and learn from some of the best
            in the business, and I&apos;ve been able to take away some
            invaluable experiences and knowledge from each of these roles.
            <br />
            <br />
            I&apos;ve always had a passion for creativity from a very young age,
            which stems from a fascination of the way things work. Beyond the
            typical childhood antics, I would often spend my time doodling,
            painting, playing instruments, building model planes, cooking,
            baking, or just trying to be the next Paul Daniels - I had the set.
            Ultimately, whatever it was that I was doing, it fundamentaly
            involved <em>making</em> something. As such I&apos;ve always been
            drawn to the idea of creating something from nothing, and I&apos;ve
            always been interested by the idea of building something that can be
            used by others.
            <br />
            <br />
            In late 2023 I was extremely fortunate to had been selected from
            over 3000 applicants to The School of Code alongside 89 other
            successful candidates. This was a 16-week
            <em> ridiculously</em> intensive yet life-changing and rewarding
            bootcamp in Full-Stack Software and Web Development, where I was
            able to learn and develop my skills and work on some brilliant
            projects alongside a very talented and diverse mix of people.
            <br />
            <br />
            Since graduating and being released back into the world now armed
            with a whole new skillset, the aim is to build some cool, useful and
            hopefully lucrative stuff whilst also growing my skills with the
            right people - focusing on the AI, Bitcoin or wider crypto space.
            I&apos;m also working on a few personal projects which I&apos;m
            hoping to share with you soon!
            <br />
            <br />
            Outside of all this, you&apos;ll often find me in the kitchen,
            settling in to a good book or a good movie, trading, weightlifting,
            playing basketball and tennis or generally dominating the pool
            table. As for music, I like all genres and especially live, though I do have a penchant for old-school Hip Hop.
            <br />
            Most of all, I LOVE travelling the world 🌍
            <br />
            <br />
            I&apos;ll wrap it up here and leave you with my website, where
            roughly 7 months prior to its completion, I had never written a
            single line of code in my life...
            <br />
            <br />
            If you&apos;d like to chat, feel free to drop me a message or give
            me a shout through the contact page below. I&apos;d love to hear
            from you!
            <br />
            <br />
            <small> (Feedback will also be greatly appreciated!)</small>
  
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
