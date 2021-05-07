import React, {Component} from "react";
import "./projects.css";
import "../../Customize.css";
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
        return(< div class = "p-row" > <div class="p-column left">
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


            <button className="btn-new-greenspace">
                <i class="fas fa-plus"></i>Legg til grøntområde
            </button>
        </div>

        <br/>
        <div className="green-container">


            <button onClick={
                    this.openModal
                }
                
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
                        <h1 className="p-h1">Oslo Takterrasse</h1> {/*greenspace_name*/}
                        <br/>
                        <h2 className="p-h2">Fortell oss litt mer om prosjektet</h2>
                        <div className="o-modal-container">
                        
                        <table className="modal-plantList">
                            <tr>
                                <td className="o-modal-img"><img src="../../../images/pertusem.png"></img></td>
                                <td className="o-modal-name">Pertusem</td>
                                <td className="o-modal-remove" alt="Fjern plante"><i class="fas fa-times fa-lg"></i></td>
                            </tr>
                            <tr>
                                <td className="o-modal-img"><img src="../../../images/pertusem.png"></img></td>
                                <td className="o-modal-name">Pertusem</td>
                                <td className="o-modal-remove" alt="Fjern plante"><i class="fas fa-times fa-lg"></i></td>
                            </tr>
                            <tr>
                                <td className="o-modal-img"><img src="../../../images/pertusem.png"></img></td>
                                <td className="o-modal-name">Pertusem</td>
                                <td className="o-modal-remove" alt="Fjern plante"><i class="fas fa-times fa-lg"></i></td>
                            </tr>
                            <tr>
                                <td className="o-modal-img"><img src="../../../images/pertusem.png"></img></td>
                                <td className="o-modal-name">Pertusem</td>
                                <td className="o-modal-remove" alt="Fjern plante"><i class="fas fa-times fa-lg"></i></td>
                            </tr>
                            <tr>
                                <td className="o-modal-img"><img src="../../../images/pertusem.png"></img></td>
                                <td className="o-modal-name">Pertusem</td>
                                <td className="o-modal-remove" alt="Fjern plante"><i class="fas fa-times fa-lg"></i></td>
                            </tr>
                            <tr>
                                <td className="o-modal-img"><img src="../../../images/pertusem.png"></img></td>
                                <td className="o-modal-name">Pertusem</td>
                                <td className="o-modal-remove" alt="Fjern plante"><i class="fas fa-times fa-lg"></i></td>
                            </tr>
                        </table>


                    </div>

                        <a href="/Dashboard"><button type="submit" className="btn-modal-create-p" onClick={
                                        this.closeModal
                                    }
                                    >OPPRETT PROSJEKT</button></a>
                    </div>
                </Modal>
                
                

    
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
        </div>
    </div>
</div>


)}}

