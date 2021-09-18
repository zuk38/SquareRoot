import React from "react";
import "../../styles/frontpages.css";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import {useTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import rightArrow from "../../icons/right-arrow.png";
import ContactForm from "../../components/ContactForm";
import RequestDemo from "../../components/RequestDemo";

export default function Home(props) {
    const {t} = useTranslation();
    const executeScroll = (myRef) => {
        let element;
        if (!myRef) 
            element = document.getElementById("first");
         else 
            element = document.getElementById(myRef);
         element && element.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
    };

    return (
        <div className="front-container">
            <section id="first">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="signup">
                    <p>Ny hos SquareRoot?</p>
                    <Button variant="outlined">
                        {
                        t("demo")
                    }</Button>
                    <p>{
                        t("or")
                    }</p>
                    <p>{
                        t("hero_account")
                    }</p>
                    <Button variant="outlined">
                        {
                        t("beta")
                    }</Button>
                </div>
                <div className="d">
                    <span className="list-item">
                        <h1>
                            <img src="../images/logo-asterisk-white.png" alt="asterisk"/> {
                            t("hero_main1")
                        }
                            <br/>-<i>{
                                t("hero_main2")
                            }</i>
                        </h1>
                    </span>
                </div>
                <div className="see-more">
                    <button className="bounce zoom-on-hover"
                        onClick={
                            () => executeScroll("second")
                    }>
                        {
                        t("see_more")
                    }
                        <img src={arrowDownWhite}/>
                    </button>
                </div>
            </section>

            <section id="second">
                <div className="o-container">

                    <div className="c-grid--3x1">
                        <div className="grid-item1">

                            <img className="column-img" src="../images/eufemia.jpg"></img>
                        </div>
                        <div className="grid-item2">
                            <img className="column-img" src="../images/eufemia.jpg"></img>

                        </div>

                        <div className="grid-item2-stretch position-relative">


                            <div className="main-punchline">
                                <div className="main-punchline--lrg position-absolute">
                                    SquareRoot makes cities
                                    <em className="light-green">&nbsp;green</em>, literally!</div>
                            </div>

                            <div className="short-border position-absolute"></div>

                        </div>

                        <div className="grid-item2-stretch2">

                            <div className="main-punchline">
                                <div className="main-punchline--p">
                                    At SquareRoot, we believe sustainable cities are
                                    <em>
                                        our future</em>. With lots of green spaces inside, outside and top of buildings.
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </section>


            <section id="third">

                <div className="o-container">

                    <div className="c-grid--3x1">

                        <div className="grid-item1-stretch position-relative">
                            <div className="main-punchline">
                                <div className="main-punchline--lrg position-absolute">
                                    We want to make it easier to
                                    <em className="light-green">&nbsp;choose nature&nbsp;
                                    </em>
                                    for your building projects.

                                </div>
                            </div>
                            <div className="short-border position-absolute"></div>
                        </div>

                        <div className="grid-item2-stretch1">
                            <div className="main-punchline">
                                <div className="main-punchline--p">
                                    Together with NIBIO, biologists, landscape architects and plant nurseries we 
                                                                                                                                                        have developed plant lists for urban greening and standard concepts, such as roof gardens and rain beds, to manage heavy rainfall and to increase biodiversity.

                                </div>
                            </div>
                        </div>

                        <div className="grid-item3-vertical">
                            <img className="c-img" src="../images/leaf_rooftop_redigert.jpg"></img>
                        </div>

                    </div>

                </div>


            </section>

            <section id="fourth">
                <div className="o-container">
                    <div className="c-grid--3x1">

                        <div className="grid-item1-stretch position-relative">
                            <div className="main-punchline is-white">
                                <div className="main-punchline--lrg">
                                    <em>COMING SOON</em>
                                    <br />
                                    <br />
                                </div>
                            
                            </div>
                            <div className="short-border-white"></div>
                            
                            <div className="main-punchline">
                            <div className="main-punchline--p is-white">
                            Our digital platform makes finding and sourcing plants
                                        <em>
                                            easy and available everywhere</em>.
                                            <br />
                                            <br />
                                            Through our network of local plant nurseries, we help you find the 
                                                                                                                                                                                                                                                  right plants for the right spot and show what is available to have it delivered in time.
                                        <br/>
                                        <br/>
                                    

                                      </div>
                            </div>
                        </div>

                        <div className="grid-item3-vertical">
                            <RequestDemo />
                        </div>

                    </div>
                    {/* 
                    <div className="c-hero">
                        <div className="c-grid--2x2">

                            <div className="grid-item3 u-txt--center">
                                <img className="c-img" src="../images/platform-shot.png"></img>

                            </div>

                            <div className="grid-item1">

                                <div className="top-container">


                                    <div className="main-punchline--lrg">
                                        Our digital platform makes finding and sourcing plants
                                        <em>
                                            easy and available everywhere</em>.
                                    </div><br/>


                                    <div className="main-punchline">
                                        Through our network of local plant nurseries, we help you find the 
                                                                                                                                                                                                                                                  right plants for the right spot and show what is available to have it delivered in time.
                                        <br/>
                                        <br/>
                                        <button className="btn-call2action zoom-on-hover">REQUEST DEMO</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */} </div>

            </section>


            <section id="fifth">
                <div className="grid-container">
                    <div className="c-hero">
                        <div className="c-section c-grid--3x3fixed">
                            <div className="c-section--container">
                                <h1>Roof garden</h1>


                                <img src="../images/landscape--rooftop_redigert.png"/>

                                <p className="c-section--p">Optimise your roof surface with one our concepts. Our plants and hardware are chosen and designed to meet your specific needs.
                                </p>

                            </div>
                            <div>

                                <h1>Rainbed</h1>

                                <img src="../images/leaf_rooftop_4_redigert.jpg"/>

                                <p>
                                    Our plants for this urban green space are carefully chosen with plants for the wet-zone, able to stand up to 48 hours in the water and drought tolerant plants at the borders, the dry-zone.
                                    <br/>
                                </p>
                            </div>

                            <div>
                                <h1>Indoor</h1>

                                <img src="../images/landscape--indoor_redigert.jpg"/>

                                <p>Our partner Leaf has extensive expertise with indoor plants. Incredible aesthetics are combined with minimal maintenance.
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


                            By integrating nature in your project, it will help
                                                                                                                    meet the requirements
                                                                                                                        for stormwater management.
                                                                                                                        Using local plants increases
                                                                                                                       biodiversity
                                                                                                                        and thus BREEAM points.

                            <br/>
                            <br/>
                            Building projects with a high environmental footprint increases the value of your property and
                                                                                        keeps our cities healthy.
                            <br/>

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
                                    <img src="../images/nibio_logo.jpeg"/>
                                    <img src="../images/edit_logo.jpeg"/>
                                    <img src="../images/teknologi-formidling_logo.png"/>
                                    <img src="../images/nibio_logo.jpeg"/>
                                    <img src="../images/edit_logo.jpeg"/>
                                    <img src="../images/teknologi-formidling_logo.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
