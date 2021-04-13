import React, { Component } from 'react'
import "./projects.css";
import icon from '../images/proj_icon.png'

export default class All_Projects extends Component {
    render() {
        return (
            <div class="projects_title">
            <img class="project-icon" href="../images/proj_icon.png"/> 
            <h1>MINE PROSJEKTER</h1>
          
            <h2>
                Velg et prosjekt for å legge til eller endre et grøntområde, eller opprett et nytt prosjekt. 
            </h2>
            

            </div>
        )
    }
}