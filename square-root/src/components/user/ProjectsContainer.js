import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 
import { CSSTransitionGroup  } from 'react-transition-group'; 
import { withProjectConsumer } from "../../context/projects";

var ReactCSSTransitionGroup = require('react-transition-group'); 

function ProjectsContainer({ context }) {
  const { projects, loading } = context;

  if (!projects.length || !projects) {
    return <h3>No Projects Created</h3>;
  }

  return (
    <table className="p-table">
      
      <tbody>
        <tr className="p-tr">
          <th className="p-th">PROSJEKTNAVN</th>
          <th className="p-th">ADRESSE</th>
          <th className="p-th">OPPRETTET</th>
        </tr>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={500}
          transitionAppear={true}
          component="tr"
        >
        
          {projects.map(
            ({ id, name, address, city, postalCode, createdAt }) => (
              
              <tr key={id}>
                <td className="p-td">{name}</td>
                <td className="p-td">
                  {address}, {postalCode} {city}
                </td>
                <td className="p-td">{createdAt.split("T")[0]}</td>
              </tr>
              
            )
          )}
          </ReactCSSTransitionGroup>
      </tbody>
    </table>
  );
}

export default withProjectConsumer(ProjectsContainer);
