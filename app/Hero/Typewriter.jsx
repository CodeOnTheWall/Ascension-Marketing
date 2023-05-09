"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Typewriter() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Names's Jevon Ragoonanan",
      "Let's start making an impact",
      "To create deep meaning in our work",
      "To prosper and build our communities",
    ],
    loop: true,
    delaySpeed: 500,
  });

  return (
    <h1 className=" text-xl">
      <span className=" mr-3">{text}</span>
      <Cursor cursorColor="#0077b6" />
    </h1>
  );
}
