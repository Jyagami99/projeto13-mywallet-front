import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormLogin, LoginContainer } from "./styles";
import axios from "axios";

import UserContext from "../../../contexts/UserContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };
    try {
      const { data } = await axios.post(
        "https://my-wallet-back-joao-marcelo.herokuapp.com/signin",
        // "http://localhost:5000/signin",
        body
      );
      const { token, name } = data;
      console.log(user, token);

      setUser({ name, token });
      navigate("/profile");
    } catch (error) {
      alert("Ocorreu um erro, por favor tente novamente!");
    }
  }

  return (
    <>
      <LoginContainer>
        <h1>MyWallet</h1>
        <FormLogin>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit} name="Entrar">
            Entrar
          </button>
        </FormLogin>
        <span>
          <Link to="/signup">Primeira vez? Cadastre-se!</Link>
        </span>
      </LoginContainer>
    </>
  );
}

export default SignIn;
