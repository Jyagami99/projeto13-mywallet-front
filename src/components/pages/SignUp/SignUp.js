import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpContainer, FormSignUp } from "./styles";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        // "https://my-wallet-back-joao-marcelo.herokuapp.com/signup",
        "http://localhost:5000/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );

      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Ocorreu um erro, por favor tente novamente!");
      console.log(error);
    }
  }
  return (
    <>
      <SignUpContainer>
        <h1>MyWallet</h1>
        <FormSignUp>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" name="Entrar" onClick={handleSubmit}>
            Entrar
          </button>
        </FormSignUp>
        <span>
          <Link to="/">Já tem uma conta? Entre agora!</Link>
        </span>
      </SignUpContainer>
    </>
  );
}

export default SignUp;
