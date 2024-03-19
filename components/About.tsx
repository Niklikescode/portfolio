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
          className="-mb-24 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-full md:h-full 2xl:w-[5000px] 2xl:h-[500px] mt-12 md:mt-0"
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
            Firstly, thanks for stopping by! I guess a good place to begin would
            be to explain why I&apos;m here. Let&apos;s get the boring bit out
            the way... my professional career up to now has predominantly been
            in the technology space within a sales and managerial/client-facing
            capacity, where I&apos;ve had the pleasure of working with some
            amazing companies across a diverse collection of industries.
            I&apos;ve been lucky enough to work and learn from some of the best
            in the business, and I&apos;ve been able to take away some
            invaluable experiences and knowledge from each of these roles.
            <br />
            <br />
            I&apos;ve always had a passion for creativity from a very young age,
            which stems from a fascination of the way things work. As a kid, and
            outside of the usual silly things kids get up to, I would often
            spend my time drawing, painting, playing instruments, building model
            planes, clay modeling*, cooking, baking or trying to be the next
            Paul Daniels - yes I did have the set. Ultimately, whatever it was
            that I was doing, it fundamentaly involved{" "}
            <em>
              <strong>making</strong>
            </em>{" "}
            something. As such I&apos;ve always been drawn to the idea of
            creating something from nothing, and I&apos;ve always been
            interested by the idea of building something that can be used by
            others.
            <br />
            <br />
            In late 2023 I was extremely fortunate enough to had been selected
            from over 3000 applicants to The School of Code alongside 89 other
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
            right people - preferably in the crypto and blockchain space but not
            limited to. I&apos;m also working on a few personal projects which
            I&apos;m hoping to share with you soon!
            <br />
            <br />
            Outside of all this, you&apos;ll often find me in the kitchen,
            weightlifting, trading, settling in to a good book or a good movie,
            playing basketball and tennis or cleaning up at pool, as well as delving
            in to all things old-school Hiphop - especially live. Most of all...
            I LOVE to see the world.
            <br />
            <br />
            I&apos;ll wrap it up here and leave you with my website, where
            roughly 7 months prior to its completion, I had never written a
            single line of code in my life...
            <br />
            <br />
            If you do want to chat, feel free to drop me a message or give me a
            shout through the contact space below. I&apos;d love to hear from
            you!
            <br />
            <br />*
            <em>
              <small>Playdough</small>
            </em>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
