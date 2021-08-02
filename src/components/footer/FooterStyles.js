import styled from "styled-components";

export const SectionFooter = styled.div`
  background-color: #1a2456;
  z-index: 100000;
  padding: 30px 20px;
  margin-top: 60px;
  // bottom: 0;
  // position: fixed;
  max-height: 100%;
  width: 100%;
  color: #efc2b3;
  display: flex;
  justify-content: space-around;
  @media (max-width: 992px) {
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const Section1 = styled.div`
  width: 15%;
  // z-index: 100000;
  margin: 10px;
  line-height: 1rem;
  @media (max-width: 992px) {
    width: 30%;
    margin: 30px 0;
    height: auto;
  }
  @media (max-width: 600px) {
    width: 40%;
    margin: 20px 0 0 0;
    text-align: left;
    &:nth-child(5) {
      width: 80%;
      margin-bottom: 20px;
    }
  }
`;

export const SectionTitle = styled.div`
  font-size: 0.8em;
  font-weight: bolder;
  letter-spacing: 1px;
  min-width: 6em;
  text-transform: uppercase;
  color: #efc2b3;
  margin-bottom: 1em;
`;

export const Span = styled.div`
  font-size: 0.8rem;
  line-height: 1.5rem;
  &:hover {
    color: #ff8b68;
    opacity: 1;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Form = styled.div`
  @media (max-width: 600px) {
    display: flex;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Subscribe here",
}))`
  padding: 5px 11px;
  font-size: 0.9rem;
  background-color: #1a2456;
  margin-top: 11px;
  border: 1px solid #efc2b3;
  margin-bottom: 0.7rem;
  border-radius: 0.3rem;
`;

export const Button = styled.a`
  background-color: #efc2b3;
  border-color: #efc2b3;
  color: #212529;
  opacity: 0.65;
  margin: 10px;
  font-weight: bold;
  border-radius: 15px;
  padding: 0.3rem 0.7rem;
`;

export const SocialIcons = styled.div`
  margin: 15px 0;
`;
export const SocialIcon = styled.a`
  align-items: center;
  background-color: #efc2b3;
  color: #212529;
  margin: 0.2rem;
  border-radius: 50px;
  display: inline-flex;
  padding: 0.5em;
  text-align: center;
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
  }
`;
