import React, { Component } from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import { Menu } from "semantic-ui-react";

/*onst logo = require('../../../images/proj_icon')*/

export default class Dashboard extends Component {
  render() {
    return (
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

        <div class="p-column right">
          <img class="project-icon" src={icon} alt="Prosjektikon" />{" "}
          {/*GET DATA*/}
          <h1>Project Title</h1>
          <br></br>
          <br></br>
          <h2>Role: {/*GET DATA*/}</h2>
          <div class="concepts-frame">
            {/*GET DATA*/}
            <img
              src="../../../images/defaultBackground.png"
              alt="Bilde av grøntareal"
            />
          </div>
        </div>
      </div>
    );
  }
}
