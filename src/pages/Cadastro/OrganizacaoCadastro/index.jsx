import React from "react";
import Template from "../../../components/Template";
import { Container, SubContainer, StyledFormItem, StyledInput } from "./style.js";
import Button from "../../../components/Button";
import { Form } from "antd";
import Text from "../../../components/Text";
import axios from "axios"


export default function OrganizacaoCadastro(){
    const [form] = Form.useForm();

    const onFinish = async (values) => {
      await axios.post("http://localhost:3000/organizacoes/cadastro", values);
      form.resetFields();
    };

    return (
        <Template>
            <Container>
                <Text.H1>Cadastro Organização</Text.H1>
                <SubContainer>
                    <Form layout="vertical" form={form} initialValues={{layout: "vertical"}} onFinish={onFinish}>
                    <StyledFormItem
                            name='nome_organizacao'
                            label='Nome da Organização'
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
                            name='responsavel'
                            label='Nome do Responsável'
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
                            name='cnpj'
                            label='CNPJ'
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
                            name='localizacao_organizacao'
                            label='Localização da Organizacao'
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
                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                            <Button htmlType="submit">
                                Cadastrar
                            </Button>
                        </div>
                    </Form>
                </SubContainer>
                <SubContainer>

                <Text.Paragraph>Gostaria de cadastrar Eventos em sua Organização? <a href="/eventos/cadastro" style={{textDecoration: 'underline'}}>Clique aqui!</a></Text.Paragraph>
                </SubContainer>
            </Container>
        </Template>
    )
}