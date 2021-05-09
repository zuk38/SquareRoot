import React, {Component} from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import {Menu} from "semantic-ui-react";
import data from "../../data.json"
import {findCityFromZip} from "../../../functions/apiCalls";

/*onst logo = require('../../../images/proj_icon')*/

export default class Settings extends Component {


    render() {
                {
                return(<div> {" "}
                    {

                    data.Projects.map((projects, i) => {
                            return (<div key={i}>
                                {
                                projects.project.map(
                                            function (project, i) {
                                        return (<div key={i}>
                                            {
                                            projects.user.map(
                                                        function (user, i) {

                                                    return (<div key={i}>
                                                        {


                                                        < div class = "p-row" > <div class="p-column left">
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
                                                    ​ < div class = "p-column right" > <div className="p-title">
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

                                                        <h2 className="p-h2">Rolle: {
                                                            project.user_role
                                                        }</h2>


                                                        <div className="settings-container">

                                                            <form>
                                                                <fieldset>
                                                                    <label className="settings-lbl">
                                                                        <p className="settings-p">Prosjektnavn</p>
                                                                        <input name="project_name" type="text"/>
                                                                    </label>
                                                                    <label className="settings-lbl">
                                                                        <p className="settings-p">Adresse</p>
                                                                        <input name="project_name" type="text" placeholder="Gatenavn..."/>
                                                                    </label>

                                                                    <div className="p-flex">
                                                                        <div className="p-classFlex">
                                                                            <label className="settings-lbl">
                                                                            <p className="settings-p">Postnr</p>
                                                                            <input placeholder="Postnr..." type="text" className="p-input-inline" pattern="[0-4]*"/>
                                                                            </label>
                                                                        </div>
                                                                        <div className="p-classFlex">
                                                                            <label className="settings-lbl">
                                                                            <p className="settings-p">Poststed</p>
                                                                            <input placeholder="Poststed..." type="text" className="p-input-inline"/>
                                                                            
                                                                                </label>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                                <button type="submit">Lagre endringer</button>
                                                            </form>
                                                        </div>


                                                    </div>
                                                    </div>
                                                /*p-row*/} </div>
                                                    )
                                                }
                                            )
                                        } </div>
                                        );
                                    }
                                )
                            } </div>);
                        }
                    )
                }
                    {" "} </div>
            );
        }
    }
}
