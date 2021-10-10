import React, { useEffect } from "react";
import "../../styles/frontpages.css";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import { Trans, useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import ContactForm from "../../components/ContactForm";
import { FooterContainer } from "../../components/footer/FooterContainer";
import useWindowDimensions from "../../components/hooks/useWindowDimensions";
import Carousel from "react-material-ui-carousel";

export default function Home(props) {
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

  let width = useWindowDimensions();

  const section_fourth_items = [
    {
      name: t("home_page.section_four.rooftop"),
      description: "home_page.section_four.rooftop_description",
      path: "categories/takhage",
      img_url: "../images/landscape--rooftop_redigert.png",
    },
    {
      name: t("rainbed2"),
      description: "home_page.section_four.rainbed_description",
      path: "categories/regnbed",
      img_url: "../images/leaf_rooftop_4_redigert.jpg",
    },
    {
      name: t("indoor2"),
      description: "home_page.section_four.indoor_description",
      path: "categories/innendørsplanter",
      img_url: "../images/landscape--indoor_redigert.jpg",
    },
  ];

  return (
    <div className="front-container">
      <section id="first">
        <div className="logo">
          <img src={logo} alt="SquareRoot" />
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
            <Button onClick={() => executeScroll("contact")}>
              {t("home_page.hero.demo")}
            </Button>
          </div>
        </div>
        <div className="see-more">
          <button
            className="bounce zoom-on-hover"
            onClick={() => executeScroll("second")}
          >
            {t("home_page.hero.see_more")}
            <img src={arrowDownWhite} alt="arrow down" />
          </button>
        </div>
      </section>

      <section id="second">
        <div className="o-container pad-me">
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
                <div className="main-punchline--lrg">
                  <Trans i18nKey="home_page.section_two.title">
                    SquareRoot makes cities
                    <em className="light-green">&nbsp;green</em>, literally!
                  </Trans>
                </div>
              </div>
              <br />
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
        <div className="o-container pad-me">
          <div className="c-grid--3x1">
            <div className="grid-item1-stretch position-relative ">
              <div className="main-punchline">
                <div className="main-punchline--lrg">
                  <Trans i18nKey="home_page.section_three.title">
                    We want to make it easier to
                    <em className="light-green">
                      &nbsp;choose nature&nbsp;
                    </em>{" "}
                    for your building projects.
                  </Trans>
                </div>
              </div>
              <br />
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
                src="../images/portrait--biodiversity-redigert.jpg"
                alt="rooftop"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="fourth">
<<<<<<< HEAD
        <div className="o-container c-section--pad-vh">
      
          
          <div className="c-grid--3x1">
            <div className="grid-item1 sect-4-item1" onClick={() => openCategory(`categories/takhage`)}>
=======
        {width >= 768 ? (
          <div className="o-container c-section--pad-vh">
            <div className="container-desktop">
              {section_fourth_items.map((item) => (
                <div key={item.name} className="card">
                  <Card item={item} openCategory={openCategory} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="container-desktop">
            <div>
              <Carousel>
                {section_fourth_items.map((item) => (
                  <div
                    key={item.name}
                    className="card"
                    onClick={() => openCategory(item.path)}
                  >
                    <Card item={item} openCategory={openCategory} carousel />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}
        {/*<div className="c-grid--3x1">
            <div
              className="grid-item1"
              onClick={() => openCategory(`categories/takhage`)}
            >
>>>>>>> a7f7a79035082829247c7e34dccb503ee9fe208c
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
<<<<<<< HEAD
                  <button className="btn-transp float-left zoom-on-hover" onClick={() => openCategory("categories/takterrasse")}>{t("home_page.hero.read_more")}<i class="fas fa-chevron-right"></i></button>
=======
                  <button
                    className="btn-transp float-left zoom-on-hover"
                    onClick={() => openCategory("categories/takhage")}
                  >
                    {t("home_page.hero.read_more")}
                    <i className="fas fa-chevron-right" />
                  </button>
>>>>>>> a7f7a79035082829247c7e34dccb503ee9fe208c
                </p>
                
              </div>
            </div>

<<<<<<< HEAD
            <div className="grid-item3 sect-4-item3" onClick={() => openCategory(`categories/regnbed`)}>
=======
            <div
              className="grid-item3"
              onClick={() => openCategory("categories/regnbed")}
            >
>>>>>>> a7f7a79035082829247c7e34dccb503ee9fe208c
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
<<<<<<< HEAD
                  <button className="btn-transp float-left zoom-on-hover" onClick={() => openCategory("categories/regnseng")}>{t("home_page.hero.read_more")}<i class="fas fa-chevron-right"></i></button>
=======
                  <button
                    className="btn-transp float-left zoom-on-hover"
                    onClick={() => openCategory("categories/regnbed")}
                  >
                    {t("home_page.hero.read_more")}
                    <i className="fas fa-chevron-right"></i>
                  </button>
>>>>>>> a7f7a79035082829247c7e34dccb503ee9fe208c
                </p>
              </div>
            </div>

<<<<<<< HEAD
            <div className="grid-item9 sect-4-item5" onClick={() => openCategory(`categories/innendørsplanter`)}>
=======
            <div
              className="grid-item9"
              onClick={() => openCategory("categories/innendørsplanter")}
            >
>>>>>>> a7f7a79035082829247c7e34dccb503ee9fe208c
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
                  <br />
<<<<<<< HEAD
                  <button className="btn-transp float-left zoom-on-hover" onClick={() => openCategory("categories/innendørsplanter")}>{t("home_page.hero.read_more")} <i class="fas fa-chevron-right"></i></button>
=======
                  <button
                    className="btn-transp float-left zoom-on-hover"
                    onClick={() => openCategory("categories/innendørsplanter")}
                  >
                    {t("home_page.hero.read_more")}{" "}
                    <i className="fas fa-chevron-right" />
                  </button>
>>>>>>> a7f7a79035082829247c7e34dccb503ee9fe208c
                </p>
              </div>
            </div>
  </div>*/}
      </section>

      <section id="fifth">
        <div className="o-container c-section--pad-vh">
          <div className="c-grid--2x2">
            <div className="grid-item3 sect-5-item1">
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
<<<<<<< HEAD
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
=======
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
>>>>>>> a7f7a79035082829247c7e34dccb503ee9fe208c
                </div>
              </div>
              </div>
            </div>

            <div className="grid-item3-vertical sect-6-item2 is-white">
<<<<<<< HEAD
            <ContactForm
=======
              <ContactForm
>>>>>>> a7f7a79035082829247c7e34dccb503ee9fe208c
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
      <div className="end-here"></div>
    </div>
  );
}

function Card({ item, openCategory, carousel }) {
  const { t } = useTranslation();
  return (
    <>
      {carousel ? (
        <div
          className="thumb"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" +
              item.img_url +
              ")",
            backgroundSize: "cover",
          }}
        >
          <div>
            <em>{item.name}</em>
          </div>
        </div>
      ) : (
        <div
          className="thumb"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" +
              item.img_url +
              ")",
            backgroundSize: "cover",
          }}
          onClick={() => openCategory(item.path)}
        >
          <div>
            <em>{item.name}</em>
          </div>
        </div>
      )}
      <article>
        <p>
          <Trans i18nKey={item.description}>
            Optimise your roof surface with one of our
            <em>rooftop</em> concepts. Our plants and hardware are chosen and
            designed to meet your specific needs.
          </Trans>
        </p>
        <span className="zoom-on-hover" onClick={() => openCategory(item.path)}>
          {t("home_page.hero.read_more")}
          <i className="fas fa-chevron-right" />
        </span>
      </article>
    </>
  );
}
