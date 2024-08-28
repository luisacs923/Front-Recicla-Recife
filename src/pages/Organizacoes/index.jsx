import React, { useState, useEffect } from "react";
import Template from "../../components/Template";
import { Container, Title, SubContainer, SubTitle, CardText } from "./style";
import Button from "../../components/Button";
import { Divider, Input, List } from "antd";
import Card from "../../components/Card";
import styles from "../../styles";
import Text from "../../components/Text";
import OrganizationDisplay from "./components/OrganizationDisplay";
import axios from "axios"

export default function Organizacoes(){

    const [selectedOrganization, setSelectedOrganization] = useState(null);
    const [organizacoes, setOrganizacoes] = useState([])

    useEffect(()=> {
        async function listaOrganizacoes() {
            const result = await axios.get("http://localhost:3000/organizacoes/busca")
            setOrganizacoes(result.data.data);
            console.log(result.data.data);
        }
        listaOrganizacoes();
    }, [])

    return (
        <Template>
            <Container>
                <Text.H1>Organizações</Text.H1>
                <SubContainer>
                    <Text.Paragraph>Gostaria de cadastrar uma Organização? <a href="/organizacoes/cadastro" style={{textDecoration: 'underline'}}>Clique aqui!</a></Text.Paragraph>
                    {/* <div>
                        <Text>Buscar uma Organização:</Text>
                        <Input style={{letterSpacing: -1, fontSize: 16}} placeholder="Digite o nome da Organização"/>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Button>Buscar</Button>
                    </div> */}
                </SubContainer>
                <SubContainer>
                    <div>
                        <Text.H2>Organizações Cadastradas:</Text.H2>
                        <List 
                            grid={{gutter:32, column: 2}} 
                            dataSource={organizacoes}
                            renderItem={(item) => (
                                <List.Item key={item.ID} onClick={() => setSelectedOrganization(item.ID)}>
                                    <Card title={item.nome_organizacao} size="small">
                                        <CardText>Responsável: {item.responsavel}</CardText>
                                        <Divider style={{margin: '5px 0px'}} />
                                        <CardText>CNPJ: {item.cnpj}</CardText>
                                        <Divider style={{margin: '5px 0px'}} />
                                        <CardText>Localização: {item.localizacao_organizacao}</CardText>
                                    </Card>
                                </List.Item>
                            )} />
                    </div>
                </SubContainer>
                {selectedOrganization && (
                    <>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes da Organização {organizacoes.find(el => el.ID === selectedOrganization).nome_organizacao}</Text.H2>
                            <OrganizationDisplay organizacao={organizacoes.find(m => m.ID === selectedOrganization)} />
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