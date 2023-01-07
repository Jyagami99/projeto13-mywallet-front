import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { FormLogin } from "../../components/FormLogin";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { LinkPage } from "../../components/LinkPage";

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
        "https://my-wallet-back-joao-marcelo.herokuapp.com/signup",
        // "http://localhost:5000/signup",
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
      <Container>
        <Header>MyWallet</Header>
        <FormLogin>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" name="Entrar" onClick={handleSubmit}>
            Entrar
          </Button>
        </FormLogin>
        <span>
          <LinkPage to="/">Já tem uma conta? Entre agora!</LinkPage>
        </span>
      </Container>
    </>
  );
}

export default SignUp;
