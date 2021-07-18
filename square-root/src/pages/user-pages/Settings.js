import React, { Component } from "react";
import "./projects.css";
import icon from "../../images/proj_icon.png";
import data from "../data.json";
import LeftMenu from "./LeftMenu";

export default class Settings extends Component {
  constructor(props) {
    super(props)
  }
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
                              <LeftMenu {...props} />
                              <div class="p-column right">
                                {" "}
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
                                <div className="settings-container">
                                  <form>
                                    <fieldset>
                                      <label className="settings-lbl">
                                        <p className="settings-p">
                                          Prosjektnavn
                                        </p>
                                        <input
                                          name="project_name"
                                          type="text"
                                          className="p-text-input"
                                        />
                                      </label>
                                      <label className="settings-lbl">
                                        <p className="settings-p">Adresse</p>
                                        <input
                                          name="project_name"
                                          type="text"
                                          placeholder="Gatenavn..."
                                          className="p-text-input"
                                        />
                                      </label>

                                      <div className="p-flex">
                                        <div className="p-classFlex">
                                          <label className="settings-lbl">
                                            <p className="settings-p">Postnr</p>
                                            <input
                                              placeholder="Postnr..."
                                              type="text"
                                              className="p-input-inline p-text-input"
                                              pattern="[0-4]*"
                                            />
                                          </label>
                                        </div>
                                        <div className="p-classFlex">
                                          <label className="settings-lbl">
                                            <p className="settings-p">
                                              Poststed
                                            </p>
                                            <input
                                              placeholder="Poststed..."
                                              type="text"
                                              className="p-input-inline p-text-input"
                                            />
                                          </label>
                                        </div>
                                      </div>
                                    </fieldset>
                                    <button type="submit">
                                      Lagre endringer
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                            /*p-row*/
                          }{" "}
                        </div>
                      );
                    })}{" "}
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
