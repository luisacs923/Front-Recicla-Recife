import React, { useState, useEffect, createContext } from "react";
import Template from "../../components/Template";
import { Container, SubContainer, CardText } from "./style";
import Button from "../../components/Button";
import { Divider, List } from "antd";
import Card from "../../components/Card";
import Text from "../../components/Text";
import OrganizationDisplay from "./components/OrganizationDisplay";
import axios from "axios"

export default function Organizacoes(){

    const [selectedOrganization, setSelectedOrganization] = useState(null);
    const [organizacoes, setOrganizacoes] = useState([])
    const [loading, setLoading] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [editLoading, setEditLoading] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    async function handleSubmit(data) {
        setEditLoading(true);
        try {
            await axios.post(`http://localhost:3000/organizacoes/atualizar/${selectedOrganization.ID}`, data);
            setEditOpen(false);
        } catch (error){ 
            console.log("Erro na requisição ao backend");
        } finally {
            setEditLoading(false);   
        }
    }

    async function handleDelete(ID_organizacao) {
        setDeleteLoading(true);
        try {
            await axios.delete(`http://localhost:3000/organizacoes/deletar/${ID_organizacao}`);
            setDeleteOpen(false);
        } catch (error) {
            console.log("Erro ao se comunicar com o backend");
        } finally {
            setDeleteLoading(false);
        }
    }

    useEffect(()=> {
        async function listaOrganizacoes() {
            setLoading(true);
            try {
                const result = await axios.get("http://localhost:3000/organizacoes/busca")
                setOrganizacoes(result.data.data);
            } catch (error) {
                console.log("Erro ao se comunicar com o backend");
            } finally {
                setLoading(false);
                setSelectedOrganization(null);
            }
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
                            loading={loading}
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
                {(selectedOrganization && !loading) && (
                    <>
                        <SubContainer>
                            <Text.H2 style={{textAlign: 'center'}}>Detalhes da Organização {selectedOrganization.nome_organizacao}</Text.H2>
                            <OrganizationDisplay organizacao={selectedOrganization} />
                        </SubContainer>
                        <SubContainer>
                            <div style={{display: 'flex', alignContent: 'center', justifyContent:'space-around'}}>
                                <Button onClick={() => setEditOpen(true)}>
                                    Editar Organização
                                </Button>
                                <Button onClick={() => setDeleteOpen(true)}>
                                    Deletar Organização
                                </Button>
                            </div>
                        </SubContainer>
                        <EditModal 
                            open={editOpen} 
                            title="Editar Organização" 
                            onSubmit={handleSubmit} 
                            footer={[]} 
                            organizacao={selectedOrganization} 
                            loading={editLoading} 
                            onCancel={() => setEditOpen(false)} 
                        />
                        <DeleteModal 
                            open={deleteOpen} 
                            title="Deletar Organização" 
                            onOk={() => handleDelete(selectedOrganization.ID)} 
                            organizacao={selectedOrganization} 
                            onCancel={() => {setDeleteOpen(false)}} 
                            confirmLoading={deleteLoading}
                        />
                    </>
                )}
            </Container>
        </Template>
    )
}