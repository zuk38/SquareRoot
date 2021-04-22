import React, {Component} from 'react';

import "./projects.css";
import icon from '../../../images/proj_icon.png';
import Modal from 'react-modal';


export default class All_Projects extends Component {
    state = {
        modalOpen: false, 
        projectName: "",
    };

    updateName = (event) => {
        this.setState({projectName: event.target.value});
    }

    updateAdress = (event) => {
        this.setState({projectAdress: event.target.value});
    }

    updateZipcode = (event) => {
        this.setState({projectZipcode: event.target.value});
    }

    updateCity = (event) => {
        this.setState({projectCity: event.target.value});
    }

    openModal = () => {
        this.setState({modalOpen: true});
    }

    closeModal = () => {console.log(this.state)

        this.setState({modalOpen: false});
    }

    onSubmitForm() {
        console.log(this.state)
        this.closeModal()
    }

    render() {
        const {items} = this.state;

        return (
            <div className="projects-title">
                <img class="p-icon-main"
                    src={icon}
                    alt="Prosjektikon"/>
                <h1>PROSJEKTER</h1>

                <button className="btn-new-project"
                    onClick={
                        this.openModal
                }>
                    <i class="fas fa-plus"></i>NYTT PROSJEKT</button>


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

                        <h1>La oss lage et økosystem</h1>
                        <br/>
                        <h2>Fortell oss litt mer om prosjektet</h2>


                        <form onSubmit={this.closeModal}> 
                            <div className="p-inputBox">

                                <label className="p-lbl">Navn</label>
                                <input name="name" type="text" placeholder="Prosjektets navn.." className="p-inp-text"
                                    value={
                                        this.state.projectName || ""
                                    } onChange={this.updateName}/>


                                <label className="p-lbl">Adresse</label>
                                <input name="adress" type="text" placeholder="Prosjektets adresse.." className="p-inp-text"
                                    value={
                                        this.state.projectAdress || ""
                                    } onChange={this.updateAdress}/>

                                <div className="p-flex">
                                    <div className="p-classFlex">
                                        <label className="p-lblFlex">PostNr</label>
                                        <input name="zipcode" type="number" className="p-input-inline"
                                            value={
                                                this.state.projectZipcode || ""
                                            } onChange={this.updateZipcode}/>
                                    </div>

                                    <div className="p-classFlex">
                                        <label className="p-lblFlex">Poststed</label>
                                        <input name="city" type="text" className="p-input-inline"
                                            value={
                                                this.state.projectCity || ""
                                            } onChange={this.updateCity}/>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                    <div className="p-btn-create">
                        {/*NEED a button onClick -- save in database*/}
                        <button onClick={this.closeModal}
                            className="btn-modal-create-p">OPPRETT PROSJEKT</button>
                    </div>
                </Modal>


                <br></br>

                <h2>Velg et prosjekt for å legge til eller endre et grøntområde, eller opprett et nytt prosjekt.</h2>

                {/*TABLE must GET data from GraphQL*/}
                <table id="projects-table">
                    <tr>
                        <th>PROSJEKTNAVN</th>
                        <th>ADRESSE</th>
                        <th>BESKRIVELSE</th>
                        <th>OPPRETTET</th>
                    </tr>
                    <tr>
                        <td>Sørengkaia</td>
                        <td>Sørengkaia 63, 0166 Oslo</td>
                        <td>OBOS</td>
                        <td>04.03.2021</td>
                    </tr>
                    <tr>
                        <td>Liertoppen</td>
                        <td>Lierveien 3, 1657 Lier</td>
                        <td>Privat</td>
                        <td>12.02.2021</td>
                    </tr>
                </table>
            </div>


        )
    }

}
