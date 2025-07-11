import React, { useState } from "react";
import mascot from "./mascot.png";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!loggedIn) {
    return (
      <div className="container">
        <img src={mascot} alt="Mascote" className="mascot" />
        <h1 className="title">TEACHER MOMMY IA</h1>
        <div className="login-box">
          <input
            type="email"
            placeholder="E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="SENHA"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setLoggedIn(true)}>ENTRAR</button>
        </div>
        <p className="footer">Com amor, Teacher Mommy ❤️</p>
      </div>
    );
  }

  return (
    <div className="container main">
      <h2>Bem-vindo à Teacher Mommy IA!</h2>
    </div>
  );
}

export default App;