import React, { Component } from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import data from "../../data.json";

/*onst logo = require('../../../images/proj_icon')*/

export default class Orders extends Component {
  render() {
    return (
      <div>
        {" "}
        {data.Projects.map((projects, i) => {
          return (
            <div key={i}>
              {projects.project.map(function(project, i) {
                return (
                  <div key={i}>
                    {projects.order.map(function(order, i) {
                      return (
                        <div key={i}>
                          {
                            <div class="p-row">
                              <div class="p-column left">
                                <a href="/Projects" class="btn-back">
                                  <i class="fas fa-chevron-left"></i>Alle
                                  Prosjekter
                                </a>
                                <div class="menu-vertical">
                                  <a href="/Dashboard">
                                    <i class="fas fa-columns"></i>Dashbord
                                  </a>
                                  <a href="/Members">
                                    <i class="fas fa-users"></i>Medlemmer
                                  </a>
                                  <a href="/#" class="active">
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

                                <h2 className="p-h2">Role: {/*GET DATA*/}</h2>

                                <table className="p-table">
                                  <tr className="p-tr">
                                    <th className="p-th">ORDRE NR</th>
                                    <th className="p-th">GRØNTOMRÅDE</th>
                                    <th className="p-th">BESTILLINGSDATO</th>
                                    <th className="p-th">STATUS</th>
                                  </tr>
                                  <tr>
                                    <td className="p-td">{order.orderID}</td>
                                    <td className="p-td">
                                      {order.greenspace_ordered} -{" "}
                                      {order.greenspace_description}
                                    </td>
                                    <td className="p-td">
                                      {order.order_placed_date}
                                    </td>
                                    <td className="p-td">
                                      {order.order_status}
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="p-td">{order.orderID2}</td>
                                    <td className="p-td">
                                      {order.greenspace_ordered2} -{" "}
                                      {order.greenspace_description2}
                                    </td>
                                    <td className="p-td">
                                      {order.order_placed_date2}
                                    </td>
                                    <td className="p-td">
                                      {order.order_status2}
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="p-td">{order.orderID3}</td>
                                    <td className="p-td">
                                      {order.greenspace_ordered3} -{" "}
                                      {order.greenspace_description3}
                                    </td>
                                    <td className="p-td">
                                      {order.order_placed_date3}
                                    </td>
                                    <td className="p-td">
                                      {order.order_status3}
                                    </td>
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
