import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import PartnerContainer from "../../components/PartnerContainer";
import Grid from "../../components/Grid_2x2";
import "../../styles/frontpages.css";
import Footer from "../../components/Footer";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDown from "../../icons/down-arrow.svg";

export default function Home(props) {
  return (
    <div className="homepage">
      <div className="front-container disable-scrollbars">
        <section id="first">
          <img src={logo} className="logo-large"></img>
          <div className="hero-f-container">
            <h1 className="hero-f-subheader">
              Planlegg, design og bestill grøntområder inne, ute og på toppen av
              bygninger - alt på ett sted.
            </h1>
            <p></p>
          </div>

          <div className="hero-f-subcontainer c-mrg--top">
            <p className="u-mrg--txt3">Ny hos SquareRoot?</p>
            <button className="front-btn u-mrg--txt3">Forespør Demo</button>

            <p className="u-mrg--txt3">ELLER</p>

            <p className="u-mrg--txt3">Har du allerede en konto?</p>
            <button className="front-btn u-mrg--txt3">Gå til Beta</button>
          </div>

          <a href="#second">
            <img className="arrowDown zoom-on-hover" src={arrowDown}></img>
          </a>
        </section>

        <section id="second">
          <div className="c-grid--2x2 padding-sm top-container">
          <h1 className="grid-item1">Takterrasse</h1>
          <img className="grid-item2" src="../images/landscape--rooftop.jpg"></img>
            <div className="grid-item4 cat-descr">
              Sett sammen en takhage med forhåndsutvalgte planter
              <br />
              Spar tid og penger på å finne plantene som passer i området
              <br />
              Vi utvikler skreddersydde tilbud for riktige planter til riktig
              sted og konsepter som takhager for å øke biologisk mangfold og
              regnsenger for å håndtere kraftig nedbør og planter.
              <br />
              <button className="action-btn zoom-on-hover">
              Les mer<i className="fas fa-angle-double-right"></i>
            </button>
            </div>
 
            
            <a href="#third">
              <img className="arrowDown zoom-on-hover" src={arrowDown}></img>
            </a>
          </div>
        </section>

        <section id="third">
          <div className="c-grid--2x2 padding-sm top-container">
            <h1 className="grid-item1">Regnseng</h1>
            <img className="grid-item2" src="../images/landscape--rainbed2.jpg"></img>
            <div className="grid-item4 cat-descr">
              Overvannshåndtering
              <br />
              Filtrerer vannet
              <br />
              Beskytter dammer og kystlinjer
              <br />
              Øker bestanden av gunstige insekter
              <br />
              Reduserer sjansen for flom i bygningen
              <br />
              Øker verdien av eiendommen
              <br />
            
            <button className="action-btn zoom-on-hover float-left">
              Les mer<i className="fas fa-angle-double-right"></i>
            </button>
            </div>
          </div>

          <a href="#fourth">
            <img className="arrowDown zoom-on-hover" src={arrowDown}></img>
          </a>
        </section>

        <section id="fourth">
          <div className="c-grid--2x2 padding-sm top-container">
          <h1 className="grid-item1">Biomangfold</h1>
          <img className="grid-item2" src="../images/landscape--biodiversity.jpeg"></img>
            <div className="grid-item4 cat-descr">
              Overvannshåndtering
              <br />
              Filtrerer vannet
              <br />
              Beskytter dammer og kystlinjer
              <br />
              Øker bestanden av gunstige insekter som eliminerer skadedyr
              <br />
              Reduserer sjansen for flom i bygningen
              <br />
              Øker verdien av eiendommen
              <br />
              <button className="action-btn zoom-on-hover">
              Les mer<i className="fas fa-angle-double-right"></i>
            </button>
            </div>
            
            </div>

            <a href="#fifth">
              <img className="arrowDown zoom-on-hover" src={arrowDown}></img>
            </a>
         
        </section>

        <section id="fifth">
          <div className="c-grid--2x2 padding-sm top-container">
          <h1 className="grid-item1">Innendørs</h1>
          <img className="grid-item2" src="../images/portrait--indoor2.jpg"></img>
          
            <div className="grid-item4 cat-descr">
              Overvannshåndtering
              <br />
              Filtrerer vannet
              <br />
              Beskytter dammer og kystlinjer
              <br />
              Øker bestanden av gunstige insekter som eliminerer skadedyr
              <br />
              Reduserer sjansen for flom i bygningen
              <br />
              Øker verdien av eiendommen
              <br />
              <button className="action-btn zoom-on-hover">
              Les mer<i className="fas fa-angle-double-right"></i>
            </button>
            </div>
            
           
          </div>
        </section>

        <section id="sixth">
          <div className="c-grid--2x2 padding-sm top-container">
          <h1 className="grid-item1">Grønne Vegger</h1>
          <img className="grid-item2" src="../images/landscape--indoor2.jpg"></img>
          
            <div className="grid-item4 cat-descr">
              Overvannshåndtering
              <br />
              Filtrerer vannet
              <br />
              Beskytter dammer og kystlinjer
              <br />
              Øker bestanden av gunstige insekter som eliminerer skadedyr
              <br />
              Reduserer sjansen for flom i bygningen
              <br />
              Øker verdien av eiendommen
              <br />
              <button className="action-btn zoom-on-hover">
              Les mer<i className="fas fa-angle-double-right"></i>
            </button>
            </div>
            
           
          </div>
        </section>
      </div>
    </div>
  );
}
