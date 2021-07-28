import React, {useEffect} from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import PartnerContainer from "../../components/PartnerContainer";
import Grid from "../../components/Grid_2x2";
import "../../styles/frontpages.css";
import Footer from "../../components/Footer";
import "../../styles/Home.css";


export default function Home(props) {
    return (
        <div className="homepage">
            <div className="front-container disable-scrollbars">


                <section id="first">
                    <h1>Welcome to my site</h1>
                    <p>Lorem ipsum lorem ipsum lorem upsum</p>
                </section>

        

                <section id="second">
                    <div className="c-grid--2x2 padding-sm bottom-container">
                        
                        <h1 className="item1--2x2">Takterrasse</h1>
                        <div className="item2--2x2 cat-descr">
                            Sett sammen en takehage med forhåndsutvalgte planter<br/>
                            Spar tid og penger på å finne plantene som passer i området <br/>
                            
                        
                        </div>
                        <button className="item3--2x2 action-btn zoom-on-hover">Les mer<i class="fas fa-angle-double-right"></i>
                        </button>


                    </div>

                </section>

                <section id="third">
                    <div className="c-grid--3x2 padding-sm top-container">
                        <h1 className="item1--2x2">Regnseng</h1>
                        <button className="item3--2x2 action-btn zoom-on-hover float-left">Les mer<i class="fas fa-angle-double-right"></i>
                        </button>
                        <div className="item2--2x2 cat-descr">
                            Overvannshåndtering
                            <br/>
                            Filtrerer vannet<br/>
                            Beskytter dammer og kystlinjer<br/>
                            Øker bestanden av gunstige insekter som eliminerer skadedyr
                            <br/>
                            Reduserer sjansen for flom i bygningen
                            <br/>
                            Øker verdien av eiendommen
                        </div>
                    </div>

                </section>


                <section id="fourth">
                    <div className="c-grid--2x2 padding-sm bottom-container">
                        <div className="item1--2x2 cat-descr">
                            Overvannshåndtering
                            <br/>
                            Filtrerer vannet<br/>
                            Beskytter dammer og kystlinjer<br/>
                            Øker bestanden av gunstige insekter som eliminerer skadedyr
                            <br/>
                            Reduserer sjansen for flom i bygningen
                            <br/>
                            Øker verdien av eiendommen
                        </div>
                        <h1 className="item2--2x2">Biomangfold</h1>
                        <button className="item3--2x2 action-btn zoom-on-hover">Les mer<i class="fas fa-angle-double-right"></i>
                        </button>


                    </div>

                </section>
           
                <section id="fifth">
                    <div className="c-grid--2x2 padding-sm bottom-container">
                        <div className="item1--2x2 cat-descr">
                            Overvannshåndtering
                            <br/>
                            Filtrerer vannet<br/>
                            Beskytter dammer og kystlinjer<br/>
                            Øker bestanden av gunstige insekter som eliminerer skadedyr
                            <br/>
                            Reduserer sjansen for flom i bygningen
                            <br/>
                            Øker verdien av eiendommen
                        </div>
                        <h1 className="item2--2x2">Innendørs</h1>
                        <button className="item3--2x2 action-btn zoom-on-hover">Les mer<i class="fas fa-angle-double-right"></i>
                        </button>


                    </div>

                </section>


            </div>
        </div>
    );
}
