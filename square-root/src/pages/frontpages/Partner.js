import React, {useState} from "react";
import {API} from "aws-amplify";
import Loading from "../../components/Loading";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/ContactFormValidation";
import "../../styles/Partner.css";
import PartnerContainer from "../../components/PartnerContainer";
import {useTranslation} from "react-i18next";

export default function Partner(props) {
    const {t} = useTranslation();
    const executeScroll = (myRef) => {
        let element;
        if (!myRef) 
            element = document.getElementById("first");
         else 
            element = document.getElementById(myRef);
         element && element.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
    };


    const {values, errors, handleChange, handleSubmit} = useForm(addContact, validate, callback);

    const [isSending, setIsSending] = useState(false);
    async function addContact() {
        setIsSending(true);
        // create request body
        const data = {
            body: {
                name: values.name,
                email: values.email,
                message: values.message
            }
        };
        console.log(data);
        // call the API gateway
        const apiData = await API.post("contactFormApi", "/contact", data);
        console.log({apiData});
        setIsSending(false);
        alert("Mail sent!");
    }

    async function callback() {
        console.log(values);
    }

    return (
        <> {" "}
            {
            isSending ? (
                <Loading/>) : (
                <div className="o-container">
                    <div className="c-hero">
                        <h1 className="c-txt--hero">
                            {
                                t("partner_h1")
                            }
                        </h1>

                        <div className="c-mrg--bottom"></div>

                        <div className="c-grid--2x1">
                            <div className="grid-item3 margin-left">
                                <img src="../images/partner.jpg" className="c-img flip-img"/>
                            </div>


                            <div className="grid-item1">

                                <div className="c-txt-punchline--sm">
                                    <h2 className="c-txt-punchline--sm">
                                        {
                                            t("partner_h2")
                                        }
                                        
                                    </h2>
                                    {
                                        t("partner_p1")
                                    }
                                    

                                    <br/>
                                    <br/>
                                 


                                </div>
                            </div>
                           
                        </div>

                        <div className="o-container--lrg background-grey">
<div className="c-grid--4x1">

    <div className="grid-item1">
        
    <div className="c-txt-punchline--sm">
        {
            t("RED")
        }
    </div>
    <div className="short-border"></div>
    <p>
        {
            t("partner_RED_desc")
        }
    </p>
    </div>

    <div className="grid-item3">
    <div className="c-txt-punchline--sm">
        {
            t("LARK")
        }
    </div>
    
    <div className="short-border"></div><p>
        {
            t("partner_LARK_desc")
        }
    </p>
    </div>

    <div className="grid-item9">
    <div className="c-txt-punchline--sm">
        {
            t("LENT")
        }
    </div>
    <div className="short-border"></div>
    <p>
        {
            t("partner_LENT_desc")
        }
    </p>
    </div>

    <div className="grid-item11">
    <div className="c-txt-punchline--sm">
        {
            t("PN")
        }
    </div>
    <div className="short-border"></div>
    <p>
    {
        t("partner_PN_desc")
    }
    </p>
    </div>
</div>
</div>
                        <div className="c-section c-section--cta background-grey">
                            <div className="o-container">
                                <h2 className="c-txt-sectiontitle--sm u-txt--center">
                                    Ta kontakt for en uforpliktende samtale
                                </h2>
                                <div className="u-txt--center">
                                <PartnerContainer/>
                                </div>
                                

                            </div>
                        </div>

                    </div>
                </div>


            )
        }
            {" "} </>
    );
}
