import React, { Component } from 'react';
import "./projects.css";
import icon from '../../../images/proj_icon.png';
import Modul from '../../appProjects.js';
import { Container } from '../../Modal/container.js';
import { Trigger } from '../../Modal/triggerButton.js';
import { Modal } from '../../Modal/modal.js';
import TriggerButton from '../../Modal/triggerButton.js';

/*onst logo = require('../../../images/proj_icon')*/

export default class All_Projects extends Component { 
    render() {
        return (    
            <div>
            <div class="projects-title">
                <img class="project-icon" src={icon} alt="Prosjektikon"/> 
                <h1>PROSJEKTER</h1>
                <button class="btn" onclick={Modul} ><i class="fas fa-plus"></i>NYTT PROSJEKT</button>
                <br></br>
                <br></br>
                <h2>Velg et prosjekt for å legge til eller endre et grøntområde, eller opprett et nytt prosjekt.</h2>
            
            </div>
            
            {/*TABLE must GET data from GraphQL*/}
            <table id="projects-table">
            <tr>
                <th>PROSJEKTNAVN</th>
                <th>ADRESSE</th>
                <th>BESKRIVELSE</th>
                <th>OPPRETTET</th>
            </tr>
            <tr>
                <td>Sørengkaia</td>
                <td>Sørengkaia 63, 0166 Oslo</td>
                <td>OBOS</td>
                <td>04.03.2021</td>
            </tr>
            <tr>
                <td>Liertoppen</td>
                <td>Lierveien 3, 1657 Lier</td>
                <td>Privat</td>
                <td>12.02.2021</td>
            </tr>
        </table>
        </div>
        )
    }

  
}

 



