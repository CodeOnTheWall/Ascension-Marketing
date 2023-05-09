"use client";

// NextJS
import Link from "next/link";

// Framer Motion
import { motion } from "framer-motion";

const CustomNextMotionLink = motion(Link);

export default function MotionLink({
  x,
  y,
  delay,
  useAnimate,
  className,
  children,
  ease,
  href,
}) {
  const animationProps = useAnimate
    ? { animate: { x: 0, y: 0, opacity: 1 } }
    : { whileInView: { x: 0, y: 0, opacity: 1 } };

  return (
    <CustomNextMotionLink
      href={href}
      initial={{
        x: x,
        y: y,
        opacity: 0,
        scale: 1,
      }}
      whileHover={{ scale: 1.2 }}
      {...animationProps}
      transition={{ duration: 0.7, delay: delay, ease: ease }}
      className={`${className}`}
    >
      {children}
    </CustomNextMotionLink>
  );
}
