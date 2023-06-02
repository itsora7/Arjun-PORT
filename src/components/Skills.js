import React from "react";
import {} from "react-bootstrap";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaFigma,
  FaBootstrap,
  FaJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto text-center">
        <div>
          <h3 className="mb-3">
            ⚙️ 🪟 Tools and frameworks that I use to develop beautiful web apps.
            🪟 ⚙️
          </h3>
          <p>
            Below are the new platform and frameworks that I work with.. 👇👇
          </p>
        </div>
        <div class="relative whitespace-no-wrap text-center">
          <div class="py-7 flex animate-marquee">
            <div class="text-6xl mx-4">
              <FaHtml5 /> <h5>HTML</h5>
            </div>
            <div class="text-6xl mx-4">
              <FaCss3 /> <h5>CSS</h5>
            </div>
            <div class="text-6xl mx-4">
              <FaBootstrap />
              <h5>Bootstrap</h5>
            </div>

            <div class="text-6xl mx-4">
              <FaFigma />
              <h5>Figma</h5>
            </div>
            <div class="text-6xl mx-4">
              <FaReact />
              <h5>REACT</h5>
            </div>
          </div>
          <div class="py-7 flex animate-marquee2">
            <div class="text-6xl mx-4">
              <FaNodeJs /> <h5>NODEJS</h5>
            </div>
            <div class="text-6xl mx-4">
              <FaDocker /> <h5>DOCKER</h5>
            </div>
            <div class="text-6xl mx-4">
              <FaJs />
              <h5>JAVASCRIPT</h5>
            </div>

            <div class="text-6xl mx-4">
              <FaGithub />
              <h5>GITHUB</h5>
            </div>
            <div class="text-6xl mx-4">
              <FaDatabase />
              <h5>MONGODB </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
