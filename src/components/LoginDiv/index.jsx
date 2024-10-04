import React from "react";
import { useState } from "react";
import './style.css';

export default function LoginDiv() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    function verify() {
        if (Username === 'adm' && Password === 'adm1234') {
            window.location.href = '/AdmHome'
        } else if (Username === 'user' && Password === 'user1234') {
            window.location.href = '/Home'
        }
    }

    return (
        <div className="login-div">
            <h1>Conectar</h1>
            <div className="LoginContent">
                <div className="InputContainer">
                    <label>Usuário: </label>
                    <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </div>

                <div className="InputContainer">
                    <label>Senha: </label>
                    <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
            </div>
                
            <div className="AContainer">
                <a href='/Sign-Up'>Criar uma conta</a>
                <a href="">Esqueceu a senha</a>
            </div>

            <button className="SubmitButton" onClick={verify}>Conectar</button>
        </div>
    );
}