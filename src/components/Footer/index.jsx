import React from "react";
import { Descricao, Autoria, Container } from "./style";

export default function Footer(){
    return ( 
        <Container>
            <Descricao>
                <p>Criado para demonstração de projeto da turma 5 do programa de Formação Acelerada em Programação da Softex Pernambuco</p>
            </Descricao>
            <Autoria>
                <p>Criado por Luisa Correia</p>
            </Autoria>
        </Container>
    );
}