import React, { Component } from "react";
import "./projects.css";
import icon from "../../images/proj_icon.png";
import data from "../data.json";
import LeftMenu from "./LeftMenu";

export default class Members extends Component {
  constructor(props) {
    super(props)
  };
  
  render() {
    let props = this.props
        return (
      <div>
        {" "}
        {data.Projects.map((projects, i) => {
          return (
            <div key={i}>
              {projects.project.map(function(project, i) {
                return (
                  <div key={i}>
                    {projects.user.map(function(user, i) {
                      return (
                        <div key={i}>
                          {
                            <div class="p-row">
                              {" "}
                              <LeftMenu {...props}/>​ ​
                              <div class="p-column right">
                                <div className="p-title">
                                  <img
                                    className="project-icon"
                                    src={icon}
                                    alt="Prosjektikon"
                                  />{" "}
                                  {/*GET DATA*/}
                                  <h1 className="p-h1">
                                    {project.project_name}
                                  </h1>
                                </div>
                                <br></br>

                                <h2 className="p-h2">
                                  Rolle: {project.user_role}
                                </h2>

                                <div className="p-container">
                                  <button className="btn-p-invite">
                                    <i class="fas fa-user-plus"></i>Inviter
                                    medlemmer
                                  </button>
                                </div>
                                <table className="p-table">
                                  <tr>
                                    <td className="p-td">
                                      {user.user_first_name}{" "}
                                      {user.user_last_name}
                                    </td>
                                    <td className="p-td">{user.user_role}</td>
                                  </tr>
                                  <tr>
                                    <td className="p-td">
                                      {user.user_first_name2}{" "}
                                      {user.user_last_name2}
                                    </td>
                                    <td className="p-td">{user.user_role2}</td>
                                  </tr>
                                  <tr>
                                    <td className="p-td">
                                      {user.user_first_name3}{" "}
                                      {user.user_last_name3}
                                    </td>
                                    <td className="p-td">{user.user_role3}</td>
                                  </tr>
                                </table>
                              </div>
                            </div> /*p-row*/
                          }{" "}
                        </div>
                      );
                    })}
                  </div>
                );
              })}{" "}
            </div>
          );
        })}{" "}
      </div>
    );
  }
}
