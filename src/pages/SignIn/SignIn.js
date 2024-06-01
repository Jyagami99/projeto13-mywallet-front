import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "./../../contexts/UserContext";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { FormLogin } from "../../components/FormLogin";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { LinkPage } from "../../components/LinkPage";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };
    try {
      const { data } = await axios.post(
        // "https://my-wallet-back-joao-marcelo.herokuapp.com/signin",
        "http://localhost:5000/signin",
        body
      );
      const { token, name } = data;

      setUser({ name, token });
      navigate("/profile");
    } catch (error) {
      alert("Ocorreu um erro, por favor tente novamente!");
    }
  }

  return (
    <Container>
      <Header>MyWallet</Header>
      <FormLogin>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" onClick={handleSubmit} name="Entrar">
          Entrar
        </Button>
      </FormLogin>

      <LinkPage to="/signup">Primeira vez? Cadastre-se!</LinkPage>
    </Container>
  );
}

export default SignIn;
