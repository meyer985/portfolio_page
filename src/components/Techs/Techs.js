import React from "react";
import "./Techs.css";

function Techs(props) {
  const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "MongoDB", "Redux"];
  return (
    <section className="techs">
      <div className="section__text-frame frame">
      <h2 className="section_header">TECHNOLOGIES</h2>
      </div>
     
      <div className="tech__container">
        {techs.map((item, index) => {
          return (
            <div className="tech__item" key={index + 15}>
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Techs;
