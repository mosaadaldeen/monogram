import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
  margin: 10px auto;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 95%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  &h2 {
    font-weight: bolder;
  }
`;
