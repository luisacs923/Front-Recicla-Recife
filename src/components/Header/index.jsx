import React from "react";
import Logo from '../../assets/Logo.svg'
import { Container, Menu, ImgContainer, MenuItem,  } from "./style";
import { NavLink } from "react-router-dom";
import Text from "../Text";

export default function Header(){

    return (
        <Container id="header">
            <ImgContainer>
                <img src={Logo} alt="Recila Recife Logo" />
            </ImgContainer>

            <Menu>
                <MenuItem>
                    <Text.MenuItem><NavLink to="/" className={({isActive}) => isActive ? "active" : ""} >Home</NavLink></Text.MenuItem>
                </MenuItem>
                <MenuItem>
                    <Text.MenuItem><NavLink to="/organizacoes" className={({isActive}) => isActive ? "active" : ""}>Organizações</NavLink></Text.MenuItem>
                </MenuItem>
                <MenuItem>
                    <Text.MenuItem><NavLink to="/eventos" className={({isActive}) => isActive ? "active" : ""}>Eventos</NavLink></Text.MenuItem>
                </MenuItem>
                <MenuItem>
                    <Text.MenuItem><NavLink to="/estrategias" className={({isActive}) => isActive ? "active" : ""}>Estratégias</NavLink></Text.MenuItem>
                </MenuItem>
            </Menu>


        </Container>
    )
}
