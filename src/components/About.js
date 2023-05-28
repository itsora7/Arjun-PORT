import React from "react";
import countUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import grad11 from "../assets/grad11.png";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="aboutme" ref={ref}>
      <div className="container mx-auto p-5">
        <h2 className="text-center underline">About Me</h2>

        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className=" w-[5000px]">
            <img src={grad11} />
          </div>
          <div>
            <p className="pt-3 font-primary text-bold italic text-[20px]">
              I'm a well-organised, dedicated, experienced Software Engineer
              with having master’s degree in software engineering, adept in all
              stages of Software Development Life Cycle (SDLC). Bringing forth
              expertise in UI/UX design, development, testing, debugging
              processes and maintenance of web systems. Able to effectively
              self-manage during independent projects as well as a team player.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
