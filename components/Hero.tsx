import { useAnimate } from "framer-motion";
import { useAmp } from "next/amp";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi boys 2.0",
      "This is a test skeleton",
      "it's coming along",
      "ok love you bye x"
    ],

    loop: true,
    delaySpeed: 2000,
  });

  return (
  <div className="h-screen flex flex-col space-y-8 items-center justify-center">
    <BackgroundCircles />
<h1>
  <span>{text}</span>
  <Cursor cursorColor="purple"/>
</h1>

  </div>
  );
}

export default Hero;
