"use client";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <div className="h-screen relative top-36 flex flex-col mx-auto max-w-9x1 px-10  items-center ">
      <motion.h3
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="underline decoration-[#014f86] underline-offset-8 rounded-full uppercase tracking-[20px] text-2xl"
      >
        FAQ&apos;s
      </motion.h3>

      <motion.div className="absolute top-60 w-full h-[200px] justify-center items-center bg-gradient-to-r from-green-500 to-blue-500" />
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="flex flex-col justify-start space-y-2 mt-7 text-sm lg:text-2xl "
      >
        <div>
          Can you implement the strategy for me as well? Depending on where
          you’re at you will have to take the necessary steps in order to see
          results
        </div>
        <div>Can you manage my social media for me?</div>
        <div>
          Can I see a sample of your work? No, because I wouldn’t show your plan
          to anybody else, however, there is a guarantee
        </div>
        <div>How much will the marketing cost? Do I need a budget?</div>
        <div>
          How do you create strategies? Goals, Smart objectives, budget, target
          segmentation
        </div>
        <div>
          Can you guarantee sales? Yes if you allow me to rework your main
          offers not just upfront offers but also back-end offers
        </div>
        <div>Do you work with all types of clients and industries? Yes</div>
        <div>
          What’s included? Analysis, overview, competition, segmentation,
          positioning, buyer persona, client journey, problems and solutions,
          tailored marketing strategy
        </div>
        <div>Inquiry requirements? Where are you located? Intended goal?</div>
        <div>
          What will I receive as a deliverable? A flowchart detailing the
          sequence of events as well as a PDF with all finer details written out
        </div>
        <div>
          How complex is the marketing plan? Can anyone understand it? Yes, I
          make sure it’s simple to understand and that it’s in a step-by-step
          format
        </div>
        <div>
          Is my idea protected? Yes, I would never share ideas with anyone else
          or use them for myself. We can sign a “Non-disclosure agreement” if
          you feel it necessary
        </div>
        <div>Your experience helping businesses?</div>
        <div>
          How do I know if my plan is working? I will tell you what to track and
          measure, but for the most part, more sales and revenue means it’s
          working
        </div>
      </motion.div>
    </div>
  );
}
