import React, { Component } from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import { Menu } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import All_Projects from "./All_Projects";
import data from "../../data.json";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {" "}
        {data.Projects.map((projects, i) => {
          return (
            <div key={i}>
              {projects.project.map(function(project, i) {
                return (
                  <div key={i}>
                    <div class="row">
                      <div class="p-column left">
                        <a href="/Projects" class="btn-back">
                          <i class="fas fa-chevron-left"></i>Alle Prosjekter
                        </a>
                        <div class="menu-vertical">
                          <a href="#" class="active">
                            <i class="fas fa-columns"></i>Dashbord
                          </a>
                          <a href="/Members">
                            <i class="fas fa-users"></i>Medlemmer
                          </a>
                          <a href="/Orders">
                            <i class="fas fa-tasks"></i>Bestillinger
                          </a>
                          <a href="/Settings">
                            <i class="fas fa-cog"></i>Innstillinger
                          </a>
                        </div>
                      </div>
​
                      <div class="p-column right">
                        <img
                          class="project-icon"
                          src={icon}
                          alt="Prosjektikon"
                        />{" "}
                        {/*GET DATA*/}
                        <h1>{project.project_name}</h1>
                        <br></br>
                        <br></br>
                        <h2>Role: {/*GET DATA*/}</h2>
                        <ul className="greensp-container">
                          <li className="proj-col">
                            <img
                              src={project.project_img}
                              className="project_img"
                            />
                            {}
                          </li>
                          <li className="proj-col">2 of 5</li>
                          <li className="proj-col">3 of 5</li>
                          <li className="proj-col">4 of 5</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}{" "}
      </div>
    );
  }
}