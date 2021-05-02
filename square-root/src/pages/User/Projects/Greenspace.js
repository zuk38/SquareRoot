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
                                                        <div className="greensp-page">

                                                    <div class = "p-header"> 
                                    <div class="p-column left">
                                                        <a href="/Dashboard" class="btn-back">
                                                            <i class="fas fa-chevron-left"></i>Dashbord
                                                        </a>
                                                        
                                                        <h2>{
                                                            
                                                        }</h2>
                                                    </div>


                                                ​ <div class = "p-column right"> 
                                                
                                                        <h1 className="p-h1">
                                                            {
                                                            greenspace.greenspace_name
                                                        }</h1>
                                                   
                                                    
                                                    </div>
                                                    </div>
                                                    
                                    <div class="greensp-center">
                                               
                                                        <table className="p-table">
                                                            <tr className="p-tr">
                                                                <th className="p-th">PLANTE</th>
                                                                <th className="p-th">ANTALL</th>
                                                                <th className="p-th">LAGT TIL</th>
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
                                                
                                                
                                                    </div>}
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
