import React from "react";
import "../styles/frontpages.css"
import { useHistory } from "react-router-dom";

export default function ScrollGrid({title, insert_values}){

    const history = useHistory();
    const redirectToGreenspace = (href) => {
      history.push(href);
    };


    return (
        <div>
            <div className="c-section background-grey">
                <div className="o-container">
                    <h2 className="c-txt--sectiontitle c-mrg--bottom">{title}</h2>


                    <div className="c-grid--1x">
                    <ul className="no-scroll-grid">
                        {insert_values.map((insert_values) => (
                            
                        
                            <button className="item-portrait zoom-on-hover" onClick={() => redirectToGreenspace(insert_values.href)}>
                                <img src={insert_values.img} />
        
                                <p>{insert_values.header}</p>
                            </button>
                        
                       
                        ))}
                         </ul>
                        </div>
                </div>

    
            </div>

            

        </div>
    )
}