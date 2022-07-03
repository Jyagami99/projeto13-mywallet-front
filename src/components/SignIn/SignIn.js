import React from "react";
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
          <a>Primeira vez? Cadastre-se!</a>
        </FormLogin>
      </LoginContainer>
    </>
  );
}

export default SignIn;
