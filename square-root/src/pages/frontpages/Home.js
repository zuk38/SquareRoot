import React, { useEffect } from "react";
import "../../styles/frontpages.css";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import { Trans, useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import ContactForm from "../../components/ContactForm";
import { FooterContainer } from "../../components/footer/FooterContainer";

export default function Home(props) {
  console.log(props)
  useEffect(() => {
    var page = document.body;
    page.classList.add("no-scroll");
    return () => {
      page.classList.remove("no-scroll");
    };
  }, []);

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

  const openCategory = (path) => {
    if (path === undefined) return;
    props.history.push(path);
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
              <Trans i18nKey="home_page.hero.description">
                Plan, design and order greenspaces inside, outside and on top of
                buildings
                <br />- <i>all in one place.</i>
              </Trans>
            </h1>
          </span>
          <div className="signup-btn">
            <Button onClick={() => executeScroll("contact")}>{t("home_page.hero.demo")}</Button>
          </div>
        </div>
        <div className="see-more">
          <button
            className="bounce zoom-on-hover"
            onClick={() => executeScroll("second")}
          >
            {t("home_page.hero.see_more")}
            <img src={arrowDownWhite} />
          </button>
        </div>
      </section>

      <section id="second">
        <div className="o-container c-section--pad-vh">
          <div className="c-grid--3x1">
            <div className="grid-item1 sect-2-item1">
              <img
                className="column-img"
                src="../images/hands-rooftop.png"
                alt="hands-rooftop"
              />
            </div>
            <div className="grid-item2 sect-2-item2">
              <img
                className="column-img"
                src="../images/r-falcatum.jpg"
                alt="falcatum"
              />
            </div>

            <div className="grid-item2-stretch sect-2-title position-relative">
              <div className="main-punchline">
                <div className="main-punchline--lrg position-absolute">
                  <Trans i18nKey="home_page.section_two.title">
                    SquareRoot makes cities
                    <em className="light-green">&nbsp;green</em>, literally!
                  </Trans>
                </div>
              </div>
              <div className="short-border position-absolute left-margin" />
            </div>

            <div className="grid-item2-stretch2 sect-2-desc">
              <div className="main-punchline">
                <div className="main-punchline--p">
                  <Trans i18nKey="home_page.section_two.description">
                    At SquareRoot, we believe sustainable cities are
                    <em>&nbsp; our future</em>. With lots of green spaces
                    inside, outside and top of buildings.
                  </Trans>
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
                  <Trans i18nKey="home_page.section_three.title">
                    We want to make it easier to
                    <em className="light-green">
                      &nbsp;choose nature&nbsp;
                    </em>{" "}
                    for your building projects.
                  </Trans>
                </div>
              </div>
              <div className="short-border position-absolute left-margin" />
            </div>

            <div className="grid-item2-stretch1">
              <div className="main-punchline">
                <div className="main-punchline--p">
                  {t("home_page.section_three.description")}
                </div>
              </div>
            </div>

            <div className="grid-item3-vertical">
              <img
                className="c-img"
                src="../images/leaf_rooftop_redigert.jpg"
                alt="rooftop"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="fourth">
        <div className="o-container c-section--pad-vh">
          <br />
          <br />
          
          <div className="c-grid--3x1">
            <div className="grid-item1 sect-4-item1" onClick={() => openCategory("categories/takterrasse")}>
              <div className="img-wrap-rooftop">
                <div className="u-txt--middle">
                  <em>{t("home_page.section_four.rooftop")}</em>
                </div>
              </div>
            </div>
         

            <div className="grid-item2 sect-4-item2">
              <div className="main-punchline--p">
                <div className="short-border" />
                <p className="c-section--p">
                  <Trans i18nKey="home_page.section_four.rooftop_description">
                    Optimise your roof surface with one of our
                    <em>&nbsp;rooftop&nbsp;</em> concepts. Our plants and
                    hardware are chosen and designed to meet your specific
                    needs.
                  </Trans>
                  <br />
                  <button className="btn-transp float-left zoom-on-hover">{t("read_more")}</button>
                </p>
                
              </div>
            </div>

            <div className="grid-item3 sect-4-item3" onClick={() => openCategory("categories/regnseng")}>
              <div className="img-wrap-rainbed">
                <div className="u-txt--middle">
                  <em>{t("rainbed2")}</em>
                </div>
              </div>
            </div>

            <div className="grid-item4 sect-4-item4">
              <div className="main-punchline--p">
                <div className="short-border" />
                <p>
                  <Trans i18nKey="home_page.section_four.rainbed_description">
                    Our plants for
                    <em>&nbsp;rainbeds&nbsp;</em> are carefully chosen with
                    plants for the wet-zone, able to stand up to 48 hours in the
                    water and drought tolerant plants at the borders, the
                    dry-zone.
                  </Trans>
                  <br />
                  <button className="btn-transp float-left zoom-on-hover">{t("read_more")}</button>
                </p>
              </div>
            </div>

            <div className="grid-item9 sect-4-item5" onClick={() => openCategory("categories/innendørsplanter")}>
              <div className="img-wrap-indoor">
                <div className="u-txt--middle">
                  <em>{t("indoor2")}</em>
                </div>
              </div>
            </div>

            <div className="grid-item10 sect-4-item6">
              <div className="main-punchline--p">
                <div className="short-border" />
                <p>
                  <Trans i18nKey="home_page.section_four.indoor_description">
                    Our partner Leaf has extensive expertise with
                    <em>&nbsp;indoor&nbsp;</em> plants. Incredible aesthetics
                    are combined with minimal maintenance.
                  </Trans>
                  
                  <button className="btn-transp float-left zoom-on-hover">{t("read_more")}</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fifth">
        <div className="o-container c-section--pad-vh">
          <div className="c-grid--3x1">
            <div className="grid-item9 sect-5-item1">
              <div className="o-container--sm bckgd-white ">
                <div className="main-punchline--p u-txt--center pad-me">
                  <p>
                    <Trans i18nKey="home_page.section_five.description">
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
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="o-container c-section--pad-vh">
          <div className="c-grid--3x1">
            <div className="grid-item1-stretch position-relative sect-6-item1">
              <div className="main-punchline is-white">
                <div className="main-punchline--lrg">
                  <em>{t("home_page.section_six.title")}</em>
                  <br />
                  <br />
                </div>
              </div>
              <div className="short-border-white" />

              <div className="grid-item2-stretch1">
              <div className="main-punchline">
                <div className="main-punchline--p is-white">
                  <Trans i18nKey="home_page.section_six.description">
                    Our digital platform makes finding and sourcing plants
                    <em>&nbsp; easy and available everywhere</em>.
                    <br />
                    <br />
                    Through our network of local plant nurseries, we help you
                    find the right plants for the right spot and show what is
                    available to have it delivered in time.
                    <br />
                    <br />
                    Coming fall 2021. Stay updated by subscribing to our
                    newsletter.
                  </Trans>
                </div>
              </div>
              </div>
            </div>

            <div className="grid-item3-vertical sect-6-item2">
              <ContactForm
                demo={true}
                title="request_demo"
                title_classname="o-form__heading is-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="seventh">
        <div className="o-container c-section--pad-vh">
          <div className="main-punchline">
            <div className="main-punchline--lrg">
              {t("home_page.section_seven.title")}
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
