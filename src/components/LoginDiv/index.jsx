import React from "react";
import { useState } from "react";
import './style.css';

export default function LoginDiv() {
    const [InputValue1, setInputValue1] = useState('');
    const [InputValue2, setInputValue2] = useState('');

    function verify() {
        if (InputValue1 === 'adm' && InputValue2 === 'adm1234') {
            window.location.pathname = '../../Pages/AdmHome.jsx'
        } else if (InputValue1 === 'user' && InputValue2 === 'user1234') {
            window.location.pathname = '../../Pages/UserHome.jsx'
        }
    }

    return (
        <div className="login-div">
            <h1>login</h1>
            <div>
                <label>Usuário: </label>
                <input type="text" value={InputValue1} onChange={(e) => setInputValue1(e.target.value)} placeholder="Username" />
                <br/>
                <label>Senha: </label>
                <input type="password" value={InputValue2} onChange={(e) => setInputValue2(e.target.value)} placeholder="Password" />
            </div>
            <button onClick={verify}>Log-in</button>
        </div>
    );
}