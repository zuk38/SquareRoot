import React from 'react';
import "../../styles/frontpages.css";
import ScrollGreenspace from "../../components/ScrollGreenspace";


export default function Concepts() {

    const greenspace_values = [
        {
            img:"../images/portrait--rooftop.jpg",
            header:"Takterrasse"
        },
        {
            img:"../images/portrait--outdoor-bio.jpg",
            header:"Biomangfold"
        },
        {
            img:"../images/rainbed.jpg",
            header:"Regnseng"
        },
        {
            img:"../images/portrait--indoor-wall.jpg",
            header:"Grønne vegger"
        },
        {
            img:"../images/portrait--indoor-green.jpg",
            header:"Innendørs"
        }

    ];

    return (
        <div>
            <ScrollGreenspace title="Grøntområder" greenspace_values={greenspace_values} />
        </div>

    )
}