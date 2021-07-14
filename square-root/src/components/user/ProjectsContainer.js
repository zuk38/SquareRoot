import React from "react";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";
import { withProjectConsumer } from "../../context/projects";

var ReactCSSTransitionGroup = require("react-transition-group");

function ProjectsContainer({ context }) {
  const { projects, loading } = context;

  if (!projects.length || !projects) {
    return (
      <div className="p-table">
        <h3>No Projects Created</h3>
      </div>
    );
  }

  return (
    <table className="p-table">
      <tbody>
        <tr className="p-tr">
          <th className="p-th">PROSJEKTNAVN</th>
          <th className="p-th">ADRESSE</th>
          <th className="p-th">OPPRETTET</th>
        </tr>
        {projects.map(({ id, name, address, city, postalCode, createdAt }) => (
          <tr key={id}>
            <Td className="p-td" to={`/dashboard/${name}`}>{name}</Td>
            <Td className="p-td" to={`/dashboard/${name}`}>
              {address}, {postalCode} {city}
            </Td>
            <Td className="p-td" to={`/dashboard/${name}`}>{createdAt.split("T")[0]}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Td({ children, to, className }) {
  // Conditionally wrapping content into a link
  const ContentTag = to ? Link : "div";

  return (
    <td>
      <ContentTag className={className} to={to}>{children}</ContentTag>
    </td>
  );
}

export default withProjectConsumer(ProjectsContainer);
