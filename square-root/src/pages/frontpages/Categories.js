import React from "react";
import "../../styles/frontpages.css";
import ScrollGrid from "../../components/ScrollGrid";
import { withConceptConsumer } from "../../context/concepts";
import Loading from "../../components/Loading"

function Categories({ context }) {
  let { loadCat, categories } = context;

  if (loadCat) return <Loading />;

  return (
    <div>
      <ScrollGrid title="Grøntområder" categories={categories} />
    </div>
  );
}

export default withConceptConsumer(Categories);


/* FROM CATEGORIES CONTENT 

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
                }<br/>
                    <div className="c-mrg--bottom"></div>

                    <div className="c-container position-relative">
                        <img className="c-img"
                            src={
                                insert_values[0].hero_img
                            }/>
                        <div className="hero-img-overlay">
                            <div className="text-overlay">
                                {
                                insert_values[0].hero_img_overlay
                            }</div>
                        </div>
                    </div>


                    <h2 className="c-txt-punchline--sm c-mrg--top">
                        {
                        insert_values[0].descr
                    } </h2>
                    <br/>


                    <div className="c-grid--span">
                        <div className="c-grid--span-item-a">
                        <div className="c-txt-punchline--sm">
                                <strong>Fordeler</strong>
                                <br></br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
                        </div>

                        <div className="c-grid--span-item-b background-grey">
                        <div className="c-txt-punchline--sm padding-sm">
                                <strong>Vedlikehold</strong>
                                <br></br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. </div>
                        </div>

                      
                        
                        <div className="c-grid--span-item-c">
                            <img className="zoom-on-hover" src="../images/netflix-hq.jpg"/>

                        </div>

                    </div>
                    <h2 className="c-txt-punchline--sm c-mrg--top">På plattformen vår kan disse konseptene bli lagt inn i prosjekter du selv oppretter og administrer. 
                                                                            Herfra kan du velge å redigere hvilke planter som skal være med i et konsept, eller bestille det "as is". Du kan også velge ut planter enkeltvis og utvikle et eget konsept. 
                                                                            Vi håndterer deretter bestillingen din og tar oss av kommunikasjonen med ulike planteskoler, og kommer tilbake til deg med et prisestimat og leveransetid, og legger til slutt din bestilling inn hos planteskolene.</h2>


                </p>
            </div>
        </div>

    )
}

*/