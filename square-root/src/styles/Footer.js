import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(62, 61, 61, 1) 0%,
    rgba(79, 77, 77, 1) 100%
  );
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Title = styled.p`
  font-size: ${({ primary }) => (primary ? '30px' : "24px")};
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Icon = styled.i`
  font-size: 18px;
  margin-right: 16px;
`;