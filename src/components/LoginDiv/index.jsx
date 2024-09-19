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
            <h1>login</h1>
            <div>
                <label>Usuário: </label>
                <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <br/>
                <label>Senha: </label>
                <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                
            </div>
            <button className="SubmitButton" onClick={verify}>conectar</button>
        </div>
    );
}