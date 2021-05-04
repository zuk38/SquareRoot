import React, {Component} from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import {Menu} from "semantic-ui-react";
import data from "../../data.json"

/*onst logo = require('../../../images/proj_icon')*/

export default class Members extends Component {
    render() {
        return (
            <div> {" "}
                {

                data.Projects.map((projects, i) => {
                    return (
                        <div key={i}>
                            {
                            projects.project.map(function (project, i) {
                                return (

                                    <div class="row">
                                        <div class="p-column left">
                                            <a href="/Projects" class="btn-back">
                                                <i class="fas fa-chevron-left"></i>Alle Prosjekter
                                            </a>
                                            <div class="menu-vertical">
                                                <a href="/Dashboard">
                                                    <i class="fas fa-columns"></i>Dashbord
                                                </a>
                                                <a href="/Members">
                                                    <i class="fas fa-users"></i>Medlemmer
                                                </a>
                                                <a href="/Orders">
                                                    <i class="fas fa-tasks"></i>Bestillinger
                                                </a>
                                                <a href="/#" class="active">
                                                    <i class="fas fa-cog"></i>Innstillinger
                                                </a>
                                            </div>
                                        </div>

                                        <div class="p-column right">
                                            <div className="p-title">
                                                <img className="project-icon"
                                                    src={icon}
                                                    alt="Prosjektikon"/>{" "}
                                                {/*GET DATA*/}
                                                <h1 className="p-h1">
                                                    {
                                                    project.project_name
                                                }</h1>
                                            </div>
                                            <br></br>

                                            <h2 className="p-h2">Role: {/*GET DATA*/}</h2>

                                            <form>
                                                <div className="p-inputBox">
                                                    <label className="p-lbl">Navn</label>
                                                    <input type="text" placeholder="Prosjektets navn.." className="p-inp-text"/>
                                                    <label className="p-lbl">Beskrivelse</label>
                                                    <input type="text" placeholder="Tilknyttet firma, prosjekt e.l..." className="p-inp-text"/>
                                                    <label className="p-lbl">Adresse</label>
                                                    <input type="text" placeholder="Prosjektets adresse.." className="p-inp-text"/>
                                                    <div className="p-flex">
                                                        <div className="p-classFlex">
                                                            <label className="p-lblFlex">PostNr</label>
                                                            <input type="text" className="p-input-inline" pattern="[0-4]*"/>
                                                            <p className="help is-danger"></p>
                                                        </div>
                                                        <div className="p-classFlex">
                                                            <label className="p-lblFlex">Poststed</label>
                                                            <input type="text" className="p-input-inline"/>
                                                        </div>
                                                    </div>
                                                    <button className="p-save-changes">
                                                        Lagre
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                )
                            })
                        } </div>
                    )
                })
            } </div>
        )
    }
}
