import React from "react";
import FeaturedGreenspaces from "../../components/FeaturedGreenspaces";
import "../../styles/Why.css";
import ButtonPrimary from "../../styles/StyledComponents";

export default function What() {

    

    return (
        <div>

            <div className="c-hero">
                <h1 className="c-txt--hero">
                    Hva vi gjør
                </h1>
                <p className="c-txt--hero-p">
                    Med vår plattform samler vi markedsaktører på ett sted slik at det blir enklere å utvikle bærekraftige byer.
                    <br/>
                    <div className="c-mrg--bottom"></div>
                    <h2 className="c-txt-punchline--sm c-mrg--top">
                        Vi har et sterkt fokus på "de beste plantene for det rikige stedet" for prosjekter med urbane grøntområder med mange krav. 
                                                                                                                                Vårt utvalg av planter er forskningsbasert, og i samarbeid med arkitekturselskapene
                                                                                                                                &nbsp;<a href="https://www.asplanviak.no">
                            Aslpan Viak
                        </a>&nbsp;og
                                                &nbsp;<a href="https://edit.land/home">
                            Edit Atelier</a>. Sammen utarbeider vi konsepter bestående av ulike plantearter som passer sammen i et gitt grøntareale, for eksempel på en takterrasse, eller for ønsket funksjonalitet, som overvannshåndtering.


                    </h2>
                    <br/>


                    <div className="c-grid--span">
                        <div className="c-grid--span-item-a">
                            <img className="zoom-on-hover" src="../images/portrait--indoor-wall.jpg"/>

                        </div>
                        <div className="c-grid--span-item-b">
                            <img className="zoom-on-hover" src="../images/rainbeds.png"/>
                        </div>
                        <div className="c-grid--span-item-c">
                            <img className="zoom-on-hover" src="../images/netflix-hq.jpg"/>

                        </div>


                    </div>

                </p>
            </div>
           
            <div className="c-section background-grey">
                <div className="o-container u-mrg--reset">
                    <h2 className="c-txt--sectiontitle">
                        Hva vi tilbyr
                    </h2>
                    <div className="c-mrg--top"></div>
                    <div className="o-container">
                        <div className="c-grid-2x1 is-centered">
                            <div className="is-right">
                                <h3 className="c-txt-sectiontitle--sm">
                                    Argument 1
                                </h3>
                                <div className="u-mrg--reset c-mrg--top">
                                    <p className="c-txt-punchline--sm">
                                        description
                                    </p>
                                </div>
                            </div>
                            <div className="u-mrg--reset">
                                <img className="attachment-company_into" src="../images/rainbeds.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           


        </div>
    )
}
