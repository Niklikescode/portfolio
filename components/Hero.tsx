import { useAnimate } from "framer-motion";
import { useAmp } from "next/amp";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name's Nikhil",
      "Guy who loves lifting heavy things",
      "but also loves to code!",
    ],

    loop: true,
    delaySpeed: 2000,
  });

  return (
  <div>
<h1>
  <span>{text}</span>
  <Cursor cursorColor="purple"/>
</h1>

  </div>
  );
}

export default Hero;
