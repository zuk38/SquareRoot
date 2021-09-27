import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 30px 0px 130px 0px;
  background: radial-gradient(
    circle,
    rgba(62, 61, 61, 1) 0%,
    rgba(79, 77, 77, 1) 100%
  );
  position: relative;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 0px 10px 90px;
  }
`;

export const Bottom = styled.div`
  text-align: center;
  padding-top: 15px;
  width: 85%;
  border-top: 1.5px solid white;
  color: white;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  font-size: 14px;

  text-align: justify;
  text-align-last: justify;
`;

export const BottomLeft = styled.div`
  float: left;
`;
export const BottomRight = styled.div`
  float: right;

  &p {
    margin-left: 10px;
  }
`;

export const Document = styled.a`
  color: white;
  display: inline-block;

  transition: 200ms ease-in;

  &:nth-child(1) {
    padding: 0 20px;
  }
  &:nth-child(2) {
    padding-left: 20px;
  }

  &:hover {
    color: #8ca68c;
    transition: 200ms ease-in;
  }
`;

export const Separator = styled.hr`
  margin-top: 100px;
  width: 90%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: ${({ first }) => (first ? "0px 0px 0px 10px" : "0px  0px 0px 60px")};
  transition: all 0.2s ease-in-out;

  @media (max-width: 1200px) {
    transition: all 0.2s ease-in-out;
    margin: 0px 0px 0px 40px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const Title = styled.p`
  font-size: ${({ primary }) => (primary ? "32px" : "22px")};
  color: #fff;
  margin-bottom: ${({ primary }) => (primary ? "10px" : "40px")};
  font-weight: bold;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #8ca68c;
    transition: 200ms ease-in;
  }
`;

export const Icon = styled.i`
  font-size: 18px;
  margin-right: 16px;
`;

export const Description = styled.p`
  color: #fff;
  margin-bottom: 40px;
  font-size: 18px;
`;

export const Button = styled(Link)`
  background: #8ca68c;
  border-radius: 3px;
  white-space: nowrap;
  padding: 10px 16px;
  color: white;
  font-size: 17px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  width: fit-content;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #697a69;
  }
`;
