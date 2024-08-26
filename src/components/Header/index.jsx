import React from "react";
import Logo from '../../assets/Logo.svg'
import { Container, Menu, ImgContainer, MenuItem,  } from "./style";
import { NavLink } from "react-router-dom";

export default function Header(){

    return (
        <Container id="header">
            <ImgContainer>
                <img src={Logo} alt="Recila Recife Logo" />
            </ImgContainer>

            <Menu>
                <MenuItem>
                    <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/organizacoes" className={({isActive}) => isActive ? "active" : ""}>Organizações</NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/eventos" className={({isActive}) => isActive ? "active" : ""}>Eventos</NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/estrategias" className={({isActive}) => isActive ? "active" : ""}>Estratégias</NavLink>
                </MenuItem>
            </Menu>


        </Container>
    )
}
