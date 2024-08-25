import { Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/organizacoes'>Organizações</Link>
                </li>
            </ul>
        </header>
    )
}
