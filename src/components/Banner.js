import React from "react";
import Arkstha from "../assets/Arkstha.png";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="mx-auto hidden lg:flex max-w-[320px] lg:max-w-[482px]">
        <img src={Arkstha} alt="photo" />
      </div>
      <div className="container mx-auto">
        <div className="font-bold text-[30px] text-white">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            intial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            " ARJUN KUMAR <span>SHRESTHA "</span>
          </motion.h1>
          <div className="text-[30px] lg:text-[50px] ">
            <span className="ml-20 text-accent uppercase"> I'm a</span>
          </div>

          <div className="text-white ml-5">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Web Developer",
                2000,
                "Full Stack Developer (MERN)",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </div>
        </div>
        <div>
          <p className="ml-12 text-[20px] text-white">
            I'll make your life easier.
          </p>
        </div>
        <div>
          <div className="flex text-[30px] ml-12 gap-x-6 max-w-max mt-3">
            <a
              href="https://github.com/itsora7"
              target="_blank"
              className="text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-kumar-shrestha/"
              target="_blank"
              className="text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              target="_blank"
              className="text-white"
            >
              <FaMailBulk />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
