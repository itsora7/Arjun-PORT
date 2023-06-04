import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Data } from "./Data";
const Projects = ({ handleOnFilter }) => {
  const [data, setData] = useState([]);
  const [pro, setPro] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);
  return (
    <section className="section" id="projects">
      <div className="Data">
        <div className="prowrapper">
          <div className="proContainer">
            {data.map((item) => (
              <img src={item.image} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
