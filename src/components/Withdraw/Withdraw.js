import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form } from "./styles";

import UserContext from "../../contexts/UserContext";

function Withdraw() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      type: "withdraw",
      description,
      value: parseFloat(value),
    };
    const headers = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    try {
      await axios.post(
        "https://my-wallet-back-joao-marcelo.herokuapp.com/transactions",
        body,
        headers
      );
      alert("Registro feito com sucesso!");
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>Nova saída</h1>
      <Form>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Salvar entrada
        </button>
      </Form>
    </Container>
  );
}

export default Withdraw;
