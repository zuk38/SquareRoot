import React from 'react';
import { useTranslation } from 'react-i18next';
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
  Document,
} from '../../styles/Footer';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

export function FooterContainer() {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column first>
            <Title primary>SquareRoot</Title>
            <Description>{t('footer.description')}</Description>
            <Button to='/contact-us'>{t('footer.button')}</Button>
          </Column>
          <Column>
            <Title>{t('footer.greenspaces')}</Title>
            <FooterLink href='/categories/takterrasse'>
              {t('footer.rooftop')}
            </FooterLink>
            <FooterLink href='/categories/regnseng'>
              {t('footer.rainbed')}
            </FooterLink>
            <FooterLink href='/categories/innendørsplanter'>
              {t('footer.indoor')}
            </FooterLink>
          </Column>
          <Column>
            <Title>{t('footer.about')}</Title>
            <FooterLink href='/who-we-are'>{t('footer.why')}</FooterLink>
            <FooterLink href='/what-we-do'>{t('footer.what')}</FooterLink>
            <FooterLink href='/how-it-works'>{t('footer.how')}</FooterLink>
          </Column>

          <Column>
            <Title>{t('footer.contact')}</Title>
            <FooterLink>
              <Icon>
                <GoLocation />
              </Icon>
              Thaulows vei 1B, Oslo
            </FooterLink>
            <FooterLink
              mail
              onClick={() => window.open('mailto:michel@squareroot.cc')}
            >
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
          <Document
            href='https://squareroot-as.github.io/SquareRoot/privacy.html'
            target='_blank'
          >
            Privacy Policy
          </Document>
          |
          <Document
            href='https://squareroot-as.github.io/SquareRoot/tou.html'
            target='_blank'
          >
            Terms of Use
          </Document>
        </BottomRight>
      </Bottom>
    </Container>
  );
}
