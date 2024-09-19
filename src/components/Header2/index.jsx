import React from "react";
import Logo from '../../assets/image/Logo1.jpeg';
import UserIcon from '../../assets/image/user.png';
import './style.css';

export default function Header2() {
    return (
        <div className="HeaderContainer">
            <div className="LogoContainer">
                <img src={Logo} alt="Icone da logo" />
                <p>BuyFlow</p>
            </div>
            <nav>
                <a href=""><strong>Home</strong></a>
                <a href="">Compras</a>
                <a href="">Sobre</a>
            </nav>
            <div className="UserAccount">
                <p>User</p>
                <img src={UserIcon} alt="" />
            </div>
        </div>
    )
}