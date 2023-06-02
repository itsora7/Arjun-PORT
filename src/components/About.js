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
      <div className="container mx-auto">
        <h2 className="text-center underline">About Me</h2>

        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="pt-6 font-primary text-bold italic text-[30px]">
              A Full Stack Developer and digital planner, adept in all stages of
              Software Development Life Cycle.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" w-[2500px]"
          >
            <img src={grad11} />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="pl-6">
              <h2>Designing</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-primary w-[85%]"
                  role="progressbar"
                >
                  85%
                </div>
              </div>
              <h2>System Analysis</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info w-[75%]"
                  role="progressbar"
                >
                  75%
                </div>
              </div>

              <h2>Development</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info w-[80%]"
                  role="progressbar"
                >
                  80%
                </div>
              </div>
              <h2>Problem Solving</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info w-[75%]"
                  role="progressbar"
                >
                  75%
                </div>
              </div>
              <h2>Programming</h2>
              <div className="progress">
                <div
                  className="progress-bar bg-green progress-bar-info w-[75%]"
                  role="progressbar"
                >
                  75%
                </div>
              </div>
              <h2>Management</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-default w-[90%]"
                  role="progressbar"
                >
                  90%
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
