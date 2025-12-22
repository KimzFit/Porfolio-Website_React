import React from "react";
import { skills } from "../data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CiImageOff } from "react-icons/ci";


const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage, icon }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              {/* <CircularProgressbar 
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={8}
              /> */}
              {icon || <CiImageOff size={100}/>}
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
