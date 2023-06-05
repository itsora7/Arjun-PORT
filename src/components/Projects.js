import React, { useEffect, useState } from "react";
import { Data } from "./Data";
const Projects = ({ handleOnFilter }) => {
  const [data, setData] = useState([]);
  const [pro, setPro] = useState([]);

  useEffect(() => {
    setData(Data);
    setPro([...new Set(Data.map((item) => item.title))]);
  }, []);

  const projectFilter = (itemData) => {
    const filterData = Data.filter((item) => item.title === itemData);
    setData(filterData);
  };

  return (
    <section className="section" id="projects">
      <div className="Projects">
        <div className="prowrapper">
          <div className="filterItem">
            <ul className="">
              <li>
                <button onClick={() => setData(Data)}>All</button>
              </li>
              {pro.map((item) => (
                <li>
                  <button
                    onClick={() => {
                      projectFilter(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="proContainer">
            {data.map((item) => (
              <div key={item.id} className="pic">
                {" "}
                <img src={item.image} alt="project" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
