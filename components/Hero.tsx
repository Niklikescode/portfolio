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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={nik}
        alt="Profile pic of Nik"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">Software Developer</h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="purple" />
        </h1>

        <div className="pt-5">

          <Link href="#about">
          <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
          <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
          <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
          <button className="heroButton">Projects</button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Hero;
