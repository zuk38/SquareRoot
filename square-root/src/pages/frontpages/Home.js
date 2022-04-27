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
     // path: "categories/rooftop",
      img_url: "../images/landscape--rooftop_redigert.png",
      hideMore: true
    },
    {
      name: t("home_page.section_four.rainbed"),
      description: "home_page.section_four.rainbed_description",
     // path: "categories/rainbeds",
      img_url: "../images/leaf_rooftop_4_redigert.jpg",
      hideMore: true
    },
  ];

  return (
    <div className="front-container smooth-scroll">
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
            <a className="o-btn nav-btn" target="_blank" href="https://platform.squareroot.cc/">
              <Trans i18nKey={'home_page.hero.platform'}></Trans>
            </a>
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
        <div className="pad-me">
            <div className="position-relative">
              <div className="main-punchline">
                <div className="main-punchline--p">
                    <h3><Trans i18nKey="home_page.section_four.title"></Trans></h3>

                    <p className="s-descr">
                      <Trans i18nKey="home_page.section_four.description.line_one"></Trans>
                      <a href={t("home_page.section_four.description.edit_link")}><Trans i18nKey="home_page.section_four.description.line_two"></Trans></a>
                      <Trans i18nKey="home_page.section_four.description.line_tree"></Trans>
                    </p>

                  <ul>
                    <li>{t("home_page.section_four.rooftop")}</li>
                    <li>{t("home_page.section_four.rainbed")}</li>
                    <li>{t("home_page.section_four.meadows")}</li>
                    <li>{t("home_page.section_four.front_yard")}</li>
                    <li>{t("home_page.section_four.facade")}</li>
                  </ul>

                    {/*{width >= 768 ? (*/}
                    {/*    <div className="container-desktop">*/}
                    {/*      {section_fourth_items.map((item) => (*/}
                    {/*        <div key={item.name} className="card">*/}
                    {/*          <Card item={item} openCategory={openCategory} />*/}
                    {/*        </div>*/}
                    {/*      ))}*/}
                    {/*    </div>*/}
                    {/*) : (*/}
                    {/*  <div className="container-desktop">*/}
                    {/*    <div>*/}
                    {/*      <Carousel>*/}
                    {/*        {section_fourth_items.map((item) => (*/}
                    {/*          <div*/}
                    {/*            key={item.name}*/}
                    {/*            className="card"*/}
                    {/*            onClick={() => openCategory(item.path)}*/}
                    {/*          >*/}
                    {/*            <Card item={item} openCategory={openCategory} carousel />*/}
                    {/*          </div>*/}
                    {/*        ))}*/}
                    {/*      </Carousel>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*)}*/}

                    <p className="s-summary">
                      <Trans i18nKey="home_page.section_four.summary"></Trans>
                    </p>

                </div>
              </div>
            </div>
        </div>
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
                <div className="main-punchline">
                  <div className="main-punchline--p is-white">
                    <Trans i18nKey="home_page.section_six.description">
                      Our digital platform makes it easy to find and order the best adapted plants for your project.
                      <br />
                      <br />
                      Thanks to our network of local plant nurseries we help you to find the right plants for your space.
                      Our database builds on the assortment from local plant nurseries but if you don’t find the plant you wish,
                      you can also put in a special request.
                      <br />
                      <br />
                      We make sure that what you plan for is also what you actually get!
                      <br />
                      <br />
                      Sign in the platform and start browsing for plants and packages!

                    </Trans>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item3-vertical sect-6-item2 is-white">
              {/*<ContactForm*/}
              {/*  demo={true}*/}
              {/*  title="request_demo"*/}
              {/*  title_classname="o-form__heading is-white"*/}
              {/*/>*/}

              <div className="platform-img">
                <img src="../images/platform.png" alt="" />
              </div>
              <div className="platform-btn">
                <a className="o-btn nav-btn" target="_blank" href="https://platform.squareroot.cc/">
                  <Trans i18nKey={'home_page.hero.platform'}></Trans>
                </a>
              </div>
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
        { !item.hideMore ? (
        <span className="zoom-on-hover" onClick={() => openCategory(item.path)}>
          {t("home_page.hero.read_more")}
          <i className="fas fa-chevron-right" />
        </span>
            ) : null}
      </article>
    </>
  );
}
