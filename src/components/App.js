import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
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
            {/* <Route path="/feed" element={<Feed />} /> */}
            {/* <Route path="/feed" element={<Feed />} /> */}
            {/* <Route path="/feed" element={<Feed />} /> */}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
