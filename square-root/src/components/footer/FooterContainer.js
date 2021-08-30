import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

export function FooterContainer() {
  const { t } = useTranslation();
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title primary={true}>SquareRoot</Footer.Title>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="/what-we-do">{t("what2")}</Footer.Link>
            <Footer.Link href="/how-it-works">{t("how2")}</Footer.Link>
            <Footer.Link href="/why-us">{t("why2")}</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Story</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}