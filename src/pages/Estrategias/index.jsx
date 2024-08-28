import React, { useState, useEffect } from "react";
import Template from "../../components/Template";
import { Container, SubContainer, CardText } from "./style";
import Button from "../../components/Button";
import { Divider, List } from "antd";
import Card from "../../components/Card";
import Text from "../../components/Text";
import StrategyDisplay from "./components/StrategyDisplay";
import axios from "axios";

export default function Estrategias(){

    const [selectedStrategy, setSelectedStrategy] = useState(null);
    const [estrategias, setEstrategias] = useState([])
    const [loading, setLoading] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [editLoading, setEditLoading] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    async function handleSubmit(data) {
        setEditLoading(true);
        try {
            await axios.post(`http://localhost:3000/estrategias/atualizar/${selectedStrategy.ID}`, data);
            setEditOpen(false);
        } catch (error){ 
            console.log("Erro na requisição ao backend");
        } finally {
            setEditLoading(false);   
        }
    }

    async function handleDelete(ID_estrategia) {
        setDeleteLoading(true);
        try {
            await axios.delete(`http://localhost:3000/estrategias/deletar/${ID_estrategia}`);
            setDeleteOpen(false);
        } catch (error) {
            console.log("Erro ao se comunicar com o backend");
        } finally {
            setDeleteLoading(false);
        }
    }

    useEffect(()=> {
        async function listaEstrategias() {
            setLoading(true);
            try {
                const result = await axios.get("http://localhost:3000/estrategias/busca")
                setEstrategias(result.data.data);
            } catch (error) {
                console.log("Erro ao se comunicar com o backend");
            } finally {
                setLoading(false);
                setSelectedStrategy(null);
            }
        }
        listaEstrategias();
    }, [])

    return (
        <Template>
            <Container>
                <Text.H1>Estratégias</Text.H1>
                <SubContainer>
                    <Text.Paragraph>Gostaria de cadastrar uma Estratégia? <a href="/estrategias/cadastro" style={{textDecoration: 'underline'}}>Clique aqui!</a></Text.Paragraph>
                    {/* <div>
                        <Text>Buscar uma Estratégia:</Text>
                        <Input style={{letterSpacing: -1, fontSize: 16}} placeholder="Digite o nome da Estratégia"/>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Button>Buscar</Button>
                    </div> */}
                </SubContainer>
                <SubContainer>
                    <div>
                        <Text.H2>Estratégias Cadastradas:</Text.H2>
                        <List 
                            grid={{gutter:32, column: 2}} 
                            dataSource={estrategias}
                            renderItem={(item) => (
                                <List.Item key={item.ID} onClick={() => setSelectedStrategy(item)}>
                                    <Card title={item.tipo_estrategia} size="small">
                                        <CardText>Efetividade: {item.efetividade}</CardText>
                                        <Divider style={{margin: '5px 0px'}} />
                                        <CardText>Descrição: {item.descricao_estrategia}</CardText>
                                    </Card>
                                </List.Item>
                            )} />
                    </div>
                </SubContainer>
                {(selectedStrategy && !loading) && (
                    <>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes da Estratégia {selectedStrategy.tipo_estrategia}</Text.H2>
                            <StrategyDisplay estrategia={selectedStrategy} />
                        </SubContainer>
                        <SubContainer>
                            <div style={{display: 'flex', alignContent: 'center', justifyContent:'space-around'}}>
                                <Button onClick={() => setEditOpen(true)}>
                                    Editar Estratégia
                                </Button>
                                <Button onClick={() => setDeleteOpen(true)}>
                                    Deletar Estratégia
                                </Button>
                            </div>
                        </SubContainer>
                        <EditModal 
                            open={editOpen} 
                            title="Editar Estratégia" 
                            onSubmit={handleSubmit} 
                            footer={[]} 
                            estrategia={selectedStrategy} 
                            loading={editLoading} 
                            onCancel={() => setEditOpen(false)} 
                        />
                        <DeleteModal 
                            open={deleteOpen} 
                            title="Deletar Estratégia" 
                            onOk={() => handleDelete(selectedStrategy.ID)} 
                            estrategia={selectedStrategy} 
                            onCancel={() => {setDeleteOpen(false)}} 
                            confirmLoading={deleteLoading}
                        />
                    </>
                )}
            </Container>
        </Template>
    )
}