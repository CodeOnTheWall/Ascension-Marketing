"use client";

import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <div className=" h-screen relative top-44 flex flex-col mx-auto max-w-9x1 px-10  items-center">
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
          className="underline decoration-[#014f86] underline-offset-8 rounded-full top-44 uppercase tracking-[20px] text-2xl"
        >
          Services
        </motion.h3>

        <motion.div className="absolute top-60 w-full h-[200px] justify-center items-center bg-gradient-to-r from-blue-500 to-green-500" />
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
          className="flex flex-col justify-start space-y-5 mt-7 text-4xl "
        >
          <h4>Brand Discovery & Messaging</h4>
          <h4>Ideal Client Discovery</h4>
          <h4>Rebranding</h4>
          <h4>Strategic Positioning</h4>
          <h4>Quality Lead Acquisition</h4>
          <h4>Organic & Paid Traffic</h4>
          <h4>Client Experience Journey</h4>
          <h4>Marketing Campaign Strategy</h4>
          <h4>Testing & Optimization</h4>
          <h4>Offer Creation & System</h4>
          <h4>Growth Hacking</h4>
          <h4>Website/Funnel Design</h4>
        </motion.div>
      </div>

      {/* <h4 className="underline decoration-[#014f86] underline-offset-4 ">
          Values and Principals:
        </h4> */}
      {/* <ul>
          <li>
            Trust & Integrity. We focus on demonstrating to our clients that we
            always have their best interests at heart. We use this as the
            foundation of a relationship based on trust. We always think, speak,
            and act for what is right.
          </li>
          <li>
            Excellence. We are committed to constant learning and improvement.
            We strive to set a high standard and an exceptional experience for
            everyone.
          </li>
          <li>
            Courage. We think and act, big and bold. We dare to challenge our
            limits by taking calculated risks, pushing the boundaries, and
            learning from our failures to achieve the extraordinary.
          </li>
          <li>
            Teamwork & Collaboration. We make the effort to understand every
            individual and what matters to them, recognizing their value and
            contributions to the team. We work together as one team directing
            the collective energy to achieve the extraordinary. We respect each
            other and draw from our differences, sharing ideas and knowledge
            with no boundaries.
          </li>
          <li>
            Open & Honest Communication. We have the candor to tell it how it is
            without sugarcoating anything. We always remain open to the
            possibility that our perspectives and beliefs could be wrong.
          </li>
          <li>
            Clients First. We always do what’s best for our clients without
            exception. We prioritize our efforts based on what our clients need,
            and in the order that they need them.
          </li>
          <li>
            Environment. We strive to create an environment where our people can
            work at their natural best. We want our people to feel protected so
            that they can take calculated risks without having to look over
            their shoulders, and worry about negative consequences. We are
            nonhierarchical and inclusive, embracing diverse perspectives with
            curiosity and respect.
          </li>
          <li>
            Performance & Results Driven. We are obsessed with our client’s
            success and are committed to getting the job done, turning decisions
            into actions, and delivering results.
          </li>
          <li>
            Fun. We believe that it’s important to have fun in the company
            culture. Here we are striving to build a culture that doesn’t drain
            the life from people that work with us.
          </li>
        </ul> */}
    </>
  );
}

export default Services;
