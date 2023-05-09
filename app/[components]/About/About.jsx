import MotionTitle from "../Motion/MotionTitle";
import MotionImg from "../Motion/MotionImg";
import Layout from "../Layout/Layout";

const AboutSubCat = ({ x, className, title, description }) => {
  return (
    <div className={`${className} p-3 bg-[#0077b6] rounded-lg`}>
      <MotionTitle
        x={x}
        duration={1.5}
        useAnimate={false}
        className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white"
      >
        {title}
      </MotionTitle>

      <p className="text-[18px]">{description}</p>
    </div>
  );
};

const VandP = [
  {
    title: "Trust & Integrity",
    description:
      "We focus on demonstrating to our clients that we always have their best interests at heart. We use this as the foundation of a relationship based on trust. We always think, speak, and act for what is right.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to constant learning and improvement. We strive to set a high standard and an exceptional experience for everyone.",
  },
  {
    title: "Courage",
    description:
      "We think and act big and bold. We dare to challenge our limits by taking calculated risks, pushing the boundaries, and learning from our failures to achieve the extraordinary.",
  },
  {
    title: "Teamwork & Collaboration",
    description:
      "We make the effort to understand every individual and what matters to them, recognizing their value and contributions to the team. We work together as one team directing the collective energy to achieve the extraordinary. We respect each other and draw from our differences, sharing ideas and knowledge with no boundaries.",
  },
  {
    title: "Open & Honest Communication",
    description:
      "We have the candor to tell it how it is without sugarcoating anything. We always remain open to the possibility that our perspectives and beliefs could be wrong.",
  },
  {
    title: "Clients First",
    description:
      "We always do what’s best for our clients without exception. We prioritize our efforts based on what our clients need, and in the order that they need them.",
  },
  {
    title: "Environment",
    description:
      "We strive to create an environment where our people can work at their natural best. We want our people to feel protected so that they can take calculated risks without having to look over their shoulders, and worry about negative consequences. We are nonhierarchical and inclusive, embracing diverse perspectives with curiosity and respect.",
  },
  {
    title: "Performance & Results Driven",
    description:
      "We are obsessed with our client’s success and are committed to getting the job done, turning decisions into actions, and delivering results.",
  },
  {
    title: "Fun",
    description:
      "We believe that it’s important to have fun in the company culture. Here we are striving to build a culture that doesn’t drain the life from people that work with us.",
  },
];

export default function About() {
  return (
    <Layout className="flex-col space-y-10">
      <div className="flex flex-row justify-center items-center space-x-20">
        <MotionTitle x={-100} duration={1.2} useAnimate={true}>
          About Us
        </MotionTitle>

        <MotionImg
          url={"Ascension.png"}
          x={100}
          duration={1.2}
          useAnimate={true}
          className="rounded-full w-1/4 h-auto object-contain hidden md:flex"
        />
      </div>

      <div className=" lg:flex lg:space-x-10 space-y-10 lg:space-y-0">
        <AboutSubCat
          title="Vision"
          description="  We envision a world that has been radically transformed because of
            visionary entrepreneurs who have redefined who people can be,
            pushing the boundaries of what we believe is possible, inspiring the
            people that interact with them, and bringing people together to
            positively advance humanity forward as one."
        />
        <AboutSubCat
          title="Beliefs"
          description="   We believe the best investment you can ever make is in yourself and
            that everybody has to grow into the best version of themselves. When
            people become the best version of themselves they will become the
            leaders that push the boundaries of what humanity is capable of and
            discover many innovations that were previously thought to be
            impossible. They will live a life of purpose and fulfilment. The
            seeds of the future lie within those people who choose to make the
            investment in themselves and take action toward growing into the
            best version of themselves Investing in ourselves and each other is
            the safest and most important investment we can ever make. Yet not
            enough people do it. Not because they are incapable or uninterested
            but because they don’t see the value in it for them. This is where
            we come in because it’s our job to effectively communicate the value
            that you bring to the table to your audience and find more of the
            audience. We inspire our people to work of themselves for themselves
            and nobody else."
        />
        <AboutSubCat
          title="Purpose and Mission"
          description="We work with those who are looking to transform the lives of
          numerous people on this planet. Those who are looking to define or
          redefine a new type of human being, are those new types of people
          who are necessary to take mankind into its next step in our
          evolutionary journey and advance humanity forward."
        />
      </div>

      <div className="flex flex-col justify-center items-center space-y-3">
        <MotionTitle x={-100} duration={1.2} useAnimate={true}>
          Values &
        </MotionTitle>
        <MotionTitle x={-100} duration={1.2} useAnimate={true}>
          Principals
        </MotionTitle>
      </div>

      <div className="w-full md:w-3/4 flex overflow-x-scroll space-x-3 scrollbar scrollbar-track-[#a9d6e5] scrollbar-thumb-[#014f86]">
        {VandP.map((VandPs, index) => (
          <AboutSubCat
            key={index}
            title={VandPs.title}
            description={VandPs.description}
          />
        ))}
      </div>
    </Layout>
  );
}
