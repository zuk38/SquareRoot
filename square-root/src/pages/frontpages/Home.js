import React from "react";
import "../../styles/frontpages.css";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import rightArrow from "../../icons/right-arrow.png";

export default function Home() {
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
          <p>{t("hero.hero_new")}</p>
          <Button variant="outlined">{t("hero.demo")}</Button>
          <p>{t("or")}</p>
          <p>{t("hero.hero_account")}</p>
          <Button variant="outlined">{t("hero.beta")}</Button>
        </div>
        <div className="d">
          <span className="list-item">
            <h1>
              <img src="../images/logo-asterisk-white.png" alt="asterisk" />
              {t("hero.hero_main1")}
              <br />-<i>{t("hero.hero_main2")}</i>
            </h1>
          </span>
        </div>
        <div className="see-more">
          <button
            className="bounce zoom-on-hover"
            onClick={() => executeScroll("second")}
          >
            {t("hero.see_more")}
            <img src={arrowDownWhite} />
          </button>
        </div>
      </section>

      <section id="second">
        <div className="o-container">
          <div className="c-hero">
            <div className="c-grid--2x2">
              <div className="grid-item3">
                <img
                  className="c-img"
                  src="../images/eufemia.jpg"
                  alt="Green city"
                />
              </div>

              <div className="grid-item1">
                <div className="top-container">
                  <div className="float-right">
                    <div className="main-punchline--lrg">
                      {t("home_page.section_one.title")}
                    </div>
                    <br />
                    <br />

                    <div className="main-punchline">
                      {t("home_page.section_one.description1")}
                      <em>{t("home_page.section_one.description_em")}</em>
                      {t("home_page.section_one.description2")}
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
                    {t("home_page.section_two.title")}
                    <br />
                    <br />
                    <div className="main-punchline">
                      {t("home_page.section_two.description")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-item1">
                <img
                  className="c-img"
                  src="../images/hands-rooftop.jpg"
                  alt="Nature"
                />
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
                <img
                  className="c-img"
                  src="../images/platform-shot.png"
                  alt="Platform"
                />
              </div>

              <div className="grid-item1">
                <div className="top-container">
                  <div className="main-punchline--lrg">
                    {t("home_page.section_three.title")}
                  </div>
                  <br />

                  <div className="main-punchline">
                    {t("home_page.section_three.description")}
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
                  <h1 className="float-left">
                    {t("home_page.section_four.roof")}
                  </h1>
                  <button className="float-right zoom-on-hover btn-transp">
                    <img src={rightArrow} className="btn-is-icon" />
                  </button>
                </span>

                <img
                  src="../images/landscape--rooftop_redigert.png"
                  alt="Roof garden"
                />

                <p>{t("home_page.section_four.roof_d")}</p>
              </div>
              <div>
                <span>
                  <h1 className="float-left">{t("rainbed2")}</h1>
                  <button className="float-right zoom-on-hover btn-transp">
                    <img src={rightArrow} className="btn-is-icon" />
                  </button>
                </span>

                <img
                  src="../images/leaf_rooftop_4_redigert.jpg"
                  alt="Rainbed"
                />

                <p>{t("home_page.section_four.rainbed_d")}</p>
              </div>

              <div>
                <span>
                  <h1 className="float-left">{t("indoor2")}</h1>
                  <button className="float-right zoom-on-hover btn-transp">
                    <img src={rightArrow} className="btn-is-icon" />
                  </button>
                </span>

                <img
                  src="../images/landscape--indoor_redigert.jpg"
                  alt="Indoor"
                />

                <p>{t("home_page.section_four.indoor_d")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sixth">
        <div className="c-section c-section--cta quote">
          <div className="o-container--sm">
            <div className="main-punchline u-txt--center">
              {t("home_page.section_five.d1")}
              <br />
              <br />
              {t("home_page.section_five.d2")}
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
                <h1>{t("home_page.section_six.title")}</h1>

                <div className="c-section c-grid--span">
                  <img src="../images/nibio_logo.jpeg" alt="nibio" />
                  <img src="../images/edit_logo.jpeg" alt="edit" />
                  <img
                    src="../images/teknologi-formidling_logo.png"
                    alt="teknologi-formidling"
                  />
                  <img src="../images/nibio_logo.jpeg" alt="nibio" />
                  <img src="../images/edit_logo.jpeg" alt="edit" />
                  <img
                    src="../images/teknologi-formidling_logo.png"
                    alt="teknologi-formidling"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
