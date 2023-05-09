"use client";

import { motion } from "framer-motion";

export default function MotionDiv({
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
    <motion.div
      initial={{
        x: x,
        y: y,
        opacity: 0,
        scale: scale,
      }}
      {...animationProps}
      transition={{ duration: duration, delay: delay, ease: ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
