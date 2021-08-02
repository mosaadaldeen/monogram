import styled from "styled-components";

export const MenuLink = styled.a`
  padding: 0.5rem;
  cursor: pointer;
  margin-right: 1rem;
  font-weight: 300;
  text-decoration: none;
  color: #efc2b3 !important;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #ff501c;
  }

  @media (max-width: 992px) {
    &:last-child {
      z-index: 100;
      top: 0;
      font-size: 2.5rem;
      visibility: visible;
      right: 0;
    }
`;

export const Nav = styled.div`
  padding: 0.5rem 1rem;
  z-index: 10;
  position: sticky;
  border-radius: 0.5rem;
  top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  margin: 0 auto;
  background: #1a2456 !important;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  position: relative;
  @media (max-width: 992px) {
    overflow: hidden;
    align-items: flex-start;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "170px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #efc2b3;
    margin-bottom: 6px;
    border-radius: 5px;
  }
  @media (max-width: 992px) {
    display: flex;
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
  color: #efc2b3 !important;
  transition: all 0.3s ease-in;
  font-weight: 100;
  position: absolute;
  right: 0;
  top: 0;
  &:hover {
    color: #ff8b68;
  }
`;

export const Logo = styled.a`
  margin: 3px;
  color: #efc2b3 !important;
  max-width: 100px;
  cursor: pointer;
  &:hover {
    color:     #ff501c
    opacity: 1;
  }
`;
