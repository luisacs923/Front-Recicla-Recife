import React from "react";
import { Form, Modal, Select } from "antd";
import { StyledFormItem, StyledInput } from "./style";
import Button from "../../../../components/Button";

export default function EditModal({organizacao, onSubmit, loading, ...props}) {
    const [form] = Form.useForm();

    return (
      <Modal {...props}>
        <Form 
          layout="vertical" 
          form={form} 
          initialValues={{
            nome_organizacao: organizacao.nome_organizacao,
            responsavel: organizacao.responsavel,
            cnpj: organizacao.cnpj,
            localizacao_organizacao: organizacao.localizacao_organizacao
          }} 
          onFinish={onSubmit}
        >
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
            <Button htmlType="submit" loading={loading}>
              Atualizar
            </Button>
          </div>
        </Form>
      </Modal>
    )

}