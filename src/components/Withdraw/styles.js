import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-itens: center;
  padding: 70px 30px;
  height: 450px;

  h1 {
    margin-bottom: 40px;

    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    color: #ffffff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  input {
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 12px;
  }

  button {
    height: 46px;
    background: #a328d6;
    border-radius: 5px;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }
`;
