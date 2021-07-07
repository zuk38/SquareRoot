import React from "react";
import FeaturedGreenspaces from "../../components/FeaturedGreenspaces";
import "../../styles/Why.css";
import ButtonPrimary from "../../styles/StyledComponents";

export default function What(){
    return (
<div>

<div className="c-hero">
                <h1 className="c-txt--hero">
                    Hva vi gjør
                </h1>
                <p className="c-txt--hero-p">
                    For å skape bærekraftige byer med grøntområder er det både økonomisk og bærekraftig å velge ut de beste plantene for riktig sted.
                    <br/>
                    <br/>
                    Vi gjør denne prosessen enkel med et forskningsbasert utvalg av planter.
                </p>
            </div>

            <div className="c-container">
                <div className="c-img">
                    <img src="../images/oslo-flowers.png"/>
                </div>
            </div>

            {/* A WORD FROM FOUNDERS*/}
            <div className="c-section">
                <div className="c-container u-mrg--reset">
                    <h2 className="c-txt--sectiontitle u-mrg--x0">Vår historie</h2>
                    <p className="c-txt--punchline">Noen ord fra våre grunnleggere</p>
                    <div className="c-grid--founders">
                        <div className="u-mrg--reset">
                            <img className="u-mrg-img1" src="../images/jo-profil.png"></img>
                            <p className="u-mrg-txt1">
                                <strong>Jo Deketelaere</strong>
                                <br/>
                                Grunnlegger og CEO
                            </p>
                        </div>
                        <div className="u-mrg--reset">
                            <p className="c-txt-punchline--sm">
                                Jo Deketelaere started his career in international business development for large energy companies focusing on climate mitigation, environmental policies and investment in low carbon emitting technologies.
                            </p>
                            <p>
                                He started his own company Greenbeat to develop a smart blue-green roof combining automated management of urban vegetation and intelligent control of water reservoirs. This project called RainBrain has received funding from OrganiCity and SynchroniCity, both under the H2020 umbrella.
                            </p>
                            <p>
                                Jo lives in Oslo, Norway with his wife and daughter, enjoys hiking in local nature and is a happy member of the swimrun community.
                            </p>
                        </div>
                        <div className="u-mrg--reset">
                            <img className="u-mrg-img1" src="../images/michel-profil.png"></img>
                            <p className="u-mrg-txt1">
                                <strong>Michel Wolfstirn</strong>
                                <br/>
                                Grunnlegger og COO
                            </p>
                        </div>
                        <div className="u-mrg--reset">
                            <p className="c-txt-punchline--sm">
                                A lover of nature and the outdoors, Michel is passionate about the environment and contributing to solving climate change.</p>
                            <p>
                                He co-founded BiomimicryNorway, an NGO dedicated to educating people and companies about sustainable innovation inspired by nature. He has spent a great deal of energy helping various startups and initiatives in the past years using his many skills ranging from design to business modelling for Circular Economy.</p>
                            <p>

                                Amongst other things he has contributed building for Gruten the first norwegian urban farm growing mushrooms on coffee grounds. He is also involved with Pådriv on projects related to sustainable urban development.</p>
                        </div>
                    </div>
                </div>

            </div>


</div>
    )
}