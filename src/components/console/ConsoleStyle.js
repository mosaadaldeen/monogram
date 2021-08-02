import styled from "styled-components";
// import img from "/public/5.webp";

export const Section = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  color: #1a2456;
  text-align: center;
  padding: 30px;
  &h1 {
    font-size: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  letter-spacing: 3px;
`;

export const P = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`;
