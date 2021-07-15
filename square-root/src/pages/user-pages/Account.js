import React, { Component } from "react";
import "./projects.css";
import { UserContext } from "../../context/user";

export default class Account extends Component {
  static contextType = UserContext;

  render() {
    const { user, email, phone_number, role } = this.context;
 
    let role_options = [
      {
        value: "RED",
        dbValue: "Real Estate Developer",
        displayValue: "Eiendomsutvikler",
      },
      {
        value: "LARK",
        dbValue: "Landscape Architect",
        displayValue: "Landskapsarkitekt",
      },
      {
        value: "LENT",
        dbValue: "Landscape Entrepreneur",
        displayValue: "Landskapsentreprenør",
      },
      {
        value: "PN",
        dbValue: "Plant Nursery",
        displayValue: "Planteskole",
      },
    ];

    let currentRole;
    role_options = role_options.map((item, index) => {
      if (item.dbValue === role) currentRole = item.displayValue
      return (
        <option key={index}>
          {item.displayValue}
        </option>
      );
    });

    return (
      <>
        <div className="acc-container">
          <div className="acc-title">
            <h1 className="p-h1">Administrer Konto</h1>
          </div>
          <form>
            <fieldset>
              <p className="settings-p">Navn</p>
              <div className="p-flex">
                <div className="p-classFlex">
                  <input
                    type="text"
                    placeholder="Fornavn..."
                    className="p-input-inline"
                    pattern="[0-4]*"
                    defaultValue={user}
                  />
                </div>
              </div>

              <label className="settings-lbl"></label>
              <p className="settings-p">E-post</p>
              <input
                name="email"
                placeholder="navn@firma.no"
                type="text"
                defaultValue={email}
              />

              <label className="settings-lbl"></label>
              <p className="settings-p">Mobil</p>
              <input
                name="p-input-inline"
                placeholder="+47"
                type="text"
                defaultValue={phone_number}
              />

              <label className="settings-lbl"></label>
              <p className="settings-p">Rolle</p>

              <select name="role" id="role" defaultValue={currentRole}>
                {role_options}
              </select>
            </fieldset>
            <br />
            <button type="submit" name="btn-account">
              Lagre endringer
            </button>
          </form>
        </div>
      </>
    );
  }
}
