import React, {Component} from 'react';
import data from "../pages/data.json";
import './Rooftop.css';
import Modal from "react-modal";

class RooftopExample1 extends Component {

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

        return (
            <div className='roof'>
                <div className='rooftop'>
                    {
                    data.Rooftop1.map((rooftop, i) => {
                        return (
                            <div key={i}>
                                <div className='rooftopinfo'>
                                    <img src={
                                            rooftop.icon
                                        }
                                        className='img-rooftop1'/>
                                    <div> {
                                        rooftop.roles.map(function (role, i) {
                                            return <div key={i}>
                                                <h5>{
                                                    role.title
                                                }</h5>
                                                <p>{
                                                    role.description
                                                }</p>
                                                <button class="button is-medium is-fullwidth">Velg by</button>
                                                <a href={
                                                    role.similarurl1
                                                }>
                                                    <img src={
                                                            role.similaricon1
                                                        }
                                                        className='similaricon'/>
                                                </a>
                                                <a href={
                                                    role.similarurl2
                                                }>
                                                    <img src={
                                                            role.similaricon2
                                                        }
                                                        className='similaricon'/>
                                                </a>
                                                <p className='city'>
                                                    {
                                                    role.city
                                                }</p>
                                            </div>
                                    })
                                    }
                                        <div className='options'>
                                            <div className="tilpass">
                                                <a class="button is-medium is-light is-fullwidth" href="Customize">Tilpass</a>
                                            </div>
                                            <button class="button is-medium is-dark is-fullwidth">
                                                Legg til i prosjekt<i class="fas fa-chevron-right"/></button>
                                        </div>

                                    </div>

                                </div>
                                <div className='requirements'>
                                    <h5>{
                                        rooftop.city
                                    }</h5>
                                    <div className="func">
                                        <h4 className="h4">
                                            {
                                            rooftop.func
                                        }</h4>
                                        <h4 className="h4">
                                            {
                                            rooftop.main
                                        }</h4>
                                        <div className="func_info">
                                            {
                                            rooftop.functions.map(function (func, i) {
                                                return (
                                                    <div key={i}>
                                                        <div className='req_info'>
                                                            <img src={
                                                                    func.icon
                                                                }
                                                                className='func_icon'/> {
                                                            func.name
                                                        } </div>
                                                    </div>
                                                )
                                            })
                                        } </div>
                                        <div className="main_info">
                                            {
                                            rooftop.maintenance.map(function (main, i) {
                                                return (
                                                    <div key={i}>
                                                        <div className="req_box">
                                                            <div className='req_info'>
                                                                <img src={
                                                                        main.icon
                                                                    }
                                                                    className='func_icon'/> {
                                                                main.name
                                                            } </div>

                                                        </div>

                                                    </div>
                                                )
                                            })
                                        } </div>
                                    </div>
                                </div>
                                <div className='description'>
                                    {
                                    rooftop.description.map(function (desc, i) {
                                        return (
                                            <div key={i}>
                                                <div className='desc'>
                                                    <h4 className="h4">
                                                        {
                                                        desc.name
                                                    }</h4>
                                                    <div className="desc_info">
                                                        {
                                                        desc.info
                                                    } </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                } </div>
                                <div className="plantlist">

                                    {/*BUTTON OPEN MODAL*/}


                                    <button className="button is-medium is-light is-fullwidth"
                                        onClick={
											this.openModal
									}>Se hele plantelisten
                                        <i class="fas fa-chevron-right"/></button>
                                    {/*MODAL*/}
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
                                                    <a href="/Dashboard">
                                                        <button type="submit" className="btn-modal-create-p"
                                                            onClick={
                                                                this.closeModal
                                                        }>OPPRETT PROSJEKT</button>
                                                    </a>


                                                </div>

                                            </form>
                                        </div>
                                    </Modal>
                                </div>


                            </div>
                        );
                    })
                } </div>
            </div>
        );
    }
}
export default RooftopExample1;
