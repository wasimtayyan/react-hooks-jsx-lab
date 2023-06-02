import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2> About Me</h2>
    <p>anything can passed here</p>
    <img src ={image}  alt="i made this"></img>
  </div>;
}

export default About;
