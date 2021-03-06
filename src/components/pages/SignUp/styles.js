import styled from "styled-components";

export const SignUpContainer = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap");

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  text-align: center;
  padding: 70px 30px;
  height: 450px;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
  }
`;

export const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 58px;
    margin: 0px 0px 13px 0px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 0px;
  }
  button {
    height: 46px;
    background-color: #a328d6;
    border-radius: 5px;
    margin-bottom: 36px;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    color: #ffffff;
  }
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    color: #ffffff;
  }
`;
