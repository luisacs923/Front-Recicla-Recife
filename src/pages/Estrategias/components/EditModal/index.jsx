import React from "react";
import { Form, Modal, Select } from "antd";
import { StyledFormItem, StyledInput } from "./style";
import Button from "../../../../components/Button";

export default function EditModal({estrategia, onSubmit, loading, ...props}) {
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

    return (
      <Modal {...props}>
        <Form 
          layout="vertical" 
          form={form} 
          initialValues={{
            tipo_estrategia: estrategia.tipo_estrategia,
            efetividade: estrategia.efetividade,
            descricao_estrategia: estrategia.descricao_estrategia,
          }} 
          onFinish={onSubmit}
        >
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
              <Button htmlType="submit" loading={loading}>
                  Cadastrar
              </Button>
          </div>
        </Form>
      </Modal>
    )

}