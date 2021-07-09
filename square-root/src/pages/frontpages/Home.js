import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import FeaturedGreenspaces from "../../components/FeaturedGreenspaces";
import PartnerContainer from "../../components/PartnerContainer";
import Grid from "../../components/Grid_2x2"
import "../../styles/Why.css";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import Footer from "../../components/Footer";

export default function Home(props) {
 
  <RemoveScrollBar />
  
  return (
    <div className="homepage">
      
    <div className="front-container">
    
    <section id="first">
        <h1>Welcome to my site</h1>
        <p>Lorem ipsum lorem ipsum lorem upsum</p>
    </section>
    <section id="second">
        <h1>First of all</h1>
        <p>Lorem ipsum lorem ipsum lorem upsum</p>
    </section>
    <section id="third">
        <h1>Second of all</h1>
        <p>Lorem ipsum lorem ipsum lorem upsum</p>
    </section>

    <section id="fourth">
        <h1>So stfu</h1>
        <p>Lorem ipsum lorem ipsum lorem upsum</p>
    </section>
    
     
    </div>
   
    </div>

  );
}
