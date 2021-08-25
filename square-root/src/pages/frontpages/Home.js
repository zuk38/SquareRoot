import React from "react";
import "../../styles/frontpages.css";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";

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
                <img src="../images/logo-asterisk-white.png" alt="asterisk" />
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

      {/*<section id="second">
        <div className="s-container">
          <div className="s-center">
            <div className="c-grid--2x1-equal padding-sm ">
              <div className="top-container">
                <div className="float-right">
                  <h1>WHY</h1>

                  <div className="cat-descr">
                    Sett sammen en takhage med forhåndsutvalgte planter
                    <br />
                    Spar tid og penger på å finne plantene som passer i området
                    <br />
                    Vi utvikler skreddersydde tilbud for riktige planter til
                    riktig
                    <br />
                  </div>
                </div>
              </div>
               
                        <button className="btn-scroll-down zoom-on-hover" href="#third">
                            <i class="fas fa-angle-double-down"></i>Regnseng
                </button>
            </div>
          </div>

          <div className="c-section quote">new info</div>
        </div>
      </section>

      <section id="third">
        <div className="s-container">
          <div className="s-center">
            <div className="c-grid--2x1-equal padding-sm">
              <div className="top-container">
                <div>
                  <h1>WHAT and HOW</h1>
                </div>

                <div className="cat-descr">
                  Sett sammen en takhage med forhåndsutvalgte planter
                  <br />
                  Spar tid og penger på å finne plantene som passer i området
                  <br />
                  Vi utvikler skreddersydde tilbud for riktige planter til
                  riktig
                  <br />
                </div>
              </div>
              <img
                className="grid-item2--equal"
                src="../images/landscape--rooftop_redigert.png"
              ></img>
                
                        <button className="btn-scroll-down zoom-on-hover" href="#third">
                            <i class="fas fa-angle-double-down"></i>Regnseng
                </button>
            </div>
          </div>
        </div>
      </section>

      <section id="fourth">
        <div className="s-container">
          <div className="s-center">
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
          </div>
        </div>
      </section>

      <section id="fifth">
        <div className="s-container">
          <div className="s-center">
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
          </div>
        </div>
      </section>*/}
    </div>
  );
}
