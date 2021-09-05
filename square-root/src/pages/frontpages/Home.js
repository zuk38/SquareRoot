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

    <section id="second">
        <div className="s-container">
          <div className="s-center">
            <div className="c-grid--2x1-equal padding-sm ">
              <div className="top-container">
                <div className="float-right">
                  <h1>WHY</h1>

                  <div className="main-punchline">
                  At SquareRoot we believe sustainable cities are our future. 
                  With lots of green spaces inside, outside and top of buildings. 
                  Bringing nature back to the cities is a powerful climate adaptation tool, 
                  making cities both resilient and a great place to live and work. 
                  SquareRoot makes cities green, literally!
                    <br />
                  </div>
                </div>
              </div>
              
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

                <div className="main-punchline">
                We want to make it easier to choose nature for your building projects. 
                Together with NIBIO, biologists, landscape architects and plant nurseries we 
                have developed plant lists for urban greening and standard concepts, such as 
                roof gardens and rain beds, to manage heavy rainfall and to increase biodiversity.  
                  <br />
                  Our digital platform makes finding and sourcing plants easy and available 
                  everywhere. Through our network of local plant nurseries, we help you find the 
                  right plants for the right spot and show what is available to have it delivered in time.
                  <br />
                  By integrating nature in your project, it will help meet the requirements for stormwater 
                  management. Using local plants also increases biodiversity and thus BREEAM points. 
                  Building projects with a high environmental footprint increases the value of your property 
                  and keeps our cities healthy. 
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
                <h1>Rooftop</h1>
                <p>Optimise your roof surface with one our concepts.  Roofs can be used for energy production, 
                  stormwater management, increase biodiversity or to create a space for people to meet, relax and enjoy.  
                  <br />Our concepts maximise these benefits and consider weight restrictions of your roof using light weight rooftop soils.  
                  <br />Our plants and hardware are chosen and designed to meet your specific needs.</p>
              </div>
              <div>
                <img src="logo" />
                <h1>Raingarden</h1>
                <p>A rain garden stores rainwater runoff from roofs and other hard surfaces.   Keeping the water out of the sewage system when it rains hard reduces the risk of floods.  
                  <br />
Our plants for this urban green space are carefully chosen with plants for the wet-zone, able to stand up to 48 hours in the water and drought tolerant plants at the borders, the dry-zone.  
<br />
It is an efficient tool to manage stormwater, improve biodiversity and the attractiveness of our cities.
</p>
              </div>
              <div>
                <img src="logo" />
                <h1>Indoor</h1>
                <p>Creating cities where people love to live and work means greening inside buildings as well.  Indoor plants clean the air and have a positive effect on our wellbeing.  Building standards like WELL actively promote integrating plants indoor.
                <br />Our partner Leaf has extensive expertise with indoor plants.  Netflix’ offices in Amsterdam are just one of their amazing projects.  Incredible aesthetics are combined with minimal maintenance.  
                <br />Plants are grown in modular rectangular tray directly at the nursery and make it easy for the interior architect to design and integrate green jungles in buildings.
</p>
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
