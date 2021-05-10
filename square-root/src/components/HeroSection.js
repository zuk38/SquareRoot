import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
        return (<div>
            <div className="front">

            <div className="hero-header">

                <img src="../images/rooftop.png" className="hero-background"></img>

                <div className="hero-header-text">
                    <img src="../images/logo-white.png" className="top-left"></img>

                    <div className="bottom-right">
                      <img src="../images/logo-asterisk-white.png" className="hero-asterisk"/>
                    <h2>Vi gjør det enklere å velge bærekraftig byutvikling. Planlegg, design og bestill grøntarealer både ute og inne. </h2>
                    
                    
                <div className="frontoption">
                    <button class="button is-light front-btn-1">START PROSJEKT</button>
                    <button class="button is-dark front-btn-2">
                        LES MER
                    </button>
                    </div>
                    </div>
                </div>
                </div>

                <div className="imagebox">
                    <img src="../images/rooftop.png" className="image"></img>
                    <span className="span-imagebox">
                        <h1 className="h1">ROOFTOP</h1>
                        <p>
                            Text explaining why rooftops are good and why the customers should
                                        have rooftop gardens.
                        </p>
                        <div className="hero-btns">
                            <button class="button is-light">LEARN MORE</button>
                            <button class="button is-dark">
                                ADD TO PROJECT
                                <i class="fas fa-chevron-right"/>
                            </button>
                        </div>
                    </span>
                </div>
            </div>
      


        <div className="imagebox">
            <img src="../images/rainbeds.png" className="image"></img>
            <span className="span-imagebox">
                <h1 className="h1">RAINBEDS</h1>
                <p>
                    Text explaining why rainbeds are good and why the customers should
                                have rainbeds and more.
                </p>
                <div className="hero-btns">
                    <div className="hero-btns">
                        <button class="button is-light">LEARN MORE</button>
                        <button class="button is-dark">
                            ADD TO PROJECT
                            <i class="fas fa-chevron-right"/>
                        </button>
                    </div>
                </div>
            </span>
        </div>
        <div className="imagebox">
            <img src="../images/biodiversity.png" className="image"></img>
            <span className="span-imagebox">
                <h1 className="h1">BIODIVERSITY</h1>
                <p>
                    Text explaining why biodiversity are good and why the customers
                                should have it.
                </p>
                <div className="hero-btns">
                    <div className="hero-btns">
                        <button class="button is-light">LEARN MORE</button>
                        <button class="button is-dark">
                            ADD TO PROJECT
                            <i class="fas fa-chevron-right"/>
                        </button>
                    </div>
                </div>
            </span>
        </div>
    </div>
    );
}

export default HeroSection;
