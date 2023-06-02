import React from "react";
import Arkstha from "../assets/Arkstha.png";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section " id="home">
      <div className="container flex text-center mx-auto">
        <div className="mx-auto hidden lg:flex max-w-[320px] lg:max-w-[302px]">
          <img src={Arkstha} alt="photo" />
        </div>
        <div className="font-bold text-[32px] text-accent">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            intial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            " ARJUN KUMAR <span>SHRESTHA "</span>
          </motion.h1>
          <div className="text-[30px] lg:text-[40px] ">
            <span className="text-accent uppercase"> I'm a</span>

            <div className=" ml-5">
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
            <p className="ml-1 text-[20px] text-bold">
              I'll make your life easier.
            </p>

            <div className="text-center">
              <div className="flex text-[30px] ml-20 gap-x-8 mt-3 ">
                <a href="https://github.com/itsora7" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/arjun-kumar-shrestha/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  target="_blank"
                >
                  <FaMailBulk />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
