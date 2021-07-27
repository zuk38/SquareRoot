import React, {useEffect} from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import PartnerContainer from "../../components/PartnerContainer";
import Grid from "../../components/Grid_2x2";
import "../../styles/frontpages.css";
import Footer from "../../components/Footer";
import "../../styles/Home.css";


export default function Home(props) {
    return (
        <div className="homepage">
            <div className="front-container disable-scrollbars">


                <section id="first">
                    <h1>Welcome to my site</h1>
                    <p>Lorem ipsum lorem ipsum lorem upsum</p>
                </section>

                <section id="second">
                    <div className="flex-container">
                         <h1>Takterrasse</h1>
                         <button className="action-btn zoom-on-hover">Les mer<i class="fas fa-angle-double-right"></i></button>
                 </div>
                </section>


                <section id="third">
                    <div className="flex-container">
                         <h1>Regnseng</h1>
                         <button className="action-btn zoom-on-hover">Les mer<i class="fas fa-angle-double-right"></i></button>
                 </div>
                </section>

                <section id="fourth">
                    <div className="flex-container">
                         <h1>Biomangfold</h1>
                         <button className="action-btn zoom-on-hover">Les mer<i class="fas fa-angle-double-right"></i></button>
                 </div>
                </section>

                <section id="fifth">
                    <div className="flex-container">
                         <h1>Innendørs</h1>
                         <button className="action-btn zoom-on-hover">Les mer<i class="fas fa-angle-double-right"></i></button>
                 </div>
                </section>

      

            </div>
        </div>
    );
}
