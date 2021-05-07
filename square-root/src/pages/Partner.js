import React, { Component } from 'react';
import './Partner.css';

function About() {
    return (
        <div>
            <h1 className="partner-title">PARTNERS</h1>
            <p className="partner-desc">Vi jobber tett, strategisk og målrettet sammen med våre platinumpartnere i det viktige arbeidet med å skape en bedre balanse i Tech. Gjennom synlighet, events og ulike initiativer skaper vi ringvirkninger utover partnernes organisasjoner. Platinumpartnerne er representert fra scenen på Inspirasjonsdagen og eier egne nettverkstreff.</p>
        <div class="float-container-partner">
            <div class="float-child">
            <div className="about">
                <h1 className="about-name">Together we make our cities green. Literally.</h1>
                </div>
            </div>
            <div class="float-child">
            <p className="about-desc">The urban space has a huge potential for dampening climate change effects through more and better green spaces.</p> 
                <p className="about-desc">We're reaching out to you all stakeholders in urban green spaces. We want to gather you on this platform to make your workflow seamless so that you can create and maintain resilient green spaces.
                </p>
                <p className="about-desc">We want the knowledge and experience to be shared so that you can create successful ecosystems that thrive and make all city dwellers thrive as well. 
                </p>
                <p className="about-desc">We're taking it step by step and will keep adding features to the platform based on your needs.</p>
            </div>
        </div>
        <h2 className="about-inspo">Inspirational projects</h2>
        <p className="about-inspo-desc">We are doing this by making the implementation of urban green spaces outside, inside and on top of buildings easy, cheaper, and available everywhere.</p>
        <div className="inspo-images">
            <div className="inspo-image1">
        <img src="../images/plantbed.png"></img>
        <h className="inspo-h">Project 1</h>
        </div>
        <div className="inspo-image1">
        <img src="../images/plantbed.png"></img>
        <h className="inspo-h">Project 2</h>
        </div>

        </div>
        </div>


    );
}
export default About;