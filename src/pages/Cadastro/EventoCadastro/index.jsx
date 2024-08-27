import React from "react";
import Template from "../../../components/Template/index.jsx";
import { Container, SubContainer, } from "./style.js";
import Button from "../../../components/Button/index.jsx";
import { Form, Select } from "antd";
import Text from "../../../components/Text/index.jsx";
import { StyledFormItem, StyledInput } from "./style.js";

export default function EventoCadastro(){
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
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
                            <Select options={mocked.map(m => ({value: m.id, label: m.nome}))} />
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