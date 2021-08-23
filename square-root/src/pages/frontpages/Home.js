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
      <div id="front-container" className="front-container disable-scrollbars">
        <section id="first">
          <div className="c-grid--3x2">
            <div className="grid-item0--hero">
              <img src={logo} className="logo-large"></img>
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
                  <h1>
                    <img
                      src="../images/logo-asterisk-white.png"
                      className="list-item-icon"
                    />
                    Planlegg, design og bestill grøntområder inne, ute og på
                    toppen av bygninger
                    <br />-<i className="ibm-italic">alt på ett sted</i>.
                  </h1>
                </span>
              </div>
            </div>

            <div className="grid-item3--hero">
              <button
                className="btn-scroll-down-large bounce zoom-on-hover is-white"
                onClick={() => executeScroll(homeData[0].id)}
              >
                Se mer
                <img className="arrowDown" src={arrowDownWhite} />
              </button>
            </div>
          </div>
        </section>

        {homeData.map((data) => (
          <HomeSection data={data} executeScroll={executeScroll}/>
        ))}

      </div>
    </div>
  );
}

function HomeSection({ data, executeScroll }) {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <>
      <section id={data.id}>
        <div className="c-grid--2x2 padding-section top-container">
          <h1 className="grid-item0">{data.headline}</h1>
          <img className="grid-item2" src={data.img} />

          <div className="grid-item4 cat-descr">
            {data.descriptionItems.map((item, index) => (
              <div key={index}>
                {item.text} <br />
              </div>
            ))}

            <button
              className="action-btn zoom-on-hover"
              onClick={() => routeChange(data.path)}
            >
              Les mer
              <i className="fas fa-angle-double-right" />
            </button>
          </div>
          {data.nextId ? (
            <button
              className="btn-scroll-down zoom-on-hover"
              onClick={() => executeScroll(data.nextId)}
            >
              <i className="fas fa-angle-double-down" />
              {data.nextName}
            </button>
          ) : (
            <button
              className="btn-scroll-up zoom-on-hover"
              onClick={() => executeScroll()}
            >
              <i className="fas fa-angle-double-up" />
              Go Back
            </button>
          )}
        </div>
      </section>
    </>
  );
}
