import React, { useEffect, useState } from "react";
import { Form, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { StyledFormItem, StyledInput } from "./style";
import Button from "../../../../components/Button";

export default function EditModal({evento, onSubmit, loading, ...props}) {
    const [form] = useForm();

    const [organizacoes, setOrganizacoes] = useState([]);
    const [orgLoading, setOrgLoading] = useState(true);

    useEffect(() => {
      async function loadOrganizacoes() {
        try {
          const result = await axios.get("http://localhost:3000/organizacoes/busca");
          setOrganizacoes(result.data.data);
        } catch (error) {
          console.log("Erro ao se comunicar com o backend");
        } finally {
          setOrgLoading(false);
        }
      }
      loadOrganizacoes();
    })

    const dataEvento = new Date(evento.data_evento)
    const data_evento = [dataEvento.getFullYear(), ("0" + (dataEvento.getMonth() + 1)).slice(-2), ("0" + dataEvento.getDate()).slice(-2)].join("-");

    return (
      <Modal {...props}>
        <Form layout="vertical" form={form} initialValues={{
          ID_organizacao: organizacoes.length === 0 ? undefined : evento.ID_organizacao,
          nome_evento: evento.nome_evento,
          localizacao_evento: evento.localizacao_evento,
          data_evento,
          descricao_evento: evento.descricao_evento,
        }} onFinish={onSubmit}>
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
                <Select loading={orgLoading} disabled={organizacoes.length === 0} options={organizacoes.map(m => ({value: m.ID, label: m.nome_organizacao}))} />
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
              <Button htmlType="submit" loading={loading}>
                  Atualizar
              </Button>
            </div>
        </Form>
      </Modal>
    )

}