import React from "react";
import { Link } from "react-router-dom";
import "./styles";
import { FormLogin, LoginContainer } from "./styles";

function SignIn() {
  return (
    <>
      <LoginContainer>
        <h1>MyWallet</h1>
        <FormLogin>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit" name="Entrar">
            Entrar
          </button>
          <span>
            <Link to="/signup">Primeira vez? Cadastre-se!</Link>
          </span>
        </FormLogin>
      </LoginContainer>
    </>
  );
}

export default SignIn;
