import styled from "styled-components";

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
  margin: 0;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1200px) {
    transition: all 0.2s ease-in-out;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 40%);
  grid-gap: 120px;
  margin-bottom: ${({ last }) => (last ? "10px" : "80px")};
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 100%);
    grid-gap: 40px;
  }
`;

export const IamgeContainer = styled.div`
  background: #e9e5fa;
  width: ${({ square }) => (square ? "260px" : "230px")};
  height: ${({ square }) => (square ? "230px" : "190px")};
  margin: 0;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-size: 18px;
  line-height: 18px;
  margin: 15px 0 0px;
`;
export const Position = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 20px;  
  letter-spacing: 0em;
  line-height: 1.8;
`;
