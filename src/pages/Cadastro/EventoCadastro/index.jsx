import React, { useEffect, useState } from "react";
import Template from "../../../components/Template/index.jsx";
import { Container, SubContainer, StyledFormItem, StyledInput } from "./style.js";
import Button from "../../../components/Button/index.jsx";
import { Form, Select } from "antd";
import Text from "../../../components/Text/index.jsx";
import axios from "axios";

export default function EventoCadastro(){
    const [form] = Form.useForm();
    const [organizacoes, setOrganizacoes] = useState([]);

    useEffect(() => {
      async function listarOrganizacoes() {
        const result = await axios.get("http://localhost:3000/organizacoes/busca");
        setOrganizacoes(result.data.data);
      }
      listarOrganizacoes();
    },[])

    const onFinish = async (values) => {
      await axios.post("http://localhost:3000/eventos/cadastro", values)
      form.resetFields();
    };

    return (
        <Template>
            <Container>
                <Text.H1>Cadastro Evento</Text.H1>
                <SubContainer>
                    <Form layout="vertical" form={form} initialValues={{layout: "vertical"}} onFinish={onFinish}>
                    <StyledFormItem
                            name='ID_organizacao'
                            label='Organização'
                            rules={[
                                {
                                  required: true,
                                  message: "Campo Obrigatório",
                                },
                              ]}
                            style={{letterSpacing: -1}}
                        >   
                            <Select options={organizacoes.map(m => ({value: m.ID, label: m.nome_organizacao}))} />
                        </StyledFormItem>
                      <StyledFormItem
                            name='nome_evento'
                            label='Nome do Evento'
                            rules={[
                                {
                                  required: true,
                                  message: "Campo Obrigatório",
                                },
                              ]}
                            style={{letterSpacing: -1}}
                        >   
                            <StyledInput />
                        </StyledFormItem>
                        <StyledFormItem
                            name='localizacao_evento'
                            label='Localização do Evento'
                            rules={[
                                {
                                  required: true,
                                  message: "Campo Obrigatório",
                                },
                              ]}
                            style={{letterSpacing: -1}}
                        >   
                            <StyledInput />
                        </StyledFormItem>
                        <StyledFormItem
                            name='data_evento'
                            label='Data do Evento'
                            rules={[
                                {
                                  required: true,
                                  message: "Campo Obrigatório",
                                },
                              ]}
                            style={{letterSpacing: -1}}
                        >   
                            <StyledInput type='date' />
                        </StyledFormItem>
                        <StyledFormItem
                            name='descricao_evento'
                            label='Descrição do Evento'
                            rules={[
                                {
                                  required: true,
                                  message: "Campo Obrigatório",
                                  
                                },
                              ]}
                            style={{letterSpacing: -1}}
                        >   
                            <StyledInput.TextArea />
                        </StyledFormItem>
                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                            <Button htmlType="submit">
                                Cadastrar
                            </Button>
                        </div>
                    </Form>
                </SubContainer>
                <SubContainer>

                <Text.Paragraph>Gostaria de associar uma ou mais Estratégias ao seu Evento? <a href="/eventos" style={{textDecoration: 'underline'}}>Clique aqui!</a></Text.Paragraph>
                </SubContainer>
            </Container>
        </Template>
    )
}