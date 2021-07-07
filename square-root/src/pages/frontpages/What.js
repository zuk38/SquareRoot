import React from "react";
import FeaturedGreenspaces from "../../components/FeaturedGreenspaces";
import "../../styles/Why.css";
import ButtonPrimary from "../../styles/StyledComponents";
import Grid from "../../components/Grid_2x2"

export default function What() {

    const grid_values = [
        {
            img: "../images/planet-earth.png",
            subtitle: "Lovgivning",
            paragraph: "Urbane grøntområder kan brukes som et verktøy for å oppfylle krav i lovgivningen. For eksempel kan grønne tak og regnhager bli brukt for overvannshåndtering."
        }, {
            img: "../images/planet-earth.png",
            subtitle: "Miljøsertifisering",
            paragraph: "Urbane grøntområder kan brukes som et verktøy for å oppnå miljøsertifiseringer. For eksempel kan grønne tak med innfødte arter gi høy BREEAM-score, eller innendørse planter for å oppnå WELL-standarden."
        }, {
            img: "../images/planet-earth.png",
            subtitle: "Økonomiske insentiver",
            paragraph: "Urbane grøntområder kan øke eiendomsverdien, samt som et verktøy for å øke utnyttelsen av en tomt. Les mer om dette <a href=https://dibk.no/regelverk/byggteknisk-forskrift-tek17/5/5-6/>her</a>"
        }, {
            img: "../images/planet-earth.png",
            subtitle: "Strategier",
            paragraph: "Strategi i planteutvikling (MER TEKST)"
        },
    ];

    return (
        <div>

            <div className="c-hero">
                <h1 className="c-txt--hero">
                    Hva vi gjør
                </h1>
                <p className="c-txt--hero-p">
                    Med vår plattform samler vi markedsaktører på ett sted slik at det blir enklere å utvikle bærekraftige byer.
                    <br />
                    

                </p>
            </div>

            
                <div className="c-section c-section--padding-top-24">
                    <div className="c-container u-mrg--reset">
                        <div className="c-grid--2x1">
                            <div className="u-mrg--reset">
                            <h2 className="c-txt-punchline--sm">
                            Vi utarbeider konsepter bestående av ulike plantearter som passer sammen i et gitt grøntareale (f.eks på en takterrasse eller som ett biomangfoldisk blomsterbedd).
                                </h2>
                                <div className="u-mrg--reset c-mrg--top"></div>
                                <div className="c-grid--3x1">
                                    <img className="zoom-on-hover" src="../images/portrait--rooftop.jpg" />
                                    <img className="zoom-on-hover"src="../images/portrait--outdoor-bio.jpg" />
                                    <img className="zoom-on-hover" src="../images/portrait--indoor-wall.jpg" />
                                </div>
                                <div className="u-mrg--reset c-mrg--top">
                                <h2 className="c-txt-punchline--sm">
                                    Vi har et sterkt fokus på "de beste plantene for det rikige stedet" for prosjekter med urbane grøntområder med mange krav. 
                                                        Vårt utvalg av planter er forskningsbasert, og utarbeidet i samarbeid med arkitekturselskapene
                                    <a href="https://www.asplanviak.no"> Aslpan Viak </a>
                                     og 
                                    <a href="https://edit.land/home"> Edit Atelier </a>.

                                </h2>
                                
                                    <p>
                                        <span></span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

            </div>

            <Grid title="Trender og insentiver for urbane grøntområder"
                grid_values={grid_values}/>


        </div>
    )
}
