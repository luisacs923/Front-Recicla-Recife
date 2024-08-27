import React, { useState } from "react";
import Template from "../../components/Template";
import { Container, Title, SubContainer, SubTitle, CardText } from "./style";
import Button from "../../components/Button";
import { Divider, Input, List } from "antd";
import Card from "../../components/Card";
import styles from "../../styles";
import Text from "../../components/Text";
import EventsDisplay from "./components/EventsDisplay";

export default function Eventos(){

    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <Template>
            <Container>
                <Text.H1>Eventos</Text.H1>
                <SubContainer>
                    <Text.Paragraph>Gostaria de cadastrar um Evento? <a href="/eventos/cadastro" style={{textDecoration: 'underline'}}>Clique aqui!</a></Text.Paragraph>
                    <div>
                        <Text>Buscar uma Evento:</Text>
                        <Input style={{letterSpacing: -1, fontSize: 16}} placeholder="Digite o nome do Evento"/>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Button>Buscar</Button>
                    </div>
                </SubContainer>
                <SubContainer>
                    <div>
                        <Text.H2>Eventos Cadastrados:</Text.H2>
                        <List 
                            grid={{gutter:32, column: 2}} 
                            dataSource={mocked}
                            renderItem={(item) => (
                                <List.Item key={item.id} onClick={() => setSelectedEvent(item.id)}>
                                    <Card title={item.nome} size="small">
                                        <CardText>Data: {item.data}</CardText>
                                        <Divider style={{margin: '5px 0px'}} />
                                        <CardText>Localização: {item.localizacao}</CardText>
                                        <Divider style={{margin: '5px 0px'}} />
                                        <CardText>Estratégias de Reciclagem: <span style={{color: styles.primaryColor, fontWeight: 'bold'}}>{item.estrategias.length}</span></CardText>
                                    </Card>
                                </List.Item>
                            )} />
                    </div>
                </SubContainer>
                {selectedEvent && (
                    <>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes do Evento {mocked.find(el => el.id === selectedEvent).nome}</Text.H2>
                            <EventsDisplay evento={mocked.find(m => m.id === selectedEvent)} />
                        </SubContainer>
                        <SubContainer>
                            <div style={{display: 'flex', alignContent: 'center', justifyContent:'space-around'}}>
                                <Button>
                                    Editar Evento
                                </Button>
                                <Button>
                                    Deletar Evento
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
      nome: "Dia do Meio Ambiente",
      data: "15/09/2024",
      localizacao: "Parque Ibirapuera, SP",
      descricao: "Evento dedicado à promoção de práticas sustentáveis.",
      estrategias: [{id: 1, nome: "Reciclagem"}, {id: 2, nome: "Redução de Embalagens"}, {id: 3, nome:"Recuperação de Energia"}]
    },
    {
      id: 2,
      nome: "Dia do Meio Ambiente 2",
      data: "15/09/2025",
      localizacao: "Parque Ibirapuera, SP",
      descricao: "Evento dedicado à promoção de práticas sustentáveis.",
      estrategias: [{id: 1, nome: "Reciclagem"}, {id: 2, nome: "Redução de Embalagens"}, {id: 3, nome:"Recuperação de Energia"}]
    },
  ]