import React from "react";
import { withProjectConsumer } from "../../context/projects";
import { useHistory } from "react-router-dom";
import Loading from "../Loading";

function ProjectsContainer({ context }) {
  const { projects, loading } = context;
  const history = useHistory();

  const openProjectDashboard = (name) => {
    history.push(`/dashboard/${name}`);
  };

  if (loading) return <Loading />;

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
        <tr>
          <th className="p-th">PROSJEKTNAVN</th>
          <th className="p-th">ADRESSE</th>
          <th className="p-th">OPPRETTET</th>
        </tr>
        {projects.map(({ id, name, address, city, postalCode, createdAt }) => (
          <tr
            key={id}
            className="p-tr"
            onClick={() => openProjectDashboard(name)}
          >
            <td className="p-td">{name}</td>
            <td className="p-td">
              {address}, {postalCode} {city}
            </td>
            <td className="p-td">{createdAt.split("T")[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default withProjectConsumer(ProjectsContainer);
