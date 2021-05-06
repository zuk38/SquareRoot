import React, { Component } from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import { Menu } from "semantic-ui-react";
import data from "../../data.json";
import Modal from "react-modal";
import Dashboard from "./Dashboard";

class Dashboard_Modal extends Component {

    state = {
        modalOpen: false,
        name: "",
        description: "",
        address: "",
        postalCode: "",
        city: "",
        error: ""
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

    render () {
        return (
            <div>
                
                
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
            </div>
        )
    }

}
export default Dashboard_Modal;