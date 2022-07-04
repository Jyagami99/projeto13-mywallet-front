import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import { Container, Form } from "./styles";

function Deposit() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      type: "deposit",
      description,
      value: parseFloat(value),
    };
    const headers = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    try {
      await axios.post("http://localhost:5000/transactions", body, headers);
      alert("Registro feito com sucesso!");
      navigate("/profile");
    } catch (error) {
      console.log("An error occurred.");
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>Nova entrada</h1>
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

export default Deposit;
