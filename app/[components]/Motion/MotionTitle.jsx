"use client";

import { motion } from "framer-motion";

export default function MotionTitle({
  x,
  y,
  rotate,
  scale,
  duration,
  delay,
  useAnimate,
  className,
  children,
  ease,
}) {
  const animationProps = useAnimate
    ? { animate: { x: 0, y: 0, opacity: 1, scale: 1, rotate: rotate } }
    : { whileInView: { x: 0, y: 0, opacity: 1 } };

  return (
    <motion.h3
      initial={{
        x: x,
        y: y,
        opacity: 0,
        scale: scale,
      }}
      {...animationProps}
      transition={{ duration: duration, delay: delay, ease: ease }}
      className={`${className} uppercase text-2xl tracking-[20px] underline decoration-[#014f86] underline-offset-8
      `}
    >
      {children}
    </motion.h3>
  );
}
