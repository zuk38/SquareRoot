import React from "react";
import { listProjectGroups } from "../api/queries";

export default function Grid_2x2(props) {
    return (

        <div> {/*OUR VALUES*/}
            <div className="c-section background-grey">
                <div className="o-container">
                    <h2 className="c-txt--sectiontitle c-mrg--bottom">{props.title}</h2>
                    <div className="c-grid--2x2">

                        {/*VALUE 1*/}
                        <div className="o-card o-card-media c-mrg-bottom/4">
                            <div className="c-icon">
                                <img src={props.img_1}></img>
                            </div>
                            <div>
                                <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">{props.subtitle_1}</h3>
                                <p>{props.paragraph_1}</p>
                            </div>
                        </div>
                        {/*END VALUE 1*/}

                        {/*VALUE 1*/}
                        <div className="o-card o-card-media c-mrg-bottom/4">
                            <div className="c-icon">
                                <img src={props.img_2}></img>
                            </div>
                            <div>
                                <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">{props.subtitle_2}</h3>
                                <p>{props.paragraph_2}</p>
                            </div>
                        </div>
                        {/*END VALUE 1*/}

                        {/*VALUE 1*/}
                        <div className="o-card o-card-media c-mrg-bottom/4">
                            <div className="c-icon">
                                <img src={props.img_3}></img>
                            </div>
                            <div>
                                <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">{props.subtitle_3}</h3>
                                <p>{props.paragraph_3}</p>
                            </div>
                        </div>
                        {/*END VALUE 1*/}

                        {/*VALUE 1*/}
                        <div className="o-card o-card-media c-mrg-bottom/4">
                            <div className="c-icon">
                                <img src={props.img_4}></img>
                            </div>
                            <div>
                                <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">{props.subtitle_4}</h3>
                                <p>{props.paragraph_4}</p>
                            </div>
                        </div>
                        {/*END VALUE 1*/} </div>
                </div>
            </div>
        </div>
    )
}
