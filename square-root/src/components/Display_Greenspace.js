import React from "react";
import "../styles/frontpages.css"

export default function Display_Greenspace({insert_values}){

const {
    name, 
    img, 
    header, 
    subheader, 
    descr}
= insert_values;


    return (
        <div>
            <div className="c-section background-grey">
                
                {insert_values.map((insert_values) => (
                   <div className="o-container">
                    <h2 className="c-txt--sectiontitle c-mrg--bottom">{header}</h2>
                    <h3 className="c-txt--sectiontitle c-mrg--bottom">{subheader}</h3>

                    <div className="c-grid--1x">
                    <ul className="no-scroll-grid">
                        
                            
                        
                    
                                <img src={img} />
        
                                <p>{descr}</p>
                         
                            </ul>
                        </div>
                        </div>
                       
                        ))}
                         
               

    
            </div>

            

        </div>
    )
}