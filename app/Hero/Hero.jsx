import Image from "next/image";

// Public
import JevonsBigForehead from "../../public/JevonsBigForehead.jpg";

// Components
import MotionLink from "../[components]/Motion/MotionLink";
import BackgroundCircles from "./BackgroundCircles";
import Typewriter from "./Typewriter";
import Layout from "../[components]/Layout/Layout";

export default function Hero() {
  return (
    <Layout className="space-y-5 md:space-y-3 h-auto md:h-screen text-center">
      <BackgroundCircles />
      <Image
        className="rounded-full h-[200px] w-[200px] md:h-[150px] md:w-[150px] -z-20 mx-auto object-cover"
        src={JevonsBigForehead}
        alt="Handsome face shot of Jevon"
      />
      <h2 className=" text-md uppercase tracking-[12px]">
        Marketing Consultant
      </h2>

      <div className="h-10">
        <Typewriter />
      </div>
    </Layout>
  );
}
