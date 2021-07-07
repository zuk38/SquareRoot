import React from "react";

export default function Grid_2x2 ({grid_values}) {
    const { 
        title,
        img_1,
        img_2,
        img_3,
        img_4,
        subtitle_1,
        subtitle_2,
        subtitle_3,
        subtitle_4,
        paragraph_1,
        paragraph_2,
        paragraph_3,
        paragraph_4
    } = grid_values;

    return (

        <div> {/*OUR VALUES*/}
            <div className="c-section background-grey">
                <div className="o-container">
                    <h2 className="c-txt--sectiontitle c-mrg--bottom">{title}</h2>
                    <div className="c-grid--2x2">

                        {/*VALUE 1*/}
                        <div className="o-card o-card-media c-mrg-bottom/4">
                            <div className="c-icon">
                                <img src={img_1}></img>
                            </div>
                            <div>
                                <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">{subtitle_1}</h3>
                                <p>{paragraph_1}</p>
                            </div>
                        </div>
                        {/*END VALUE 1*/}

                        {/*VALUE 1*/}
                        <div className="o-card o-card-media c-mrg-bottom/4">
                            <div className="c-icon">
                                <img src={img_2}></img>
                            </div>
                            <div>
                                <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">{subtitle_2}</h3>
                                <p>{paragraph_2}</p>
                            </div>
                        </div>
                        {/*END VALUE 1*/}

                        {/*VALUE 1*/}
                        <div className="o-card o-card-media c-mrg-bottom/4">
                            <div className="c-icon">
                                <img src={img_3}></img>
                            </div>
                            <div>
                                <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">{subtitle_3}</h3>
                                <p>{paragraph_3}</p>
                            </div>
                        </div>
                        {/*END VALUE 1*/}

                        {/*VALUE 1*/}
                        <div className="o-card o-card-media c-mrg-bottom/4">
                            <div className="c-icon">
                                <img src={img_4}></img>
                            </div>
                            <div>
                                <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">{subtitle_4}</h3>
                                <p>{paragraph_4}</p>
                            </div>
                        </div>
                        {/*END VALUE 1*/} </div>
                </div>
            </div>
        </div>
    )
}
