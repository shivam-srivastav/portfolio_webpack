import React, { Component } from "react";
import "./Skills.scss";
import html from "../../Assets/html-icon.png";
import css from "../../Assets/css-icon.png";
import js from "../../Assets/js-icon.png";
import react from "../../Assets/react-icon.png";
import node from "../../Assets/node-icon.png";
import mongo from "../../Assets/mongo-icon.png";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="content">
          <li>
            <AiFillHtml5 color="#dd502a" size="5rem" />
            <p> HTML5</p>
          </li>
          <li>
            <FaCss3Alt color="#2296f3" size="5rem" />
            <p> CSS</p>
          </li>
          <li>
            <div className="js">
              <SiJavascript color="rgb(238, 216, 55)" size="5rem" />
            </div>
            <p> JavaScript</p>
          </li>
          <li>
            <FaReact color="#5ed3f3" size="5rem" />
            <p> React</p>
          </li>
          <li>
            <FaNodeJs color="rgb(138, 197, 42)" size="5rem" />

            <p> Node</p>
          </li>
          <li>
            <DiMongodb color="#4ca343" size="5rem" />
            <p> MongoDB</p>
          </li>
          <li>
            <i>html</i>
            <p>express</p>
          </li>
          <li>
            <i>html</i>
            <p>express</p>
          </li>
        </div>
      </div>
    );
  }
}

export default Skills;
