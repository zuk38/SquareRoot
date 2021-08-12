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
  const [clicked, setClicked] = useState(false);

  const upRef = useState(null);
  const tRef = useRef(null);
  const rRef = useRef(null);
  const bRef = useRef(null);
  const iRef = useRef(null);
  const gRef = useRef(null);

  window.onscroll = function(e) {
    setClicked(false);
  };

  const executeScroll = (myRef) => {
    setClicked(true);
    myRef.current.scrollIntoView();
  };

  return (
    <div className="homepage">
      <div id="front-container" className="front-container disable-scrollbars">
        <section id="first" ref={upRef}>
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
                    {" "}
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
                onClick={() => executeScroll(tRef)}
              >
                Se mer
                <img className="arrowDown" src={arrowDownWhite} />
              </button>
            </div>
          </div>
        </section>

        <HomeSection
          data={homeData[0]}
          currentRef={tRef}
          nextRef={rRef}
          executeScroll={executeScroll}
          clicked={clicked}
        />
        <HomeSection
          data={homeData[1]}
          currentRef={rRef}
          nextRef={bRef}
          executeScroll={executeScroll}
          clicked={clicked}
        />
        <HomeSection
          data={homeData[2]}
          currentRef={bRef}
          nextRef={iRef}
          executeScroll={executeScroll}
          clicked={clicked}
        />
        <HomeSection
          data={homeData[3]}
          currentRef={iRef}
          nextRef={gRef}
          executeScroll={executeScroll}
          clicked={clicked}
        />
        <HomeSection
          data={homeData[4]}
          currentRef={gRef}
          executeScroll={executeScroll}
          clicked={clicked}
          upRef={upRef}
        />
      </div>
    </div>
  );
}

function HomeSection({ data, executeScroll, currentRef, nextRef, upRef }) {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <>
      <section ref={currentRef}>
        <div className="c-grid--2x2 padding-section top-container">
          <h1 className="grid-item0">{data.headline}</h1>
          <img className="grid-item2" src={data.img} />

          <div className="grid-item4 cat-descr">
            {data.descriptionItems.map((item) => (
              <>
                {item.text} <br />
              </>
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
              onClick={() => executeScroll(nextRef)}
            >
              <i class="fas fa-angle-double-down" />
              {data.nextName}
            </button>
          ) : (
            <button
              className="btn-scroll-up zoom-on-hover"
              onClick={() => executeScroll(upRef)}
            >
              <i class="fas fa-angle-double-up" />
              Go Back
            </button>
          )}
        </div>
      </section>
    </>
  );
}
