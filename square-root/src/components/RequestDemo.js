export default function ContactForm(props) {
  return (
    <>
      <form>
        <div className="o-form__group-full">
          <h3 className="o-form__heading o-form__heading is-white">
            Request Demo
          </h3>
          <div className="o-form__matrix-2">
            <span className="form-control-wrap your-name is-required">
              <input
                type="text"
                name="your-name"
                value-size="40"
                className="o-form__control"
                placeholder="Navn"
              />
            </span>
            <span className="form-control-wrap your-email is-required">
              <input
                type="email"
                name="your-email"
                value-size="40"
                className="o-form__control"
                placeholder="E-post"
              />
            </span>
            <span className="form-control-wrap your-name">
              <input
                type="text"
                name="your-phone"
                value-size="40"
                className="o-form__control"
                placeholder="Mobilnummer (valgfritt)"
              />
            </span>
           
          </div>
        </div>


        <div className="o-form__group-full ">
          <span className="form-control-wrap gdpr-contact-consent is-white">
            <span className="list-item is-required">
              <label>
                <input
                  type="checkbox"
                  name="checkbox-gdpr-contact-consent"
                  value="1"
                />

                <span className="list-item-label is-white">
                  Jeg godtar SquareRoot's
                  <a href="terms-and-conditions">&nbsp;vilkår og betingelser</a>
                  .
                </span>
              </label>
            </span>
          </span>

          <span className="form-control-wrap subscribe-contact">
            <span className="list-item">
              <label>
                <input
                  type="checkbox"
                  name="checkbox-subscribe-contact"
                  value="1"
                />

                <span className="list-item-label is-white">
                  Jeg ønsker å iblant motta nyhetsbrev fra SquareRoot om tilbud,
                  nyheter og oppdateringer innen grønn byutvikling.
                </span>
              </label>
            </span>
          </span>
        </div>

        {/*Check if fields "is-required" are valid, if not, then disable button*/}
        <input
          type="submit"
          value="Send"
          className="submit-form-control submit o-btn"
          /*disabled*/
        />
      </form>
    </>
  );
}
