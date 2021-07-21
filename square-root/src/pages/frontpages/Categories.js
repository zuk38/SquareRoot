import React from 'react';
import "../../styles/frontpages.css";
import ScrollGrid from "../../components/ScrollGrid";


export default function Categories() {

    const insert_values = [
        {
            name:"rooftop",
            img:"../images/portrait--rooftop.jpg",
            header:"Takterrasse",
            href:`/categories/rooftop`
        },
        {   name:"biodiversity",
            img:"../images/portrait--outdoor-bio.jpg",
            header:"Biomangfold",
            href:`/categories/biodiversity`
        },
        {   
            name:"rainbed",
            img:"../images/rainbed.jpg",
            header:"Regnseng",
            href:`/categories/rainbed`
        },
        {   
            name:"green-walls",
            img:"../images/portrait--indoor-wall.jpg",
            header:"Grønne vegger",
            href:`/categories/green-walls`
        },
        {   
            name:"indoor-plants",
            img:"../images/portrait--indoor-green.jpg",
            header:"Innendørs",
            href:`/categories/indoor-plants`
        }
    ];

    return (
        <div>
            <ScrollGrid title="Grøntområder" insert_values={insert_values} />
        </div>

    )
}