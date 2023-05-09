import Layout from "../Layout/Layout";
import MotionDiv from "../Motion/MotionDiv";
import MotionTitle from "../Motion/MotionTitle";

export default function Services() {
  return (
    <Layout>
      <MotionTitle y={-100} duration={1.5}>
        Services
      </MotionTitle>
      <MotionDiv
        x={-300}
        useAnimate={true}
        duration={1.2}
        className="flex flex-col justify-start space-y-5 mt-7 text-3xl "
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
      </MotionDiv>
    </Layout>
  );
}
