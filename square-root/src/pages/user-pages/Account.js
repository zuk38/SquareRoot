import React, { Component } from "react";
import "./projects.css";

/*onst logo = require('../../../images/proj_icon')*/

export default class Account extends Component {
  render() {
    return (
      <div>
        {" "}
        {
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
                    />
                  </div>
                  <div className="p-classFlex">
                    <input
                      type="text"
                      placeholder="Etternavn..."
                      className="p-input-inline"
                    />
                  </div>
                </div>

                <label className="settings-lbl"></label>
                <p className="settings-p">E-post</p>
                <input name="email" placeholder="navn@firma.no" type="text" />

                <label className="settings-lbl"></label>
                <p className="settings-p">Mobil</p>
                <input name="p-input-inline" placeholder="+47" type="number" />

                <label className="settings-lbl"></label>
                <p className="settings-p">Rolle</p>

                <select>
                  <option value="RED">Eiendomsutvikler</option>
                  <option value="LARK">Landskapsarkitekt</option>
                  <option value="LENT">Landskapsentreprenør</option>
                  <option value="Other">Annet</option>
                </select>
              </fieldset>
              <br />
              <button type="submit" name="btn-account">
                Lagre endringer
              </button>
            </form>
          </div>
        }{" "}
      </div>
    );
  }
}
