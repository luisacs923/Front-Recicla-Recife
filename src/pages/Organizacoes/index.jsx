import React, { useState } from "react";
import Template from "../../components/Template";
import { Container, Title, SubContainer, SubTitle, CardText } from "./style";
import Button from "../../components/Button";
import { Divider, Input, List } from "antd";
import Card from "../../components/Card";
import styles from "../../styles";
import Text from "../../components/Text";
import EventsDisplay from "./components/EventsDisplay";

export default function Organizacoes(){

    const [selectedOrganization, setSelectedOrganization] = useState(null);

    return (
        <Template>
            <Container>
                <Text.H1>Organizações</Text.H1>
                <SubContainer>
                    <Text.Paragraph>Gostaria de cadastrar uma Organização? <a href="/organizacoes/cadastro">Clique aqui!</a></Text.Paragraph>
                    <div>
                        <Text>Buscar uma organização:</Text>
                        <Input style={{letterSpacing: -1, fontSize: 16}} placeholder="Digite o nome da Organização"/>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Button>Buscar</Button>
                    </div>
                </SubContainer>
                <SubContainer>
                    <div>
                        <Text.H2>Organizações Cadastradas:</Text.H2>
                        <List 
                            grid={{gutter:32, column: 2}} 
                            dataSource={mocked}
                            renderItem={(item) => (
                                <List.Item key={item.id} onClick={() => setSelectedOrganization(item.id)}>
                                    <Card title={item.nome} size="small">
                                        <CardText>Responsável: {item.responsavel}</CardText>
                                        <Divider style={{marginTop: 0, marginBottom: 0}} />
                                        <CardText>CNPJ: {item.cnpj}</CardText>
                                        <Divider style={{marginTop: 0, marginBottom: 0}} />
                                        <CardText>Localização: {item.localizacao}</CardText>
                                        <Divider style={{marginTop: 0, marginBottom: 0}} />
                                        <CardText>Eventos: <span style={{color: styles.primaryColor, fontWeight: 'bold'}}>{item.eventos}</span></CardText>
                                    </Card>
                                </List.Item>
                            )} />
                    </div>
                </SubContainer>
                {selectedOrganization && (
                    <>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes da Organização {mocked.find(el => el.id === selectedOrganization).nome}</Text.H2>
                            <EventsDisplay organizacao={mocked.find(m => m.id === selectedOrganization)} />
                        </SubContainer>
                        <SubContainer>
                            <div style={{display: 'flex', alignContent: 'center', justifyContent:'space-around'}}>
                                <Button>
                                    Editar Organização
                                </Button>
                                <Button>
                                    Deletar Organização
                                </Button>
                            </div>
                        </SubContainer>
                    </>
                )}



                
            </Container>
        </Template>
    )
}

const mocked = [
    {
        id: 1,
        nome: 'EcoEvento',
        responsavel: 'Ana Costa',
        cnpj: '123-69',
        localizacao: 'sumpaulo',
        eventos: 2,
    },
    {
        id: 2,
        nome: 'EcoEvento2',
        responsavel: 'Ana Frente',
        cnpj: '12345',
        localizacao: 'RioJan',
        eventos: 3,
    },
    {   
        id: 3,
        nome: 'EcoEvento3',
        responsavel: 'Ana Lado',
        cnpj: '969696',
        localizacao: 'Ricife',
        eventos: 4,
    },
    {
        id: 4,
        nome: 'EcoEvento4',
        responsavel: 'Ana Cabeça Pra Baixo',
        cnpj: '????',
        localizacao: 'Australia',
        eventos: 0,
    },
]