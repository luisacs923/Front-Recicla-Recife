import React, { useState, useEffect, createContext } from "react";
import Template from "../../components/Template";
import { Container, SubContainer, CardText } from "./style";
import Button from "../../components/Button";
import { Divider, List, Modal } from "antd";
import Card from "../../components/Card";
import Text from "../../components/Text";
import OrganizationDisplay from "./components/OrganizationDisplay";
import axios from "axios"

const ModalContext = createContext(null);
const config = {
    title: 'Deletar Organização',
    content: (
        <>
            <ModalContext.Consumer>
                {(organizacao) => (
                    <>Excluir a Organizacao '{organizacao.nome_organizacao}'?</>
                ) }
            </ModalContext.Consumer>        
        </>
    ),
}

export default function Organizacoes(){

    const [selectedOrganization, setSelectedOrganization] = useState(null);
    const [organizacoes, setOrganizacoes] = useState([])
    const [modal, contextHolder] = Modal.useModal();

    useEffect(()=> {
        async function listaOrganizacoes() {
            const result = await axios.get("http://localhost:3000/organizacoes/busca")
            setOrganizacoes(result.data.data);
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
                                <List.Item key={item.ID} onClick={() => setSelectedOrganization(item)}>
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
                    <ModalContext.Provider value={selectedOrganization}>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes da Organização {selectedOrganization.nome_organizacao}</Text.H2>
                            <OrganizationDisplay organizacao={selectedOrganization} />
                        </SubContainer>
                        <SubContainer>
                            <div style={{display: 'flex', alignContent: 'center', justifyContent:'space-around'}}>
                                <Button>
                                    Editar Organização
                                </Button>
                                <Button onClick={async () => {
                                    const confirmed = await modal.confirm(config);
                                    console.log("Confirmed: ", confirmed);
                                }}>
                                    Deletar Organização
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