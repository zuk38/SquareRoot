import React, {Component} from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import {Menu} from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import All_Projects from "./All_Projects";
import data from "../../data.json";


export default class Dashboard extends Component {
    render() {
        return (
            <div> {" "}
                {
                
                    data.Projects.map((projects, i) => {
                    return (
                        <div key={i}>
                            {
                            projects.project.map(function (project, i) {
                                return (
                                    <div key={i}>{
                                        projects.greenspace.map(function (greenspace, i) { 
                                        
                                            return (
                                            <div key = {i}>
                                                {
                                                
                                            
                                        <div class="p-row">
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
                                                <div className="p-title">
                                                <img className="project-icon"
                                                    src={icon}
                                                    alt="Prosjektikon"/>{" "}
                                                {/*GET DATA*/}
                                                <h1 className="p-h1">
                                                    {
                                                    project.project_name
                                                }</h1></div>
                                                <br></br>
    
                                                <h2 className="p-h2">Role: {/*GET DATA*/}</h2>
                                                <div className="green-container">

                                                <div className="green-item">
                                                        <img src={
                                                                greenspace.greenspace_img0
                                                            }
                                                            className="project_img"/>
                                                            <div className="green-info">
                                                            <h3 className="p-h3">Legg til grøntområde</h3>
                                                            <h4 className="p-h4"></h4>
                                                            </div>

                                                    </div>


                                                    <a href="greenspace" /*ONLY FOR 1 HERE -- NEEDS TO BE SPECIFIC FOR ALL*/ >
                                                        <div className="green-item">
                                                        <img src={
                                                                greenspace.greenspace_img
                                                            }
                                                            className="project_img"/>
                                                            <div className="green-info">
                                                            <h3 className="p-h3">{greenspace.greenspace_name}</h3>
                                                            <h4 className="p-h4">{greenspace.greenspace_description}</h4>
                                                            </div>

                                                    </div>
                                                    </a>
                                                    <div className="green-item"><img src={
                                                                greenspace.greenspace_img2
                                                            }
                                                            className="project_img"/>
                                                            <div className="green-info">
                                                            <h3 className="p-h3">{greenspace.greenspace_name2}</h3>
                                                            <h4 className="p-h4">{greenspace.greenspace_description2}</h4>
                                                            </div>

                                                   </div>
                                                    <div className="green-item"><img src={
                                                                greenspace.greenspace_img3
                                                            }
                                                            className="project_img"/>
                                                            <div className="green-info">
                                                            <h3 className="p-h3">{greenspace.greenspace_name3}</h3>
                                                            <h4 className="p-h4">{greenspace.greenspace_description3}</h4>
                                                            </div>

                                                   </div>
                                                    <div className="green-item"><img src={
                                                                greenspace.greenspace_img4
                                                            }
                                                            className="project_img"/>
                                                            <div className="green-info">
                                                            <h3 className="p-h3">{greenspace.greenspace_name4}</h3>
                                                            <h4 className="p-h4">{greenspace.greenspace_description4}</h4>
                                                            </div>

                                                   </div>
                                                </div>
                                            </div>
                                        </div> /*p-row*/
                            } </div> )})}
                                        
                                    </div>
                                );
                            })
                        } </div>
                    );
})
            }
                {" "} </div>
        );
    }
}
