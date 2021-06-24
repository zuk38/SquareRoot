import React, {Component} from "react";
import "./projects.css";
import "../../../styles/Customize.css";
import icon from "../../../images/proj_icon.png";
import Modal from "react-modal";
import {findCityFromZip} from "../../../functions/apiCalls";
import data from "../../data.json";
export default class All_Projects extends Component {
    
    /*THIS NEEDS TO BE ADJUSTED TO PLANT LIST*/
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

    render() {
        const {items} = this.state;
        return(
        < div class = "p-row" > <div class="p-column left">
            <a href="/Projects" class="btn-back">
                <i class="fas fa-chevron-left"></i>Alle Prosjekter
            </a>
            <div class="menu-vertical">
                <a href="#" class="active">
                    <i class="fas fa-columns"></i>Dashbord
                </a>
                <a href="/Members">
                    <i class="fas fa-users"></i>Medlemmer
                </a>
                <a href="/Orders">
                    <i class="fas fa-tasks"></i>Bestillinger
                </a>
                <a href="/Settings">
                    <i class="fas fa-cog"></i>Innstillinger
                </a>
            </div>
        </div>
    ​ < div class = "p-column right" > <div className="title-container-greenspace">
            <div className="p-title">
                <img className="project-icon"
                    src={icon}
                    alt="Prosjektikon"/>{" "}
                
                <h1 className="p-h1">
                    
                    Sørengkaia
                </h1>
            </div>
            <br></br>

            <h2 className="p-h2">Rolle: Eiendomsutvikler</h2>

{/* --- REMOVING "ADD GREENSPACE" BUTTON ---
B/c: The user should understand that in order to add greenspace/plant, 
they should navigate through the menu, rather than us setting up another route for them to take.
           
<button className="btn-new-greenspace">
                <i class="fas fa-plus"></i>Legg til grøntområde
            </button>
        </div>

        <br/>

        */}
        <div className="green-container">



{/*EVERY GREEN ITEM SHOULD BE A BUTTON*/}
            <button onClick={
                    this.openModal
                } className="btn-dash-greenspace"
                
            >
                <div className="green-item">
                    <img src={
                        "../../../images/rooftop.png"
                        }
                        className="project_img"/>
                    <div className="green-info">
                        <h3 className="p-h3">
                            Oslo Takterrasse</h3>
                        <h4 className="p-h4">
                            
                            Vestre del
                        </h4>
                    </div>

                </div>
            </button>

            <button onClick={
                    this.openModal
                } className="btn-dash-greenspace"
                
            >
                 <div className="green-item"><img src={
                        "../../../images/greenWall.png"
                    }
                    className="project_img"/>
                <div className="green-info">
                    <h3 className="p-h3">
                        Grønn vegg</h3>
                    <h4 className="p-h4">
                        2. etg</h4>
                </div>

            </div>
            </button>

            <button onClick={
                    this.openModal
                } className="btn-dash-greenspace"
                
            >
                 <div className="green-item"><img src={
                       "../../../images/biodiversity.png"
                    }
                    className="project_img"/>
                <div className="green-info">
                    <h3 className="p-h3">
                        Biomangfoldig hage</h3>
                    <h4 className="p-h4">
                        Uteomårde 4. etg</h4>
                </div>

            </div>
            </button>

            <button onClick={
                    this.openModal
                } className="btn-dash-greenspace"
                
            >
                  <div className="green-item"><img src={
                
                "../../../images/plant-img1.png"
            }
            className="project_img"/>
        <div className="green-info">
            <h3 className="p-h3">
                Kjøkkenhage</h3>
            <h4 className="p-h4">
                2. etg vestover</h4>
        </div>

    </div>
            </button>

            <button onClick={
                    this.openModal
                } className="btn-dash-greenspace"
                
            >
                  <div className="green-item"><img src={
                
                "../../../images/musa.png"
            }
            className="project_img"/>
        <div className="green-info">
            <h3 className="p-h3">
                Planter</h3>
            <h4 className="p-h4">
                Inneplanter</h4>
        </div>

    </div>
            </button>

           
            
          

<Modal isOpen={
                        this.state.modalOpen
                    }
                    onRequestClose={
                        this.closeModal
                    }
                    className={"modal-dashboard"}>
                    <button onClick={
                            this.closeModal
                        }
                        className="btn-modal-close"
                        alt="Lukk">
                        <i class="fas fa-times fa-lg"></i>
                    </button>
                    <div className="d-modal-content">
                        <h1 className="p-h1">Oslo Takterrasse</h1> {/*greenspace_name*/}
                        <br/>
                        <div className="d-modal-container">
                        
                        <table className="d-table">
                                            
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-lucifer.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Crocosmia Lucifer</td> {/*greenspace_name*/}
                                                    <td className="d-td">3 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-falcatum.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Cyrtomium Falcatum</td> {/*greenspace_name*/}
                                                    <td className="d-td">6 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-belladonna.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Delpinium Belladonna</td> {/*greenspace_name*/}
                                                    <td className="d-td">3 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-tomatosoup.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Echinacea 'Tomato Soup'</td> {/*greenspace_name*/}
                                                    <td className="d-td">3 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-purpurea.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Echinacea Purpurea 'tiki torch'</td> {/*greenspace_name*/}
                                                    <td className="d-td">2 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-bremen.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Gaillardia 'Bremen'</td> {/*greenspace_name*/}
                                                    <td className="d-td">7 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-woblitz.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Galium Odoratum 'Woblitz'</td> {/*greenspace_name*/}
                                                    <td className="d-td">1 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-thomson.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Geranium 'Anne Thomson'</td> {/*greenspace_name*/}
                                                    <td className="d-td">4 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                                <tr>
                                                    <td className="d-modal-img"><img src="../../../images/r-helenium.jpg"></img></td> {/*greenspace_img*/}
                                                    <td className="d-td">Helenium 'Sahins Early Flowerer'</td> {/*greenspace_name*/}
                                                    <td className="d-td">3 stk</td> {/*number of one plant in greenspace*/}
                                                </tr>
                                           
                                              
                                                
                                            </table>


                    </div>

                    <div className="modal-btns-footer">
                        <a href="/Customize"><button className="orders-btn-close"
                            onClick={this.closeModal}
                            alt="Lukk">
                            TILPASS
                        </button></a>
                        <button className="orders-btn-save"
                            onClick={this.closeModal}
                                
                            alt="Lagre">
                            BESTILL
                        </button>
                    </div>       
                    </div>
                </Modal>
                
                

    
           
        </div>
    </div>
</div>
</ div>


)}}

