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
            return (<div> {" "}
                {

                data.Projects.map((projects, i) => {
                        return (<div key={i}>
                            {
                            projects.project.map(
                                        function (project, i) {
                                    return (<div key={i}>
                                        {
                                        projects.greenspace.map(
                                                    function (greenspace, i) {

                                                return (<div key={i}>
                                                    {

                                                    <div class = "p-row"> 
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


                                                ​ <div class = "p-column right"> 
                                                <div className="p-title">
                                                        <img className="project-icon"
                                                            src={icon}
                                                            alt="Prosjektikon"/>{" "}
                                                        {/*GET DATA*/}
                                                        <h1 className="p-h1">
                                                            {
                                                            project.project_name
                                                        }: {
                                                            greenspace.greenspace_name
                                                        }</h1>
                                                    </div>
                                                    <br></br>
                                    
                                                <div class="greenspace_plantList">
                                                    
                                                      
                                                        {/*TABLE must GET data from GraphQL*/}
                                                        <table className="p-table">
                                                            <tr className="p-tr">
                                                                <th className="p-th">PROSJEKTNAVN</th>
                                                                <th className="p-th">ADRESSE</th>
                                                                <th className="p-th">OPPRETTET</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-td">
                                                                    {
                                                                    project.project_name
                                                                }</td>
                                                                <td className="p-td">
                                                                    {
                                                                    project.project_adress
                                                                }, {
                                                                    project.project_zip
                                                                }
                                                                    {
                                                                    project.project_city
                                                                }</td>
                                                                <td className="p-td">
                                                                    {
                                                                    project.project_start
                                                                }</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-td">
                                                                    {
                                                                    project.project_name
                                                                }</td>
                                                                <td className="p-td">
                                                                    {
                                                                    project.project_adress
                                                                }, {
                                                                    project.project_zip
                                                                }
                                                                    {
                                                                    project.project_city
                                                                }</td>
                                                                <td className="p-td">
                                                                    {
                                                                    project.project_start
                                                                }
                                                                </td>
                                                            </tr>
                                                        </table>
                                                  </div>
                                                </div>
                                                </div>
                                                    }
                                            </div>
                                            
                                                ) 
                                            }
                                        )
                                    } </div>
                                    );
                                }
                            )
                        } </div>);
                    }
                )
            }
                {" "} </div>
        );
    }
}
