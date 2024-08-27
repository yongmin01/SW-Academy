import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }
  body {
    position: relative;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #F8F8F8;
    border-color: black;
    align-items: center;
  }
  .App {
    position: relative;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    border-color: black;
    align-items: center;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
