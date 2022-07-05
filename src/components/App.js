import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Deposit from "./pages/Deposit/Deposit";
import Withdraw from "./pages/Withdraw/Withdraw";
import GlobalStyles from "../assets/css/GlobalStyle";

import UserContext from "../contexts/UserContext";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <GlobalStyles />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
