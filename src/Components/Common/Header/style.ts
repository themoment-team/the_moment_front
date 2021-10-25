import styled from "styled-components";
import device from "Constants/reactive";

interface NavBar {
  active: boolean;
}

export const Header = styled.header `
  position: fixed;
  top: 0;
  width: 100vw;
  height:100px;
  background: white;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1230px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BlurWrapper = styled.div `
  background: red;
  filter: blur(30px);
  position: absolute;
  width : 100vw;
  top: 0;
  left : 0;
  z-index: -1;
  height: 100px;

`;

export const Logo = styled.h1 `
  display: inline-block;
  border-right: 2px solid #6A76E9;
  padding-right: 21px;
  margin-left: 5vw;
  @media screen and (max-width: 640px) {
    border: none;
  }
`;

export const HeaderNav = styled.nav < NavBar > `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding-right: 5vw;
  @media screen and (max-width: 1230px) {
    padding-left: 5vw;
    width : 100vw;
    flex-direction: column;
    align-items: flex-start;
    display: ${(props) => (props.active ? "none" : "flex")};
  }
  & > a {
    display: inline-block;
    margin: 0px 30px;
    @media screen and (max-width: 1230px) {
      margin: 24px 0;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  button {
    margin-right: 0;
    font-family: "Noto Sans CJK KR", sans-serif;
  }
`;

export const NavButton = styled.button `
  display: inline-block;
  margin: 36px;
  padding: 0;
  background: none;
  text-decoration: none;
  color: #6A76E9;
  font-size: 1rem;
  @media screen and (max-width: 1230px) {
    margin: 24px 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const BarWrapper = styled.div `
  @media screen and (min-width: 1230px) {
    display: none;
  }
  & > svg {
    z-index: 2;
    font-size: 28px;
    color: #6A76E9;
    cursor: pointer;
  }
`;

export const HeaderContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1230px) {
    width: 93vw;
  }
  & > a {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.span `
  @media screen and (max-width: 640px) {
    display: none;
  }
  align-items: center;
  color: #6A76E9;
  font-weight: 600;
  font-size: 22px;
  margin: 21px;
`;