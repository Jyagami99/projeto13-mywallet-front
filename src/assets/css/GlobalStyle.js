import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700");

body {
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
  background-color: #8c11be;
}

h1 {
  color: #fff;
}
`;

export default GlobalStyle;
