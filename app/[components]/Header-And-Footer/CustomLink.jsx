"use client";

// NextJS
import { usePathname } from "next/navigation";

import MotionLink from "../Motion/MotionLink";
import MotionDiv from "../Motion/MotionDiv";

export default function CustomLink({ href, title, className }) {
  const router = usePathname();
  return (
    // group allows all elements inside parent (in this case Link) to share css styles
    // this allows the Link to share the group:hover, which is what we want,
    // so that it can be hovered over as well
    <div className="relative">
      <MotionLink href={href} className={`${className} relative group`}>
        {title}
        <span
          //   inline block to allow an inline element to be given block level properties like width height margin
          className={`h-[2px] inline-block bg-white absolute left-0 bottom-0
        group-hover:w-full transition-[width] ease duration-300 ${
          router === href ? "w-full" : "w-0"
        }`}
        />
      </MotionLink>
      <MotionDiv
        x={0}
        y={-20}
        duration={1.5}
        delay={1.5}
        useAnimate={true}
        className="absolute bottom-1 -left-2  w-[2px] h-[15px] bg-white"
      />
      <MotionDiv
        x={0}
        y={20}
        duration={1.5}
        delay={1.5}
        useAnimate={true}
        className="absolute bottom-1 -left-3 w-[2px] h-[15px] bg-white"
      />
    </div>
  );
}
