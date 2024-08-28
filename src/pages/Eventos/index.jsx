import React, { useState, useEffect, createContext } from "react";
import Template from "../../components/Template";
import { Container, SubContainer, CardText } from "./style";
import Button from "../../components/Button";
import { Divider, List, Modal } from "antd";
import Card from "../../components/Card";
import Text from "../../components/Text";
import EventsDisplay from "./components/EventsDisplay";
import axios from "axios"

const ModalContext = createContext(null);
const config = {
    title: 'Deletar Evento',
    content: (
        <>
            <ModalContext.Consumer>
                {(evento) => (
                    <>Excluir o Evento '{evento.nome_evento}'?</>
                ) }
            </ModalContext.Consumer>        
        </>
    ),
}

export default function Eventos(){

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventos, setEventos] = useState([])
    const [modal, contextHolder] = Modal.useModal();

    useEffect(()=> {
        async function listaEventos() {
            const result = await axios.get("http://localhost:3000/eventos/busca")
            setEventos(result.data.data);
        }
        listaEventos();
    }, [])

    function formatedData(value){
        return new Date(value).toLocaleDateString();
    }

    return (
        <Template>
            <Container>
                <Text.H1>Eventos</Text.H1>
                <SubContainer>
                    <Text.Paragraph>Gostaria de cadastrar um Evento? <a href="/eventos/cadastro" style={{textDecoration: 'underline'}}>Clique aqui!</a></Text.Paragraph>
                    {/* <div>
                        <Text>Buscar um Evento:</Text>
                        <Input style={{letterSpacing: -1, fontSize: 16}} placeholder="Digite o nome do Evento"/>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Button>Buscar</Button>
                    </div> */}
                </SubContainer>
                <SubContainer>
                    <div>
                        <Text.H2>Eventos Cadastrados:</Text.H2>
                        <List 
                            grid={{gutter:32, column: 2}} 
                            dataSource={eventos}
                            renderItem={(item) => (
                                <List.Item key={item.ID} onClick={() => setSelectedEvent(item.ID)}>
                                    <Card title={item.nome_evento} size="small">
                                        <CardText>Data: {formatedData(item.data_evento)}</CardText>
                                        <Divider style={{margin: '5px 0px'}} />
                                        <CardText>Localização: {item.localizacao_evento}</CardText>
                                    </Card>
                                </List.Item>
                            )} />
                    </div>
                </SubContainer>
                {selectedEvent && (
                    <ModalContext.Provider value={selectedEvent}>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes do Evento {eventos.find(el => el.ID === selectedEvent).nome_evento}</Text.H2>
                            <EventsDisplay evento={eventos.find(m => m.ID === selectedEvent)} />
                        </SubContainer>
                        <SubContainer>
                            <div style={{display: 'flex', alignContent: 'center', justifyContent:'space-around'}}>
                                <Button>
                                    Editar Evento
                                </Button>
                                <Button onClick={async () => {
                                    const confirmed = await modal.confirm(config);
                                    console.log("Confirmed: ", confirmed);
                                }}>
                                    Deletar Evento
                                </Button>
                            </div>
                        </SubContainer>
                        {contextHolder}
                    </ModalContext.Provider>
                )}
            </Container>
        </Template>
    )
}