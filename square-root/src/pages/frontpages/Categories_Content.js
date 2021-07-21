import React from 'react';
import "../../styles/frontpages.css";



export default function Categories_Content() {

    const insert_values = [
        {
            name:"rooftop",
            img: "../images/portrait--rooftop.jpg",
            header: "Takterrasse",
            subheader: "Takterrasser is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {   
            name:"biodiversity",
            img: "../images/portrait--outdoor-bio.jpg",
            header: "Biomangfold",
            subheader: "Biomangfold is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        
        },
        {
            name:"rainbed",
            img: "../images/rainbed.jpg",
            header: "Regnseng",
            subheader: "Regnsenger is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        
        },
        {
            name:"walls",
            img: "../images/portrait--indoor-wall.jpg",
            header: "Grønne vegger",
            subheader: "Grønne vegger is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        
        },
        {
            name:"indoor",
            img: "../images/portrait--indoor-green.jpg",
            header: "Innendørsplanter",
            subheader: "Innendørsplanter is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

    return (
        <div>
            <div className="c-section background-grey">
                
              
                   <div className="o-container">
                    <h2 className="c-txt--sectiontitle c-mrg--bottom">{insert_values[0].header}</h2>
                    <h3 className="c-txt--sectiontitle c-mrg--bottom">{insert_values[0].subheader}</h3>

                    <div className="c-grid--1x">
                    <ul className="no-scroll-grid">
                               <img src={insert_values[0].img} />
        
                                <p>{insert_values[0].descr}</p>
                         
                            </ul>
                        </div>
                        </div>
                    
            </div>

            

        </div>

    )
}
