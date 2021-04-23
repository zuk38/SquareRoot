/*import React, { Component } from 'react';
import "./projects.css";
import icon from '../../../images/proj_icon.png';
import Modal from 'react-modal';


export default class All_Projects extends Component { 
    state = {
        modalOpen: false
    };

    openModal = () => {
        this.setState({
            modalOpen: true,
        });
    }

    closeModal = () => {
        this.setState({
            modalOpen: false,
        });
    }

    render() {
        return (    
        <div class="row">

           {/* <div class="column left"/> *//*}
            <div class="projects-title column right">
                <img class="project-icon" src={icon} alt="Prosjektikon"/> 
                <h1>PROSJEKTER</h1>
                <button class="btn-projects" onClick={this.openModal}><i class="fas fa-plus"></i>NYTT PROSJEKT</button>
               
               <div class="modal"> 
               <Modal
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >

                    <h1>La oss lage et økosystem</h1>
                    <br/>
                    <h2>Fortell oss litt mer om prosjektet</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
        </Modal>
        </div>
                
                <br></br>
                <br></br>
                
                <h2>Velg et prosjekt for å legge til eller endre et grøntområde, eller opprett et nytt prosjekt.</h2>
    
           
            
            {/*TABLE must GET data from GraphQL*//*}
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
        </div>
        )
    }
    
    }
*/

 



