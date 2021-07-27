import React, { useEffect } from "react";
import "../../styles/frontpages.css";
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
          <button className="front-btn"><h1>Takterrasse</h1></button>
          </section>

        <section id="third">
          <button className="front-btn"><h1>Regnseng</h1></button>
          <p>Lorem ipsum lorem ipsum lorem upsum</p>
        </section>

        <section id="fourth">
          <button className="front-btn"><h1>Biomangfold</h1></button>
          <p>Lorem ipsum lorem ipsum lorem upsum</p>
        </section>

        <section id="fifth">
          <button className="front-btn"><h1>Innendørs</h1></button>
          <p>Lorem ipsum lorem ipsum lorem upsum</p>
        </section>

      </div>
    </div>
  );
}
