import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: '"Nunito Sans", sans-serif';
    line-height: 1.5;
    background-color: #ffffff;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a {
    color: rgb(0, 30, 74);
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;