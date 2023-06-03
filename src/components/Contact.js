import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-black font-medium mb-2 tracking-wide">
                Get In Touch
              </h4>
              <h2 className="text-[25px] lg:text-[80px] mb-12 leading-none">
                Drop your message
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="border-b py-3 w-full focus:border-black transaction-all resize-none mb 12"
              type="text"
              placeholder="Your name"
            />
            <input
              className="border-b py-3 w-full focus:border-black transaction-all resize-none mb 12"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="border-b py-3 w-full focus:border-accent transaction-all outline-none mb-12 resize-none"
              placeholder="Message"
            ></textarea>
            <button className="btn ">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
