import React from "react";
import "../../styles/frontpages.css";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import rightArrow from "../../icons/right-arrow.png";

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
        <div className="signup">
          <p>Ny hos SquareRoot?</p>
          <Button variant="outlined">{t("demo")}</Button>
          <p>{t("or")}</p>
          <p>{t("hero_account")}</p>
          <Button variant="outlined">{t("beta")}</Button>
        </div>
        <div className="d">
          <span className="list-item">
            <h1>
              <img src="../images/logo-asterisk-white.png" alt="asterisk" />{" "}
              {t("hero_main1")}
              <br />-<i>{t("hero_main2")}</i>
            </h1>
          </span>
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
        <div className="o-container">
          <div className="c-hero">
            <div className="c-grid--2x2">
              <div className="grid-item3">
                <img className="c-img" src="../images/eufemia.jpg"></img>
              </div>

              <div className="grid-item1">
                <div className="top-container">
                  <div className="float-right">
                    <div className="main-punchline--lrg">
                      SquareRoot makes cities green, literally!
                    </div>
                    <br />
                    <br />

                    <div className="main-punchline">
                      At SquareRoot, we believe sustainable cities are
                      <em>our future</em>. With lots of green spaces inside,
                      outside and top of buildings.
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="third">
        <div className="o-container">
          <div className="c-hero">
            <div className="c-grid--2x2">
              <div className="grid-item3">
                <div className="top-container">
                  <div className="main-punchline--lrg">
                    We want to make it easier to choose nature for your building
                    projects.
                    <br />
                    <br />
                    <div className="main-punchline">
                      Together with NIBIO, biologists, landscape architects and
                      plant nurseries we have developed plant lists for urban
                      greening and standard concepts, such as roof gardens and
                      rain beds, to manage heavy rainfall and to increase
                      biodiversity.
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              <div className="grid-item1">
                <img className="c-img" src="../images/hands-rooftop.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fourth">
        <div className="o-container">
          <div className="c-hero">
            <div className="c-grid--2x2">
              <div className="grid-item3">
                <img className="c-img" src="../images/platform-shot.png"></img>
              </div>

              <div className="grid-item1">
                <div className="top-container">
                  <div className="main-punchline--lrg">
                    Our digital platform makes finding and sourcing plants easy
                    and available everywhere.
                  </div>
                  <br />

                  <div className="main-punchline">
                    Through our network of local plant nurseries, we help you
                    find the right plants for the right spot and show what is
                    available to have it delivered in time.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fifth">
        <div className="o-container">
          <div className="c-hero">
            <div className="c-section c-grid--3x3fixed u-txt--center">
              <div>
                <span>
                  <h1 className="float-left">Roof garden</h1>
                  <button className="float-right zoom-on-hover btn-transp">
                    <img src={rightArrow} className="btn-is-icon" />
                  </button>
                </span>

                <img src="../images/landscape--rooftop_redigert.png" />

                <p>
                  Optimise your roof surface with one our concepts. Our plants
                  and hardware are chosen and designed to meet your specific
                  needs.
                </p>
              </div>
              <div>
                <span>
                  <h1 className="float-left">Rainbed</h1>{" "}
                  <button className="float-right zoom-on-hover btn-transp">
                    <img src={rightArrow} className="btn-is-icon" />
                  </button>
                </span>

                <img src="../images/leaf_rooftop_4_redigert.jpg" />

                <p>
                  Our plants for this urban green space are carefully chosen
                  with plants for the wet-zone, able to stand up to 48 hours in
                  the water and drought tolerant plants at the borders, the
                  dry-zone.
                  <br />
                </p>
              </div>

              <div>
                <span>
                  <h1 className="float-left">Indoor</h1>
                  <button className="float-right zoom-on-hover btn-transp">
                    <img src={rightArrow} className="btn-is-icon" />
                  </button>
                </span>

                <img src="../images/landscape--indoor_redigert.jpg" />

                <p>
                  Our partner Leaf has extensive expertise with indoor plants.
                  Incredible aesthetics are combined with minimal maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sixth">
        <div className="c-section c-section--cta quote">
          <div className="o-container--sm">
            <div className="main-punchline u-txt--center">
              By integrating nature in your project, it will help meet the
              requirements for stormwater management. Using local plants
              increases biodiversity and thus BREEAM points.
              <br />
              <br />
              Building projects with a high environmental footprint increases
              the value of your property and keeps our cities healthy.
              <br />
            </div>
          </div>
        </div>
      </section>

      <section id="seventh">
        <div className="s-container">
          <div className="s-center">
            <div className="padding-sm">
              <div className="top-container">
                <h1>I samarbeid med</h1>

                <div className="c-section c-grid--span">
                  <img src="../images/nibio_logo.jpeg" />
                  <img src="../images/edit_logo.jpeg" />
                  <img src="../images/teknologi-formidling_logo.png" />
                  <img src="../images/nibio_logo.jpeg" />
                  <img src="../images/edit_logo.jpeg" />
                  <img src="../images/teknologi-formidling_logo.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
