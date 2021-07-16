import React, { useState } from "react";
import "./projects.css";
import { UserContext, withUserConsumer } from "../../context/user";
import EditableTextField from "../../components/EditableTextField";

function Account({ context }) {
  const { user, email, phone_number, role } = context;
  const [userAttributes, setUSerAttributes] = useState({
    user: user,
    email: email,
    phone_number: phone_number,
    role: role,
  });

  let role_options = [
    {
      dbValue: "Real Estate Developer",
      displayValue: "Eiendomsutvikler",
    },
    {
      dbValue: "Landscape Architect",
      displayValue: "Landskapsarkitekt",
    },
    {
      dbValue: "Landscape Entrepreneur",
      displayValue: "Landskapsentreprenør",
    },
    {
      dbValue: "Plant Nursery",
      displayValue: "Planteskole",
    },
  ];

  let currentRole;
  role_options = role_options.map((item, index) => {
    if (item.dbValue === role) currentRole = item.displayValue;
    return <option key={index}>{item.displayValue}</option>;
  });

  return (
    <div className="acc-container">
      <div className="acc-title">
        <h1>Administrer Konto</h1>
      </div>
      <form>
        <p className="settings-p">Navn</p>
        <EditableTextField value={userAttributes.user || ""} name="user" />

        {/*
    <input
      id="name"
      type="text"
      name="user"
      placeholder="Navn..."
      value={this.state.user || ""}
      onMouseEnter={this.handleMouseOver}
      onMouseLeave={this.handleMouseOut}
      onChange={(e) => this.handleChange(e.target.name, e.target.value)}
    />*/}

        <label className="settings-lbl"></label>
        <p className="settings-p">E-post</p>
        <EditableTextField value={userAttributes.email || ""} name="email" />
        {/*<input
      id="email"
      name="email"
      placeholder="navn@firma.no"
      type="text"
      value={email || ""}
      onChange={(e) => this.handleChange(e.target.name, e.target.value)}
    />*/}

        <label className="settings-lbl"></label>
        <p className="settings-p">Mobil</p>
        <EditableTextField
          value={userAttributes.phone_number || ""}
          name="phone_number"
        />
        {/*<input
      name="phone_number"
      placeholder="+47"
      type="text"
      value={phone_number || ""}
      onChange={(e) => this.handleChange(e.target.name, e.target.value)}
    />*/}

        <label className="settings-lbl"></label>
        <p className="settings-p">Rolle</p>

        <select name="role" id="role" defaultValue={currentRole}>
          {role_options}
        </select>
      </form>
      <button type="submit" name="btn-account">
        Lagre endringer
      </button>
    </div>
  );
}

export default withUserConsumer(Account);
