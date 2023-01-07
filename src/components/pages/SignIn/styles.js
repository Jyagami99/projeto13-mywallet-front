import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap");

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 30px;
  line-height: 50px;
  text-align: center;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
`;

const Input = styled.input`
  margin-bottom: 13px;
  box-sizing: border-box;
  width: 326px;
  height: 58px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  ::placeholder {
    color: #7e7e7e;
  }
`;

const Button = styled.button`
  width: 326px;
  height: 46px;
  border: none;
  background: #a328d6;
  border-radius: 5px;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
`;

const LinkPage = styled(Link)`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  margin-top: 32px;
`;

export { LoginContainer, H1, FormLogin, Input, Button, LinkPage };
