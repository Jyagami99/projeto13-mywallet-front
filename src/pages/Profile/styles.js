import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  text-align: center;
  padding: 70px 30px;
  height: 450px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 22px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;

    color: #ffffff;
  }

  ion-icon {
    color: #ffffff;
    font-size: 26px;
  }
`;

export const TransactionsContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;

  background: #ffffff;
  border-radius: 5px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;

    color: #868686;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;

  button {
    height: 114px;
    width: 150px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
    background: #a328d6;
    border-radius: 5px;
  }
`;
