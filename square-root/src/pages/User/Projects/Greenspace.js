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
                                                
                                            
                                        <div class="greenspace">

                                            <div className="gr-cont-top">
                                           
                                                <a href="/Dashboard" class="btn-back">
                                                    <i class="fas fa-chevron-left"></i>Dashbord
                                                </a>
                                                </div>

                                              

                                                <div className="gr-cont-bottom">
                                                                              
                                                <h2 className="p-h2">{greenspace.greenspace_name}</h2>
                                                {/*TABLE must GET data from GraphQL*/}
                                            <table className="p-table">
                                                <tr className="p-tr">
                                                    <th className="p-th">PROSJEKTNAVN</th>
                                                    <th className="p-th">ADRESSE</th>
                                                    <th className="p-th">OPPRETTET</th>
                                                </tr>
                                                <tr>
                                                    <td className="p-td">{project.project_name}</td>
                                                    <td className="p-td">{project.project_adress}, {project.project_zip} {project.project_city}</td>
                                                    <td className="p-td">{project.project_start}</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-td">{project.project_name}</td>
                                                    <td className="p-td">{project.project_adress}, {project.project_zip} {project.project_city}</td>
                                                    <td className="p-td">{project.project_start}</td>
                                                </tr>
                                            </table>
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
