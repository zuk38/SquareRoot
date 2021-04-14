import React, { Component } from 'react';
import "./projects.css";
import icon from '../../../images/proj_icon.png';

/*onst logo = require('../../../images/proj_icon')*/

export default class All_Projects extends Component { 
    render() {
        return (    
            <div class="projects_title">
            <img class="project-icon" src={icon} alt="Prosjektikon"/> 
            <h1>PROSJEKTER</h1>
          <br></br>
            <h2>
                Velg et prosjekt for å legge til eller endre et grøntområde, eller opprett et nytt prosjekt. 
            </h2>
            </div>
        )
    }
}