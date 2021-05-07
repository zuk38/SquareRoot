import React from "react";
import './Footer.css';

const Footer = () => (
  <div className="footer">
      <div className="footer-container">
      <div className="footer-child1">
      <h className="footer-h">Squareroot</h>
    <p className="footer-p">Our mission is to bring nature back to the cities, creating places where people love to live.</p>
    <p className="footer-p">We are doing this by making the implementation of urban green spaces outside, inside and on top of buildings easy, cheaper, and available everywhere.
    </p>
    <p className="footer-p">By simply entering their address on our platform, we make tailored offers for the right plant for the right spot and concepts such as roof gardens, rain beds to manage heavy rainfall  and plants to increase biodiversity.
    </p>
    </div>
    <div className="footer-child2">
        <p><a href="Home">HOME</a></p>
        <p><a href="Howitworks">HOW IT WORKS</a></p>
        <p><a href="Why">WHY URBAN GREENSPACES</a></p>
        <p><a href="Partner">BECOME A PARTNER</a></p>
        <p><a href="Aboutus">ABOUT US</a></p>
        <p><a href="Contact">CONTACT</a></p>
    </div>
    <div className="footer-child3">
        <p className="footer-contact">If you have any questions, contact us at contact@squareroot.cc</p>
    </div>
    </div>
  </div>
);

export default Footer;