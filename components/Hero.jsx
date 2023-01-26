"use client";
import Image from "next/image";
// import Link from "next/link";

import JevonsBigForehead from "../public/JevonsBigForehead.jpg";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Hero() {
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
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className=" relative rounded-full h-[150px] w-[150px] mx-auto object-cover"
        src={JevonsBigForehead}
        alt="Handsome face shot of Jevon"
      />
      <div className=" z-20">
        <h2 className=" text-xs uppercase text pb-2 tracking-[12px]">
          Marketing Consultant
        </h2>

        <h1 className=" text-xl">
          <span className=" mr-3">{text}</span>
          <Cursor cursorColor="#0077b6" />
        </h1>

        <div className="flex pt-4 justify-between">
          <div className=" border border-[#014f86] rounded-full w-[60px] hover:scale-125">
            <motion.div
              initial={{
                rotate: 0,
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                // going to its normal position
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.7, ease: "easeIn" }}
            >
              <a href="#about">
                <button>About</button>
              </a>
            </motion.div>
          </div>

          <div className=" border border-[#014f86] rounded-full w-20 hover:scale-125">
            <motion.div
              initial={{
                rotate: 0,
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                // going to its normal position
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.7, ease: "easeIn" }}
            >
              <a href="#services">
                <button>Services</button>
              </a>
            </motion.div>
          </div>

          <div className=" border border-[#014f86] rounded-full w-20 hover:scale-125">
            <motion.div
              initial={{
                rotate: 0,
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                // going to its normal position
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.7, ease: "easeIn" }}
            >
              <a href="#FAQ">
                <button>FAQ's</button>
              </a>
            </motion.div>
          </div>

          <div className=" border border-[#014f86] rounded-full w-20 hover:scale-125">
            <motion.div
              initial={{
                rotate: 0,
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                // going to its normal position
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.7, ease: "easeIn" }}
            >
              <a href="#contact">
                <button>Contact</button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
