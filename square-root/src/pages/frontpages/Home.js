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

                {/*
                <div className="signup">
                    <p>Ny hos SquareRoot?</p>
                    
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
                */}
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
                    <div className="signup-btn">
                    <Button variant="outlined">
                        {
                        t("demo")
                    }</Button>
                    </div>
                </div>
                <div className="see-more is-white">
                    <button className="bounce zoom-on-hover is-white"
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
                <div className="o-container c-section--pad-vh">

                    <div className="c-grid--3x1">
                        <div className="grid-item1">

                            <img className="column-img" src="../images/hands-rooftop.png"></img>
                        </div>
                        <div className="grid-item2">
                            <img className="column-img" src="../images/r-falcatum.jpg"></img>

                        </div>

                        <div className="grid-item2-stretch position-relative">


                            <div className="main-punchline">
                                <div className="main-punchline--lrg position-absolute">
                                    {
                                        t("section2_top1")
                                        /*SquareRoot makes cities*/
                                    }
                                    
                                    <em className="light-green">&nbsp;
                                    {
                                        t("section2_outlined1")
                                        /*green*/
                                    }</em>
                                    {
                                        t("section2_top2")
                                        /*, literally!*/
                                    }
                                    </div>
                            </div>
                            <div className="short-border position-absolute left-margin">

                            </div>
                            
                        </div>

                        <div className="grid-item2-stretch2">

                            <div className="main-punchline">
                                <div className="main-punchline--p">
                                    {
                                        t("section2_bottom1")
                                        /* At SquareRoot, we believe sustainable cities are */
                                    }
                                    <em>&nbsp;{
                                        t("section2_outlined2")
                                        /*our future*/
                                    }
                                    </em>
                                    {
                                        t("section2_bottom2")
                                        /*With lots of green spaces inside, outside and top of buildings.*/
                                    }
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
                                    {
                                        t("section3_top1")
                                        /*We want to make it easier to*/
                                    }
                                    
                                    <em className="light-green">&nbsp;
                                    {
                                        t("section3_outlined")
                                        /*choose nature*/
                                    }
                                    &nbsp;
                                    </em>
                                    {
                                        t("section3_top2")
                                        /*for your building projects.*/
                                    }
                                    

                                </div>
                                
                            </div>
                            <div className="short-border position-absolute left-margin"></div>
                        </div>

                        <div className="grid-item2-stretch1">
                            <div className="main-punchline">
                                <div className="main-punchline--p">
                                    {
                                        t("section3_bottom")
                                        /* 
                                        Together with NIBIO, biologists, landscape architects and plant nurseries we 
                                    have developed plant lists for urban greening and standard concepts, such as 
                                    roof gardens and rain beds, to manage heavy rainfall and to increase biodiversity.*/
                                    }
                                    

                                </div>
                            </div>
                        </div>

                        <div className="grid-item3-vertical">
                            <img className="c-img" src="../images/portrait--outdoor-bio-redigert.jpg"></img>
                        </div>

                    </div>

                </div>


            </section>

            <section id="fourth">
                <div className="o-container c-section--pad-vh">
                    <br/><br/>
                    <div className="c-grid--3x1">

                        <div className="grid-item1">
                            <div className="img-wrap-rooftop">
                                <div className="u-txt--middle">
                                    <em>{
                                        t("section4_item1")
                                        /* Rooftop */
                                        }</em>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item2">
                            <div className="main-punchline--p">
                                <div className="short-border"></div>

                                <p className="c-section--p">
                                    {
                                        t("section4_item1_desc1")
                                        /*Optimise your roof surface with one of our*/
                                    }
                                    
                                    <em>&nbsp;
                                        {
                                            t("section4_item1_outlined")
                                            /*rooftop*/
                                        }
                                </em>
                                    {
                                        t("section4_item1_desc2")
                                        /*concepts. Our plants and hardware are chosen and designed to meet your specific needs.*/
                                    }
                                    
                                </p>


                            </div>
                        </div>


                        <div className="grid-item3">
                            <div className="img-wrap-rainbed">
                                <div className="u-txt--middle">
                                    <em>
                                        {
                                            t("section4_item2")
                                            /*Rainbed*/
                                        }
                                    </em>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item4">
                            <div className="main-punchline--p">
                                <div className="short-border"></div>
                                <p>
                                    {
                                        t("section4_item2_desc")
                                        /*Our plants for*/
                                    }
                                    
                                    <em>&nbsp;
                                        {
                                            t("section4_item2_outlined")
                                            /*rainbeds*/
                                        }
                                        &nbsp;</em>
                                    {
                                        t("section4_item2_desc2")
                                        /*are carefully chosen with plants for the wet-zone, able to stand up to 48 hours in the water and drought tolerant plants at the borders, the dry-zone.*/
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="grid-item9">
                            <div className="img-wrap-indoor">
                                <div className="u-txt--middle">
                                    <em>
                                        {
                                            t("section4_item3")
                                            /*Indoor*/
                                        }
                                        </em>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item10">
                            <div className="main-punchline--p">
                                <div className="short-border"></div>

                                <p>
                                    {
                                        t("section4_item3_desc")
                                        /*Our partner Leaf has extensive expertise with*/
                                    }
                                    
                                    <em>&nbsp;
                                        {
                                            t("section4_item3_outlined")
                                            /*indoor*/
                                        }
                                        </em>
                                        {
                                            t("section4_item3_desc2")
                                            /*plants. Incredible aesthetics are combined with minimal maintenance.*/
                                        }
                                    
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
                                        {
                                            t("section5_p1")
                                            /* By integrating nature in your project, it helps 
                                                            meet the requirements for stormwater management 
                                                            and using local plants increases*/
                                        }
                                       
                                    <em>&nbsp;
                                        {
                                            t("section5_outlined1")
                                            /*biodiversity*/
                                        }
                                        &nbsp;</em>
                                        {
                                            t("section5_p2")
                                            /*as well as*/
                                        }
                                    <em>&nbsp;
                                        {
                                            t("section5_outlined2")
                                            /*BREEAM points*/
                                        }
                                        &nbsp;</em>
                                    <br/>
                                    <br/>
                                    {
                                            t("section5_p3")
                                            /*Building projects with a 
                                                            high environmental footprint increases the value of 
                                                            your property and*/
                                    }
                                    
                                    <em>&nbsp;
                                        {
                                            t("section5_outlined3")
                                            /*keeps our cities healthy*/
                                        }
                                        </em>.
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
                                    <em>
                                        {
                                            t("section6_top")
                                            /*COMING SOON*/
                                        }
                                        </em>
                                    <br/>
                                    <br/>
                                </div>

                            </div>
                            <div className="short-border-white"></div>

                            <div className="main-punchline">
                                <div className="main-punchline--p is-white">
                                    {
                                        t("section6_bottom1")
                                        /*Our digital platform makes finding and sourcing plants*/
                                    }
                                    <em>&nbsp;
                                        {
                                            t("section6_outlined")
                                            /* easy and available everywhere*/
                                        }
                                        </em>
                                    <br/>
                                    <br/>
                                    {
                                        t("section6_bottom2")
                                        /*Through our network of local plant nurseries, we help you find the right plants for the right spot and show what is available to have it delivered in time.*/
                                    }
                                    
                                    <br/>
                                    <br/>
                                        {
                                            t("section6_bottom3")
                                            /*Coming fall 2021. Stay updated by subscribing to our newsletter.*/
                                        }
                                    
                                </div>
                            </div>
                        </div>

                        <div className="grid-item3-vertical">
                            <RequestDemo/>
                        </div>

                    </div>
                </div>

            </section>


            <section id="seventh">
                <div className="o-container c-section--pad-vh">
                    <div className="main-punchline">
                        <div className="main-punchline--lrg">
                            {
                                t("section7_top")
                                /*In collaboration with*/
                            }
                            
                            <br/>
                            <br/>
                        </div>

                    </div>
                    <div className="short-border left-margin"></div>
                    <div className="c-grid--fill">
                        <div><img src="../images/gg-logo.png"/></div>
                        <div><img src="../images/nibio_logo.jpeg"/></div>
                        <div><img src="../images/edit_logo.jpeg"/></div>
                        <div><img src="../images/teknologi-formidling_logo.png"/></div>
                        <div>
                            <img src="../images/innovasjon-norge-big.png"/></div>
                        <div><img src="../images/sin-logo.png"/></div>
                        <div>
                            <img src="../images/tekna-logo.jpeg"/></div>


                    </div>
                </div>
            </section>
        </div>
    );
}
