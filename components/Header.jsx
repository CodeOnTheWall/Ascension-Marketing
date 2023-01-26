import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

import { useRef } from "react";

function Header() {
  const firstIconRef = useRef();

  return (
    <header className=" sticky top-0 p-5 flex justify-between mx-auto z-20 bg-[#0077b6] xl:justify-between ">
      <div className=" border border-[#014f86] rounded-full">
        <motion.div
          ref={firstIconRef}
          initial={{
            rotate: 0,
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            rotate: 360,
            // going to its normal position
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/jevon-ragoonanan-a568a9214/"
            fgColor="white"
            bgColor="transparent"
          />
        </motion.div>
      </div>

      <div className=" border border-[#014f86] rounded-full w-36">
        <motion.div
          initial={{
            x: firstIconRef.current
              ? firstIconRef.current.getBoundingClientRect().x
              : -1100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            // going to its normal position
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0.8 }}
          className=" flex flex-row items-center text-gray-300 cursor-pointer"
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
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
