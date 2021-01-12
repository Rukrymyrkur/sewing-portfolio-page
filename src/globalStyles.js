import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
      scroll-behavior: smooth;
      scroll-snap-type: y proximity;
      overflow-y: scroll;
    }


*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Staatliches', serif;
    letter-spacing: 7px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

}
`;

export const Container = styled.div`
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - 277px - 50px);

  @media screen and (max-width: 991px) {
    padding-right: 0px;
    padding-left: 0px;
    margin: 0 0 0 0;
  }
  @media screen and (max-width: 425px) {
    padding-right: 0px;
    padding-left: 0px;
    margin: 0 0 0 0;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4b59f7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#4b59f7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
