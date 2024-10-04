import React from "react";
import Header from '../components/Header2/index';
import TestePoke from "../components/testePoke/index";
import '../Styles/UserHome.css'

export default function UserHome() {
    return(
        <div className="UserHome-container">
            <Header />
            <div className="Main-content">
                <h3 className="Temas">Produtos</h3>
                <div className="products">
                    <TestePoke />
                </div>
            </div>
        </div>
    )
}