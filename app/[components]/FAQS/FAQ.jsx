import Layout from "../Layout/Layout";
import MotionDiv from "../Motion/MotionDiv";
import MotionTitle from "../Motion/MotionTitle";

const faqs = [
  "Can you implement the strategy for me as well? Depending on where you’re at you will have to take the necessary steps in order to see results",
  "Can you manage my social media for me?",
  "Can I see a sample of your work? No, because I wouldn’t show your plan to anybody else, however, there is a guarantee",
  "How much will the marketing cost? Do I need a budget?",
  "How do you create strategies? Goals, Smart objectives, budget, target segmentation",
  "Can you guarantee sales? Yes if you allow me to rework your main offers not just upfront offers but also back-end offers",
  "Do you work with all types of clients and industries? Yes",
  "What’s included? Analysis, overview, competition, segmentation, positioning, buyer persona, client journey, problems and solutions, tailored marketing strategy",
  "Inquiry requirements? Where are you located? Intended goal?",
  "What will I receive as a deliverable? A flowchart detailing the sequence of events as well as a PDF with all finer details written out",
  "How complex is the marketing plan? Can anyone understand it? Yes, I make sure it’s simple to understand and that it’s in a step-by-step format",
  "Is my idea protected? Yes, I would never share ideas with anyone else or use them for myself. We can sign a 'Non-disclosure agreement' if you feel it necessary",
  "Your experience helping businesses?",
  "How do I know if my plan is working? I will tell you what to track and measure, but for the most part, more sales and revenue means it’s working",
];

export default function FAQ() {
  return (
    <Layout>
      <MotionTitle y={-100} duration={1.5}>
        FAQ&apos;s
      </MotionTitle>

      <MotionDiv x={-300} duration={1.2} className="mt-10">
        <ul className=" space-y-5 text-[20px]">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-[#0077b6] rounded-lg p-4">
              {faq}
            </li>
          ))}
        </ul>
      </MotionDiv>
    </Layout>
  );
}
