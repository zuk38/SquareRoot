export default function InputForm(props) {
    return (
        <>

            <form>
                <div className="o-form__group">
                    <h3 className="o-form__heading o-form__heading">Send oss en melding</h3>
                    <div className="o-form__matrix-2">
                        <span className="form-control-wrap your-name is-required">
                            <input type="text" name="your-name" value-size="40" className="o-form__control" placeholder="Navn"/>
                        </span>
                        <span className="form-control-wrap your-email is-required">
                            <input type="email" name="your-email" value-size="40" className="o-form__control" placeholder="E-post"/>
                        </span>
                        <span className="form-control-wrap your-name">
                            <input type="text" name="your-phone" value-size="40" className="o-form__control" placeholder="Mobilnummer (valgfritt)"/>
                        </span>
                        <span className="form-control-wrap your-location">
                            <input type="tel" name="your-location" value-size="40" className="o-form__control" placeholder="Beliggenhet (valgfritt)"/>
                        </span>
                    </div>
                </div>

                <div className="o-form__group">
                    <span className="form-control-wrap message">
                        <textarea name="message" cols="40" rows="6" className="o-form__control textarea is-required o-form__control" placeholder="Fortell oss hva vi kan hjelpe deg med"></textarea>
                    </span>
                </div>

                <div className="o-form__group">

                    <span className="form-control-wrap gdpr-contact-consent">
                        <span className="list-item is-required">
                            <label>
                                <input type="checkbox" name="checkbox-gdpr-contact-consent" value="1"/>


                                <span className="list-item-label">

                                    Jeg godtar SquareRoot's
                                    <a href="terms-and-conditions">&nbsp;vilkår og betingelser
                                    </a>.
                                </span>
                            </label>
                        </span>
                    </span>

                    <span className="form-control-wrap subscribe-contact">
                        <span className="list-item">
                            <label>
                                <input type="checkbox" name="checkbox-subscribe-contact" value="1"/>


                                <span className="list-item-label">

                                    Jeg ønsker å iblant motta nyhetsbrev fra SquareRoot om tilbud, nyheter og oppdateringer innen grønn byutvikling.
                                </span>
                            </label>
                        </span>
                    </span>


                </div>


                {/*Check if fields "is-required" are valid, if not, then disable button*/}
                <input type="submit" value="Send" className="submit-form-control submit o-btn"
                    /*disabled*/
                />

            </form>
        </>
    )
}
