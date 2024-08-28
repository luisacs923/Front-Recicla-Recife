import React from "react";
import Template from "../../../components/Template/index.jsx";
import { Container, SubContainer, } from "./style.js";
import Button from "../../../components/Button/index.jsx";
import { Form, Select } from "antd";
import Text from "../../../components/Text/index.jsx";
import { StyledFormItem, StyledInput } from "./style.js";
import axios from "axios";

export default function EstrategiaCadastro(){
    const [form] = Form.useForm();

    const efetividades = [
      {
        value: "Excelente",
        label: "Excelente",
      },
      {
        value: "Boa",
        label: "Boa",
      },
      {
        value: "Regular",
        label: "Regular",
      },
    ];

    const onFinish = async (values) => {
        await axios.post("http://localhost:3000/estrategias/cadastro", values);
        form.resetFields();
      };

    return (
        <Template>
            <Container>
                <Text.H1>Cadastro Estratégia</Text.H1>
                <SubContainer>
                    <Form layout="vertical" form={form} initialValues={{layout: "vertical"}} onFinish={onFinish}>
                      <StyledFormItem
                            name='tipo_estrategia'
                            label='Nome da Estratégia'
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
                            name='efetividade'
                            label='Efetividade'
                            rules={[
                                {
                                  required: true,
                                  message: "Campo Obrigatório",
                                },
                              ]}
                            style={{letterSpacing: -1}}
                        >   
                            <Select options={efetividades} />
                        </StyledFormItem>
                        <StyledFormItem
                            name='descricao_estrategia'
                            label='Descrição da Estratégia'
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