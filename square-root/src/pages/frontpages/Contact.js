import React from "react";
import { CommentAction } from "semantic-ui-react";
import InputForm from "../../components/InputForm";

export default function Contact(){
  
    return(

        <div>
<div className="o-container">
    <div className="c-hero">
        <h1 className="c-txt--hero">Kontakt oss</h1>
        <p className="c-txt--hero-p">
          Hvordan kan vi hjelpe deg?
        </p>
      </div>
      </div>

<div className="c-section">
  <div className="o-container">
    <div className="c-grid--2x1">
      <div>
        <div className="c-grid--3x3fixed">
          <div>
            <h3 className="c-txt--h3">Bli partner</h3>
            <p className="c-mrg--top-sm">jo@squareroot.cc</p>
          </div>

          <div>
            <h3 className="c-txt--h3">Bli med i teamet vårt</h3>
            <p className="c-mrg--top-sm">michel@squareroot.cc</p>
          </div>

          <div>
            <h3 className="c-txt--h3">Alt annet</h3>
            <p className="c-mrg--top-sm">contact@squareroot.cc</p>
          </div>

        </div>

        {/*BUTTON OPEN MODAL "CREATE PROJECT"*/}
        <a href="/start-project" class="o-btn c-mrg--top/3">Start prosjekt</a>
        

        <div className="c-splitlines">
          <h2 className="c-splitlines--h2">
          <span>eller</span>
          </h2>
        </div>

      </div>
    </div>
  </div>
  <div className="o-container u-mrg--reset">
    <InputForm />
      </div>
</div>

      </div>
    )
}