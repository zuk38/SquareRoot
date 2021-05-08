import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { withProjectConsumer } from "../../context/projects";

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
        {projects.map(({ id, name, address, city, postalCode, start_date }) => (
          <tr key={id}>
            <td className="p-td">{name}</td>
            <td className="p-td">
              {address}, {postalCode} {city}
            </td>
            <td className="p-td">{start_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default withProjectConsumer(ProjectsContainer);
