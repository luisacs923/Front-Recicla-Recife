import React from "react"
import Chamada from "./components/Chamada/index.jsx";
import { Button, ChamadaContainer, Container, Text } from "./style.js";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <main>
            <ChamadaContainer>
                <Chamada />
            </ChamadaContainer>
            <Container>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>
                        Você participa de uma Organização que realiza Eventos e atividades de Reciclagem? Cadastre-se já!
                    </Text>
                    <Button>
                        Cadastrar Organização
                    </Button>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>
                        Já possui uma Organização cadastrada? Consulte e monitore aqui os seus Eventos cadastrados:
                    </Text>
                    <Link to='/eventos'>
                        <Button>
                            Eventos
                        </Button>
                    </Link>
                </div>
            </Container>
        </main>
    );
}