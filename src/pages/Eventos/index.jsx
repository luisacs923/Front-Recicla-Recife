import React, { useState, useEffect } from "react";
import Template from "../../components/Template";
import { Container, SubContainer, CardText } from "./style";
import Button from "../../components/Button";
import { Divider, List } from "antd";
import Card from "../../components/Card";
import Text from "../../components/Text";
import EventsDisplay from "./components/EventsDisplay";
import axios from "axios"
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";

export default function Eventos(){

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventos, setEventos] = useState([])
    const [loading, setLoading] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [editLoading, setEditLoading] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    async function handleSubmit(data) {
        setEditLoading(true);
        try {
            await axios.post(`http://localhost:3000/eventos/atualizar/${selectedEvent.ID}`, data);
            await axios.post(`http://localhost:3000/eventos/associar/${selectedEvent.ID}`, { estrategias: data.estrategias });
            setEditOpen(false);
        } catch (error){ 
            console.log("Erro na requisição ao backend");
        } finally {
            setEditLoading(false);   
        }
    }

    async function handleDelete(ID_evento) {
        setDeleteLoading(true);
        try {
            await axios.delete(`http://localhost:3000/eventos/deletar/${ID_evento}`);
            setDeleteOpen(false);
        } catch (error) {
            console.log("Erro ao se comunicar com o backend");
        } finally {
            setDeleteLoading(false);
        }
    }

    useEffect(()=> {
        async function listaEventos() {
            setLoading(true);
            try {
                const result = await axios.get("http://localhost:3000/eventos/busca")
                setEventos(result.data.data);
            } catch (error) {
                console.log("Erro ao se comunicar com o backend");
                setEventos(mock);
            } finally {
                setLoading(false);
                setSelectedEvent(null);
            }
        }
        listaEventos();
    }, [])

    function formattedData(value){
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
                            loading={loading}
                            grid={{gutter:32, column: 2}} 
                            dataSource={eventos}
                            renderItem={(item) => (
                                <List.Item key={item.ID} onClick={() => setSelectedEvent(item)}>
                                    <Card title={item.nome_evento} size="small">
                                        <CardText>Data: {formattedData(item.data_evento)}</CardText>
                                        <Divider style={{margin: '5px 0px'}} />
                                        <CardText>Localização: {item.localizacao_evento}</CardText>
                                    </Card>
                                </List.Item>
                            )} />
                    </div>
                </SubContainer>
                {(selectedEvent && !loading) && (
                    <>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes do Evento {selectedEvent.nome_evento}</Text.H2>
                            <EventsDisplay evento={selectedEvent} />
                        </SubContainer>
                        <SubContainer>
                            <div style={{display: 'flex', alignContent: 'center', justifyContent:'space-around'}}>
                                <Button onClick={() => setEditOpen(true)}>
                                    Editar Evento
                                </Button>
                                <Button onClick={() => setDeleteOpen(true)}>
                                    Deletar Evento
                                </Button>
                            </div>
                        </SubContainer>
                        <EditModal 
                            open={editOpen} 
                            title="Editar Evento" 
                            onSubmit={handleSubmit} 
                            footer={[]} 
                            evento={selectedEvent} 
                            loading={editLoading} 
                            onCancel={() => setEditOpen(false)} 
                        />
                        <DeleteModal 
                            open={deleteOpen} 
                            title="Deletar Evento" 
                            onOk={() => handleDelete(selectedEvent.ID)} 
                            evento={selectedEvent} 
                            onCancel={() => {setDeleteOpen(false)}} 
                            confirmLoading={deleteLoading}
                        />
                    </> 
                )}
            </Container>
        </Template>
    )
}

const mock = [{ID: 1, nome_evento: "Evento 1", data_evento: new Date().toJSON(), ID_organizacao: 1, localizacao_evento: "Localizacao 1", descricao_evento: "Descricao Evento 1"}]