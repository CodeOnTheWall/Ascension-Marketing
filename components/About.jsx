"use client";

import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className=" h-screen flex flex-col mx-auto max-w-9x1 px-10 justify-center items-center">
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
          About Us
        </motion.h3>

        <motion.img
          src="/Ascension.png"
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
          // viewport={{ once: true }}
          className="rounded-full w-[500px] h-[400px] object-contain"
        />

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
          className="flex flex-col md:flex-row lg:text-2xl justify-start space-x-2 "
        >
          <div>
            <h4 className=" underline decoration-[#014f86] underline-offset-4 ">
              Vision
            </h4>
            <p>
              To empower entrepreneurs and founders to bring their visions and
              ideas to life so that together we can transform the world and
              enhance the human experience
            </p>
          </div>

          <div>
            <h4 className="  underline decoration-[#014f86] underline-offset-4 ">
              Beliefs
            </h4>
            <p>
              We believe that the seeds of humanity’s future lie within the
              entrepreneurs who have the courage to take bold action, sharing
              their visions, ideas, and innovations with the world. And that
              opportunities to bring people together to advance the world
              forward in ways that enhance the human experience must always be
              followed through.
            </p>
          </div>

          <div>
            <h4 className="   underline decoration-[#014f86] underline-offset-4 ">
              Purpose and Mission
            </h4>
            <p>
              Our mission is to empower our clients to be able to clearly
              articulate their ideas and innovations to the people who are in
              dire need of them. We work closely with clients to drive
              distinctive, lasting, and substantial positive impact in their
              lives and the lives of the people they serve.
            </p>
          </div>
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

export default About;
