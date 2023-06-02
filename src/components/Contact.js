import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div>
              <h4 className="text-xl uppercase text-black font-medium mb-2 tracking-wide">
                Get In Touch
              </h4>
              <h2 className="text-[25px] lg:text-[80px] mb-12 leading-none">
                Drop your message
              </h2>
            </div>
          </div>
          <form className="flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="border-b py-3 w-full focus:border-black transaction-all resize-none mb 12"
              type="text"
              placeholder="Your name"
            />
            <input
              className="border-b py-3 w-full focus:border-accent transaction-all resize-none mb 12"
              type="text"
              placeholder="Your email"
            />
            <input
              className="border-b py-3 w-full focus:border-accent transaction-all resize-none mb 12"
              type="text"
              placeholder="Message"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
