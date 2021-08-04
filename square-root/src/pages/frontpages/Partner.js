import React, {useState} from "react";
import {API} from "aws-amplify";
import Loading from "../../components/Loading";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/ContactFormValidation";
import "../../styles/Partner.css";
import PartnerContainer from "../../components/PartnerContainer";
import ButtonPrimary from "../../styles/StyledComponents";

export default function Partner(props) {
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
        <> {
            isSending ? (
                <Loading/>) : (

                <div className="o-container">
                    <div className="c-hero">
                        <h1 className="c-txt--hero">
                            Interessert i SquareRoot?
                        </h1>
                        <div className="c-txt--hero-p">
                            Vi ønsker å samarbeide med alle aktører i planleggingen og utformingen av urbane grøntområder.
                            <br/>
                            <br/>
                            Dette er for at vi kan gjøre arbeidsprosessen sømløs slik at du kan lage og vedlikeholde motstandsdyktige grøntområder.
                        </div>
                      </div>
                    <PartnerContainer/>
                </div>

            )
        } </>
    );
}
