import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Transaction from "../../components/Transaction";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import {
  Header,
  TransactionsContainer,
  ProfileContainer,
  Footer,
} from "./styles";

function Profile() {
  const [transactions, setTransactions] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserData() {
      try {
        const { data } = await axios.get(
          // "https://my-wallet-back-joao-marcelo.herokuapp.com/transactions",
          "http://localhost:5000/transactions",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log(data);
        setTransactions(data);
      } catch (error) {
        console.log("foi aqui!");
        alert("Ocorreu um erro, por favor tente novamente!");
        console.log(error.response);
      }
    }

    getUserData();
  }, [user]);

  function buildTransactions() {
    if (transactions.length > 0) {
      return transactions.map((transaction, index) => {
        const { type, date, description, value } = transaction;
        return (
          <>
            <Transaction
              key={index}
              type={type}
              date={date}
              description={description}
              value={value}
            />
            <div>Saldo: {balanceSection}</div>
          </>
        );
      });
    } else {
      return <p>Não há registro de entrada ou saída</p>;
    }
  }

  function buildBalance() {
    if (transactions) {
      return transactions.reduce((previous, current) => {
        if (current.type === "deposit") {
          return previous + current.value;
        } else {
          return previous - current.value;
        }
      }, 0);
    } else {
      return 0;
    }
  }

  const transacationsSection = buildTransactions();
  const balanceSection = buildBalance();
  return (
    <ProfileContainer>
      <Header>
        <h1>Olá, {user.name}</h1>
        <ion-icon name="log-out-outline"></ion-icon>
      </Header>
      <TransactionsContainer>
        <div>{transacationsSection}</div>
      </TransactionsContainer>
      <Footer>
        <Link to="/deposit">
          <button>Nova Entrada</button>
        </Link>
        <Link to="/withdraw">
          <button>Nova Saída</button>
        </Link>
      </Footer>
    </ProfileContainer>
  );
}

export default Profile;
