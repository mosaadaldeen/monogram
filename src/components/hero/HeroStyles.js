import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  z-index: -1000;
  height: 100vh;
  > div {
    position: unset !important;
  }
`;

export const Card = styled.div`
  float: right;
  display: flex;
  margin-right: 30px;
  flex-direction: column;
  @media (max-width: 767px) {
    // margin: auto;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  color: #1a2456;
  margin-bottom: 10px;
  z-index: 1000;
  font-size: 35px;
  @media (max-width: 767px) {
    text-align: center;
    font-size: 26px;
  }
`;

export const Description = styled.p`
  margin-bottom: 20px;
  color: #1a2456;
  font-weight: 300;
  z-index: 1000;
  font-size: 22px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
