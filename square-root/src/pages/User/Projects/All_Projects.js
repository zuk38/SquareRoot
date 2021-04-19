import React, {Component} from 'react';
import "./projects.css";
import icon from '../../../images/proj_icon.png';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '70%',
    }
};

export default class All_Projects extends Component {
    state = {
        modalOpen: false
    };

    openModal = () => {
        this.setState({modalOpen: true});
    }

    closeModal = () => {
        this.setState({modalOpen: false});
    }

    render() {
        return (


            <div class="projects-title">
                <img class="p-icon-main"
                    src={icon}
                    alt="Prosjektikon"/>
                <h1>PROSJEKTER</h1>
                <button class="btn-projects"
                    onClick={
                        this.openModal
                }>
                    <i class="fas fa-plus"></i>NYTT PROSJEKT</button>

                <div class="modal">
                    <Modal isOpen={
                            this.state.modalOpen
                        }
                        onRequestClose={
                            this.closeModal
                        }
                        style={customStyles}
                        contentLabel="Example Modal"
                        >

                        <button onClick={
                                this.closeModal
                            }
                            class="btn-modal-close" alt="Lukk">
                            <i class="fas fa-times fa-lg"></i>
                        </button>


                        <h1>La oss lage et økosystem</h1>
                        <br/>
                        <h2>Fortell oss litt mer om prosjektet</h2>

                        <div>I am a modal</div>
                        <form>
                            <input type="String">Navn</input>
                            <input type="String">Adresse</input>
                            <input type="String">PostNr</input>
                            <input type="String">Poststed</input>
                            <button>tab navigation</button>
                            <button>the modal</button>
                        </form>
                    </Modal>
                </div>

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
