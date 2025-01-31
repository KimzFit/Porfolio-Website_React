import React from "react";
import { skills } from "../data";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar 
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={8}
              />
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
