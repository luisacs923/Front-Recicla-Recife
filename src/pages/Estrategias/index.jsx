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

    useEffect(()=> {
        async function listaEstrategias() {
            const result = await axios.get("http://localhost:3000/estrategias/busca")
            setEstrategias(result.data.data);
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
                                <List.Item key={item.ID} onClick={() => setSelectedStrategy(item.ID)}>
                                    <Card title={item.tipo_estrategia} size="small">
                                        <CardText>Efetividade: {item.efetividade}</CardText>
                                        <Divider style={{margin: '5px 0px'}} />
                                        <CardText>Descrição: {item.descricao_estrategia}</CardText>
                                    </Card>
                                </List.Item>
                            )} />
                    </div>
                </SubContainer>
                {selectedStrategy && (
                    <>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes da Estratégia {estrategias.find(el => el.ID === selectedStrategy).tipo_estrategia}</Text.H2>
                            <StrategyDisplay estrategia={estrategias.find(m => m.ID === selectedStrategy)} />
                        </SubContainer>
                        <SubContainer>
                            <div style={{display: 'flex', alignContent: 'center', justifyContent:'space-around'}}>
                                <Button>
                                    Editar Estratégia
                                </Button>
                                <Button>
                                    Deletar Estratégia
                                </Button>
                            </div>
                        </SubContainer>
                    </>
                )}
            </Container>
        </Template>
    )
}