import React, { Component } from 'react';
import "./projects.css";
import icon from '../../../images/proj_icon.png';
import { Menu } from 'semantic-ui-react'


/*onst logo = require('../../../images/proj_icon')*/

export default class Dashboard extends Component { 

    render() {
    
        return (
           <div class="row">
             {/*<div class="column left">
            <div class="menu-vertical">
                <a href="#" class="active"><i class="fas fa-users"></i>Dashbord</a>
                <a href="/Members"><i class="fas fa-users"></i>Medlemmer</a>
                <a href="/Orders"><i class="fas fa-tasks"></i>Bestillinger</a>
                <a href="/Settings"> <i class="fas fa-cog"></i>Instillinger</a>
                </div>
            </div>
        */}
            <div class="projects-title column right">
                
                <img class="project-icon" src={icon} alt="Prosjektikon"/> 
                {/*GET DATA*/}
                <h1>Project Title</h1>
                <button class="btn"><i class="fas fa-plus"></i>NYTT PROSJEKT</button>
                <div id="Modal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p class={FormData}></p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <h2>Role: {/*GET DATA*/}</h2>

                
            </div>
            </div>
        
        )
    }
}