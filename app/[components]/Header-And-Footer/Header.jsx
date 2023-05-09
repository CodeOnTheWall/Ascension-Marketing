"use client";

import { SocialIcon } from "react-social-icons";
import { useState } from "react";

import MotionDiv from "../Motion/MotionDiv";
import CustomLink from "./CustomLink";
import MobileCustomLink from "./MobileCustomLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className=" sticky top-0 z-50 flex items-center w-full
    py-4 h-14 md:h-20 justify-center bg-[#0077b6]
    "
    >
      <button
        onClick={handleHamburger}
        // screen sizes lg or smaller get flex and flex-col
        className="md:hidden flex flex-col justify-center items-center"
      >
        <span
          className={` bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />
        <span
          className={` bg-white  block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={` bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>

      <div className=" hidden md:flex w-full justify-around items-center">
        <nav className=" space-x-5 flex">
          <CustomLink href="#about" title="About Us" />
          <CustomLink href="#services" title="Services" />
          <CustomLink href="#FAQ" title="FAQ's" />
          <CustomLink href="#contact" title="Contact" />
        </nav>
        <nav className="flex space-x-3">
          <MotionDiv
            x={-200}
            useAnimate={true}
            rotate={360}
            duration={0.7}
            className="flex flex-row items-center border border-[#014f86] rounded-full"
          >
            <SocialIcon
              url="https://www.linkedin.com/in/jevon-ragoonanan-a568a9214/"
              fgColor="white"
              bgColor="transparent"
            />
          </MotionDiv>
          <MotionDiv
            duration={0.7}
            useAnimate={true}
            x={-180}
            className=" flex flex-row items-center text-gray-300 cursor-pointer
          border border-[#014f86] rounded-full w-36"
          >
            <SocialIcon
              className=" cursor-pointer"
              network="email"
              fgColor="white"
              bgColor="transparent"
            />
            <a href="#contact">
              <p className=" uppercase text-sm text-white animate-bounce">
                Let&apos;s Talk
              </p>
            </a>
          </MotionDiv>
        </nav>
      </div>

      {isOpen ? (
        <MotionDiv
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className=" flex flex-col justify-center items-center">
            <MobileCustomLink
              href="#about"
              title="About Us"
              toggle={handleHamburger}
            />
            <MobileCustomLink
              href="#services"
              title="Services"
              toggle={handleHamburger}
            />
            <MobileCustomLink
              href="#FAQ"
              title="FAQ's"
              toggle={handleHamburger}
            />
            <MobileCustomLink
              href="#contact"
              title="Contact"
              toggle={handleHamburger}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2"></nav>
        </MotionDiv>
      ) : null}
    </header>
  );
}
