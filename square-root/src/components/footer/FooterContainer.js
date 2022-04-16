import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Wrapper,
  FooterLink,
  Title,
  Column,
  Row,
  Bottom,
  Description,
  Button,
  Icon,
  BottomLeft,
  BottomRight,
  Document
} from "../../styles/Footer";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export function FooterContainer() {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column first>
            <Title primary>SquareRoot</Title>
            <Description>Org.nr. 926 664 972</Description>
            {/*<Button to="/contact-us">{t("footer.button")}</Button>*/}
          </Column>
          <Column>
            {/*<Title>{t("footer.greenspaces")}</Title>*/}
            {/*<FooterLink href="/categories/takterrasse">*/}
            {/*  {t("footer.rooftop")}*/}
            {/*</FooterLink>*/}
            {/*<FooterLink href="/categories/regnseng">*/}
            {/*  {t("footer.rainbed")}*/}
            {/*</FooterLink>*/}
            {/*<FooterLink href="/categories/innendørsplanter">*/}
            {/*  {t("footer.indoor")}*/}
            {/*</FooterLink>*/}
          </Column>
          <Column>
            {/*<Title>{t("footer.about")}</Title>*/}
            {/*<FooterLink href="/what-we-do">{t("footer.what")}</FooterLink>*/}
            {/*<FooterLink href="/how-it-works">{t("footer.how")}</FooterLink>*/}
            {/*<FooterLink href="/why-us">{t("footer.why")}</FooterLink>*/}
          </Column>

          <Column>
            <Title>{t("footer.contact")}</Title>
            <FooterLink>
              <Icon>
                <GoLocation />
              </Icon>
              Startup Campus, Oslo
            </FooterLink>
            <FooterLink mail onClick={() => window.open('mailto:michel@squareroot.cc')}>
              <Icon>
                <HiOutlineMail />
              </Icon>
              michel@squareroot.cc
            </FooterLink>
            <FooterLink>
              <Icon>
                <HiOutlinePhone />
              </Icon>
              +47 925 57 654
            </FooterLink>
          </Column>
        </Row>
      </Wrapper>
      <Bottom>
        <BottomLeft>&copy; {new Date().getFullYear()} SquareRoot</BottomLeft>
        <BottomRight>
          <Document href="https://squareroot-as.github.io/SquareRoot/privacy.html">
            Privacy Policy
          </Document>
          |
          <Document href="https://squareroot-as.github.io/SquareRoot/tou.html">
            Terms of Service
          </Document>
        </BottomRight>
      </Bottom>
    </Container>
  );
}