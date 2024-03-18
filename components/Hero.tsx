import { useAnimate } from "framer-motion";
import { useAmp } from "next/amp";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import nik from "../public/nik.jpg";
import Link from "next/link";
import dynamic from "next/dynamic";


type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "< Hey, I'm Nikhil",
      "you can call me Nik",
      "I'm on a mission",
      "to tranform my life",
      "So do feel free",
      "to stick around! />",
    ],

    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-44 w-44 mx-auto object-cover"
        src={nik}
        alt="Profile pic of Nik"
      />
      <div className="z-20">
        <h2 className=" uppercase text-gray-500 pb-2 tracking-[9px] sm:tracking-[12px]">Software Developer</h2>
        <h1 className="text-2xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="purple" />
        </h1>

        <div className=" pt-2 sm:pt-5">

          <Link href="#about">
          <button className="heroButton mr-1">About</button>
          </Link>

          <Link href="#experience">
          <button className="heroButton mr-1">Experience</button>
          </Link>

          <Link href="#skills">
          <button className="heroButton mr-1">Skills</button>
          </Link>

          <Link href="#projects">
          <button className="heroButton mr-1">Projects</button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Hero