import React from "react";
import { useState } from "react"; 
import './style.css';

export default function SignUpDiv() {
    const [Email, setEmail] = useState('');
    const [Username, setUsername] = useState('');
    //terminar de implantar as funcionalidades dos inputs

    function Goto() {
        window.location.href = '/UserHome';
    }

    return (
        <div className="SignUpDiv">
            <h1>Sign-up</h1>
            <div>
                <label htmlFor="">Email: </label>
                <input type="email" id="" placeholder="Email" />
                <br />

                <label htmlFor="">Usuário: </label>
                <input type="text" id="" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                
                <label htmlFor="">Senha: </label>
                <input type="password" id="" placeholder="Password" />
                <br />
                
                <label htmlFor="">Confirmação da Senha: </label>
                <input type="password" id="" placeholder="Confirm Password" />

            </div>
            <button className="SubmitButton" onClick={Goto}>Cadastrar</button>
        </div>
    )
}