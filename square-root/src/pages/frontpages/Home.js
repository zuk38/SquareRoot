import React from "react";
import "../../styles/frontpages.css";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import RequestDemo from "../../components/RequestDemo";
import { FooterContainer } from "../../components/footer/FooterContainer";

export default function Home(props) {
  const { t } = useTranslation();
  const executeScroll = (myRef) => {
    let element;
    if (!myRef) element = document.getElementById("first");
    else element = document.getElementById(myRef);
    element &&
      element.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
  };

  return (
    <div className="front-container">
      <section id="first">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="d">
          <span className="list-item">
            <h1>
              <img src="../images/logo-asterisk-white.png" alt="asterisk" />{" "}
              {t("hero.hero_main1")}
              <br />-<i>{t("hero.hero_main2")}</i>
            </h1>
          </span>
          <div className="signup-btn">
            <Button>{t("demo")}</Button>
          </div>
        </div>
        <div className="see-more">
          <button
            className="bounce zoom-on-hover"
            onClick={() => executeScroll("second")}
          >
            {t("see_more")}
            <img src={arrowDownWhite} />
          </button>
        </div>
      </section>

      <section id="second">
        <div className="o-container c-section--pad-vh">
          <div className="c-grid--3x1">
            <div className="grid-item1 zoom-on-hover">
              <img
                className="column-img"
                src="../images/hands-rooftop.png"
              ></img>
            </div>
            <div className="grid-item2">
              <img className="column-img" src="../images/r-falcatum.jpg"></img>
            </div>

            <div className="grid-item2-stretch position-relative">
              <div className="main-punchline">
                <div className="main-punchline--lrg position-absolute">
                  SquareRoot makes cities
                  <em className="light-green">&nbsp;green</em>, literally!
                </div>
              </div>
              <div className="short-border position-absolute left-margin" />
            </div>

            <div className="grid-item2-stretch2">
              <div className="main-punchline">
                <div className="main-punchline--p">
                  At SquareRoot, we believe sustainable cities are
                  <em>&nbsp; our future</em>. With lots of green spaces inside,
                  outside and top of buildings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="third">
        <div className="o-container c-section--pad-vh">
          <div className="c-grid--3x1">
            <div className="grid-item1-stretch position-relative">
              <div className="main-punchline">
                <div className="main-punchline--lrg position-absolute">
                  We want to make it easier to
                  <em className="light-green">&nbsp;choose nature&nbsp;</em>
                  for your building projects.
                </div>
              </div>
              <div className="short-border position-absolute left-margin" />
            </div>

            <div className="grid-item2-stretch1">
              <div className="main-punchline">
                <div className="main-punchline--p">
                  Together with NIBIO, biologists, landscape architects and
                  plant nurseries we have developed plant lists for urban
                  greening and standard concepts, such as roof gardens and rain
                  beds, to manage heavy rainfall and to increase biodiversity.
                </div>
              </div>
            </div>

            <div className="grid-item3-vertical">
              <img
                className="c-img"
                src="../images/leaf_rooftop_redigert.jpg"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section id="fourth">
        <div className="o-container c-section--pad-vh">
          <br />
          <br />
          <div className="c-grid--3x1">
            <div className="grid-item1">
              <div className="img-wrap-rooftop">
                <div className="u-txt--middle">
                  <em>Rooftop</em>
                </div>
              </div>
            </div>

            <div className="grid-item2">
              <div className="main-punchline--p">
                <div className="short-border" />

                <p className="c-section--p">
                  Optimise your roof surface with one of our
                  <em>&nbsp;rooftop&nbsp;</em>
                  concepts. Our plants and hardware are chosen and designed to
                  meet your specific needs.
                </p>
              </div>
            </div>

            <div className="grid-item3">
              <div className="img-wrap-rainbed">
                <div className="u-txt--middle">
                  <em>Rainbed</em>
                </div>
              </div>
            </div>

            <div className="grid-item4">
              <div className="main-punchline--p">
                <div className="short-border" />
                <p>
                  Our plants for
                  <em>&nbsp;rainbeds&nbsp;</em>
                  are carefully chosen with plants for the wet-zone, able to
                  stand up to 48 hours in the water and drought tolerant plants
                  at the borders, the dry-zone.
                  <br />
                </p>
              </div>
            </div>

            <div className="grid-item9">
              <div className="img-wrap-indoor">
                <div className="u-txt--middle">
                  <em>Indoor</em>
                </div>
              </div>
            </div>

            <div className="grid-item10">
              <div className="main-punchline--p">
                <div className="short-border" />

                <p>
                  Our partner Leaf has extensive expertise with
                  <em>&nbsp;indoor&nbsp;</em>
                  plants. Incredible aesthetics are combined with minimal
                  maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fifth">
        <div className="o-container c-section--pad-vh">
          <div className="c-grid--3x1">
            <div className="grid-item9">
              <div className="o-container--sm bckgd-white ">
                <div className="main-punchline--p u-txt--center">
                  <p>
                    By integrating nature in your project, it helps meet the
                    requirements for stormwater management and using local
                    plants increases
                    <em>&nbsp;biodiversity&nbsp;</em>
                    as well as
                    <em>&nbsp;BREEAM points&nbsp;</em>.
                    <br />
                    <br />
                    Building projects with a high environmental footprint
                    increases the value of your property and
                    <em>&nbsp;keeps our cities healthy</em>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sixth">
        <div className="o-container c-section--pad-vh">
          <div className="c-grid--3x1">
            <div className="grid-item1-stretch position-relative">
              <div className="main-punchline is-white">
                <div className="main-punchline--lrg">
                  <em>COMING SOON</em>
                  <br />
                  <br />
                </div>
              </div>
              <div className="short-border-white" />

              <div className="main-punchline">
                <div className="main-punchline--p is-white">
                  Our digital platform makes finding and sourcing plants
                  <em>&nbsp; easy and available everywhere</em>.
                  <br />
                  <br />
                  Through our network of local plant nurseries, we help you find
                  the right plants for the right spot and show what is available
                  to have it delivered in time.
                  <br />
                  <br />
                  Coming fall 2021. Stay updated by subscribing to our
                  newsletter.
                </div>
              </div>
            </div>

            <div className="grid-item3-vertical">
              <RequestDemo />
            </div>
          </div>
        </div>
      </section>

      <section id="seventh">
        <div className="o-container c-section--pad-vh">
          <div className="main-punchline">
            <div className="main-punchline--lrg">
              In collaboration with
              <br />
              <br />
            </div>
          </div>
          <div className="short-border left-margin" />
          <div className="c-grid--fill">
            <div>
              <img src="../images/gg-logo.png" alt="Simula" />
            </div>
            <div>
              <img src="../images/nibio_logo.jpeg" alt="Nibio" />
            </div>
            <div>
              <img src="../images/edit_logo.jpeg" alt="Edit" />
            </div>
            <div>
              <img
                src="../images/teknologi-formidling_logo.png"
                alt="Teknologi Formidling"
              />
            </div>
            <div>
              <img
                src="../images/innovasjon-norge-big.png"
                alt="Innovasjon Norge"
              />
            </div>
            <div>
              <img src="../images/sin-logo.png" alt="Smart Innovation Norway" />
            </div>
            <div>
              <img src="../images/tekna-logo.jpeg" alt="Tekna" />
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="c-section--pad-vh">
          <FooterContainer />
        </div>
      </section>
    </div>
  );
}
