import React from "react";
import { useState } from "react";
import "./style.css";

export default function SignUpDiv() {
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  function Goto() {
    window.location.href = "/Home";
  }

  return (
    <div className="SignUpDiv">
      <div className="SingUpContainer">
        <h1>Cadastrar</h1>
        <div className="SingUpContent">
          <div className="InputContainer2">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              id=""
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="InputContainer2">
            <label htmlFor="">Usuário: </label>
            <input
              type="text"
              id=""
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="InputContainer2">
            <label htmlFor="">Senha: </label>
            <input
              type="password"
              id=""
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="InputContainer2">
            <label htmlFor="">Confirmação da Senha: </label>
            <input
              type="password"
              id=""
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <a href="/">Já tem uma conta</a>

        <button className="SubmitButton2" onClick={Goto}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}
