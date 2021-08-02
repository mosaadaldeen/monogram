import styled from "styled-components";
import img from "/public/5.webp";

export const Section = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  @media (max-width: 570px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const First = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LastCard = styled.div`
  margin-top: 20px;
  padding: 20px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  @media (max-width: 767px) {
    width: 85%;
    margin: 20px auto;
  }
  @media (max-width: 570px) {
    width: 100%;
    margin: 20px auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 45%;
  @media (max-width: 767px) {
    width: 80%;
    margin: 20px auto;
  }
  @media (max-width: 570px) {
    width: 95%;
    margin: 20px auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  &:hover {
    background-image: url(${img.src});
    // z-index: 1000;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const P = styled.div`
  font-weight: bolder;
  letter-spacing: 1px;
  font-size: 20px;
  height: auto;
`;

export const Desc = styled.div`
  font-weight: 300;
  font-size: 15px;
`;
