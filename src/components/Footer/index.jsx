import React from "react";
import { Descricao, AutoriaContainer, Container } from "./style";
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";

export default function Footer(){
    return ( 
        <Container>
            <Descricao>
                <p>Página criada para a atividade da turma de BackEnd da Softex</p>
                <p>Recife 2024 ©</p>
            </Descricao>
            <AutoriaContainer>
                <p>Criado por Luisa Correia</p>
                <a href="https://github.com/luisacs923" target="_blank">
                    <GithubOutlined />
                </a>
                <a href="https://www.linkedin.com/in/luisacorreia923/" target="_blank">
                    <LinkedinFilled />
                </a>
            </AutoriaContainer>
        </Container>
    );
}