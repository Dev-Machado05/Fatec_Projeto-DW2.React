import React from "react";
import { useState } from "react"; 
import './style.css';

export default function SignUpDiv() {
    const [Email, setEmail] = useState('');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    function Goto() {
        window.location.href = '/Home';
    }

    return (
        <div className="SignUpDiv">
            <h1>Sign-up</h1>
            <div>
                <label htmlFor="">Email: </label>
                <input type="email" id="" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                <br />

                <label htmlFor="">Usuário: </label>
                <input type="text" id="" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                
                <label htmlFor="">Senha: </label>
                <input type="password" id="" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                
                <label htmlFor="">Confirmação da Senha: </label>
                <input type="password" id="" placeholder="Confirm Password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            </div>
            <button className="SubmitButton" onClick={Goto}>Cadastrar</button>
        </div>
    )
}