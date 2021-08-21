import React, { useEffect, useState, useRef } from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import PartnerContainer from "../../components/PartnerContainer";
import Grid from "../../components/Grid_2x2";
import "../../styles/frontpages.css";
import Footer from "../../components/Footer";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDown from "../../icons/down-arrow.svg";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import { useHistory } from "react-router-dom";
import { homeData } from "./HomeData";

export default function Home(props) {
    const executeScroll = (myRef) => {
        let element;
        if (!myRef) element = document.getElementById("first")
        else element = document.getElementById(myRef)
        element && element.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
      };
      
    return (
        <div className="homepage">
            <div className="front-container disable-scrollbars">
                <section id="first">

                    <div className="c-grid--3x2">
                        <div className="grid-item0--hero">

                            <img src={logo}
                                className="logo-large"></img>

                        </div>
                    
            

                        <div className="grid-item1--hero">

                            <div className="hero-f-signup c-mrg--top">
                                <p className="u-mrg--txt3">Ny hos SquareRoot?</p>
                                <button className="front-btn u-mrg--txt3">Forespør Demo</button>

                                <p className="u-mrg--txt3">ELLER</p>

                                <p className="u-mrg--txt3">Har du allerede en konto?</p>
                                <button className="front-btn u-mrg--txt3">Gå til Beta</button>
                            </div>
                        </div>
               


                        <div className="grid-item2--hero">
                            <div className="hero-f-punchline">
                                <span className="list-item">
                                <h1> <img src="../images/logo-asterisk-white.png" className="list-item-icon"/>

                                    
                                        Planlegg, design og bestill grøntområder inne, ute og på toppen av
                                                                                                                                                                                                                                                                                  bygninger
                                        <br/>-
                                        <i className="ibm-italic">alt på ett sted</i>.
                                    </h1>

                                </span>

                            </div>

                        </div>

                        <div className="grid-item3--hero">
                            <button className="btn-scroll-down-large bounce zoom-on-hover is-white" href="#third">
                                Se mer<img className="arrowDown"
                                    src={arrowDownWhite}/>
                            </button>
                        </div>
                    </div>


                </section>

                <section id="second">
                    <div className="c-grid--2x1-equal padding-sm ">
                        <div className="grid-item2--equal top-container">
                            <h1>WHY</h1>
                            <div className="cat-descr">
                            Sett sammen en takhage med forhåndsutvalgte planter
                            <br/>
                            Spar tid og penger på å finne plantene som passer i området
                            <br/>
                            Vi utvikler skreddersydde tilbud for riktige planter til riktig
                             <br/>
                        
                        </div>
                        </div>

                        <img className="grid-item1--equal" src="../images/landscape--rooftop_redigert.png"></img>
                       {/*  
                        <button className="btn-scroll-down zoom-on-hover" href="#third">
                            <i class="fas fa-angle-double-down"></i>Regnseng
                        </button>
                        */}   
                    </div>

                    <div className="c-section quote">
                        new info
                    </div>

                </section>

                <section id="third">
                <div className="c-grid--2x1-equal padding-sm">
                        <div className="grid-item1--equal top-container">
                            <h1>WHAT and HOW</h1>
                            <div className="cat-descr">
                            Sett sammen en takhage med forhåndsutvalgte planter
                            <br/>
                            Spar tid og penger på å finne plantene som passer i området
                            <br/>
                            Vi utvikler skreddersydde tilbud for riktige planter til riktig
                             <br/>
                        
                        </div>
                        </div>

                        <img className="grid-item2--equal" src="../images/landscape--rooftop_redigert.png"></img>
                       {/*  
                        <button className="btn-scroll-down zoom-on-hover" href="#third">
                            <i class="fas fa-angle-double-down"></i>Regnseng
                        </button>
                        */}   
                    </div>

                    <div className="c-section u-txt--center quote c-grid--3x3fixed">
                        <div>
                            <img src="logo" />
                            <h1>Takhage</h1>
                            <p>description</p>
                        </div>
                        <div>
                        <img src="logo" />
                            <h1>Regnbed</h1>
                            <p>description</p>
                        </div>
                        <div>
                        <img src="logo" />
                            <h1>Innendørs</h1>
                            <p>description</p>
                        </div>
                    
                    </div>
                </section>

                <section id="fourth">
               <div className="padding-sm">
                        <div className="top-container">
                            <h1>I samarbeid med</h1>
                        </div>
                        
                        <div className="c-section c-grid--span">
                            <img src="../images/nibio_logo.jpeg" />
                            <img src="../images/edit_logo.jpeg" />
                            <img src="../images/teknologi-formidling_logo.png" />
                            
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                        </div>
                        </div>
                        </section>

        </div>
    </div>
  );
}
