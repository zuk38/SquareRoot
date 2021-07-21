import React from 'react';
import "../../styles/frontpages.css";


export default function Categories_Content() {

    const insert_values = [
        {
            name: "rooftop",
            hero_img: "../images/landscape--rooftop.jpg",
            hero_img_overlay: "Netflix HQ, Amsterdam",
            header: "Takterrasse",
            subheader: "Takterrasser is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name: "biodiversity",
            img: "../images/portrait--outdoor-bio.jpg",
            header: "Biomangfold",
            subheader: "Biomangfold is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        },
        {
            name: "rainbed",
            img: "../images/rainbed.jpg",
            header: "Regnseng",
            subheader: "Regnsenger is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        },
        {
            name: "walls",
            img: "../images/portrait--indoor-wall.jpg",
            header: "Grønne vegger",
            subheader: "Grønne vegger is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        }, {
            name: "indoor",
            img: "../images/portrait--indoor-green.jpg",
            header: "Innendørsplanter",
            subheader: "Innendørsplanter is simply dummy text of the printing and typesetting industry.",
            descr: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

    return (
        <div>

            <div className="c-hero">
                <h1 className="c-txt--hero">
                    {
                    insert_values[0].header
                } </h1>
                <p className="c-txt--hero-p">
                    {
                    insert_values[0].subheader
                }</p>
            </div>

            <div className="c-container white-on-hover">
                <img className="c-img" src={
                        insert_values[0].hero_img
                    }/>
                    <div className="img-overlay">
                        <div className="text-overlay">{
                        insert_values[0].hero_img_overlay
                    }</div></div>
            </div>
          
            


        </div>

    )
}
