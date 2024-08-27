import React from "react"
import Chamada from "./components/Chamada/index.jsx";
import { ChamadaContainer, Container } from "./style.js";
import { Link } from "react-router-dom";
import Button from "../../components/Button/index.jsx";
import Text from "../../components/Text/index.jsx";

export default function Home(){
    return (
        <main>
            <ChamadaContainer>
                <Chamada />
            </ChamadaContainer>
            <Container>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text.Paragraph>
                        Você participa de uma Organização que realiza Eventos e atividades de Reciclagem? Cadastre-se já!
                    </Text.Paragraph>
                    <Button>
                        Cadastrar Organização
                    </Button>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text.Paragraph>
                        Já possui uma Organização cadastrada? Consulte e monitore aqui os seus Eventos cadastrados:
                    </Text.Paragraph>
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