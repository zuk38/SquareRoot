import React, {Component} from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import Modal from "react-modal";
import {findCityFromZip} from "../../../functions/apiCalls";
import data from "../../data.json";


export default class All_Projects extends Component {
    state = {
        modalOpen: false,
        name: "",
        description: "",
        address: "",
        postalCode: "",
        city: "",
        error: ""
    };


    updateModalState = (key, value) => {
        if (key == "postalCode" && value.length == 4) {
            this.setState({
                postalCode: value
            }, function () {
                findCityFromZip(value).then((response) => {
                    if (response) 
                        this.setState({city: response});
                     else 
                        this.setState({error: "invalid zip"});
                    
                });
            });
        }
        this.setState({[key]: value});
        this.setState({error: ""});
    };

    openModal = () => {
        this.setState({modalOpen: true});
    };

    closeModal = () => {
        console.log(this.state);
        this.setState({
            modalOpen: false,
            name: "",
            description: "",
            postalCode: "",
            address: "",
            city: ""
        });
    };

    componentWillMount() {
        Modal.setAppElement("body");
    }

    render() {
        const {items} = this.state;
        return (
            <div className="projects-title">
                <img class="p-icon-main"
                    src={icon}
                    alt="Prosjektikon"/>
                <h1 className="p-h1">PROSJEKTER</h1>

                <button className="btn-new-project"
                    onClick={
                        this.openModal
                }>
                    <i class="fas fa-plus"></i>NYTT PROSJEKT
                </button>

                <Modal isOpen={
                        this.state.modalOpen
                    }
                    onRequestClose={
                        this.closeModal
                    }
                    className={"modal-project"}>
                    <button onClick={
                            this.closeModal
                        }
                        className="btn-modal-close"
                        alt="Lukk">
                        <i class="fas fa-times fa-lg"></i>
                    </button>
                    <div className="p-modal-content">
                        <h1 className="p-h1">La oss lage et økosystem</h1>
                        <br/>
                        <h2 className="p-h2">Fortell oss litt mer om prosjektet</h2>
                        <form onSubmit={
                            this.closeModal
                        }>
                            <div className="p-inputBox">
                                <label className="p-lbl">Navn</label>
                                <input type="text" placeholder="Prosjektets navn.." className="p-inp-text"
                                    value={
                                        this.state.name || ""
                                    }
                                    onChange={
                                        (e) => this.updateModalState("name", e.target.value)
                                    }/>
                                <label className="p-lbl">Beskrivelse</label>
                                <input type="text" placeholder="Tilknyttet firma, prosjekt e.l..." className="p-inp-text"
                                    value={
                                        this.state.description || ""
                                    }
                                    onChange={
                                        (e) => this.updateModalState("description", e.target.value)
                                    }/>
                                <label className="p-lbl">Adresse</label>
                                <input type="text" placeholder="Prosjektets adresse.." className="p-inp-text"
                                    value={
                                        this.state.address || ""
                                    }
                                    onChange={
                                        (e) => this.updateModalState("address", e.target.value)
                                    }/>
                                <div className="p-flex">
                                    <div className="p-classFlex">
                                        <label className="p-lblFlex">PostNr</label>
                                        <input type="text" className="p-input-inline" pattern="[0-4]*"
                                            value={
                                                this.state.postalCode || ""
                                            }
                                            onChange={
                                                (e) => this.updateModalState("postalCode", e.target.value)
                                            }/>
                                        <p className="help is-danger">
                                            {
                                            this.state.error
                                        }</p>
                                    </div>
                                    <div className="p-classFlex">
                                        <label className="p-lblFlex">Poststed</label>
                                        <input type="text" className="p-input-inline"
                                            value={
                                                this.state.city || ""
                                            }
                                            onChange={
                                                (e) => this.updateModalState("city", e.target.value)
                                            }/>
                                    </div>
                                </div>
                                <a href="/Dashboard"><button type="submit" className="btn-modal-create-p" onClick={
                                        this.closeModal
                                    }
                                    >OPPRETT PROSJEKT</button></a>
                                
                                
                            </div>

                        </form>
                    </div>
                </Modal>
                <br></br>
                <h2 className="p-h2">
                    Velg et prosjekt for å legge til eller endre et grøntområde, eller
                              opprett et nytt prosjekt.
                </h2>

                <div> {" "}
                    {
                    data.Projects.map((projects, i) => {
                        return (
                            <div key={i}>
                                {
                                projects.project.map(function (project, i) {
                                    return (
                                        <div key={i}>

                                            {/*TABLE must GET data from GraphQL*/}
                                            <table className="p-table">
                                                <tr className="p-tr">
                                                    <th className="p-th">PROSJEKTNAVN</th>
                                                    <th className="p-th">BESKRIVELSE</th>
                                                    <th className="p-th">ADRESSE</th>
                                                    <th className="p-th">OPPRETTET</th>
                                                </tr>
                                                <tr>
                                                    <td className="p-td">
                                                        {
                                                        project.project_name
                                                    }</td>
                                                    <td className="p-td">
                                                        {
                                                        project.project_description
                                                    }</td>
                                                    <td className="p-td">
                                                        {
                                                        project.project_adress
                                                    }, {
                                                        project.project_zip
                                                    }
                                                         {
                                                        project.project_city
                                                    }</td>
                                                    <td className="p-td">
                                                        {
                                                        project.project_start
                                                    }</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-td">
                                                        {
                                                        project.project_name2
                                                    }</td>
                                                    <td className="p-td">
                                                        {
                                                        project.project_description2
                                                    }</td>
                                                    <td className="p-td">
                                                        {
                                                        project.project_adress2
                                                    }, {
                                                        project.project_zip
                                                    } 
                                                        {
                                                         project.project_city
                                                    }</td>
                                                    <td className="p-td">
                                                        {
                                                        project.project_start2
                                                    }</td>
                                                </tr>
                                            </table>
                                        </div>
                                    );
                                })
                            } </div>
                        );
                    })
                }
                    {" "} </div>
            </div>
        );
    }
}
