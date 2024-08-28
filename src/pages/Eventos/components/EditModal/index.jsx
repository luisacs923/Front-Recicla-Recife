import React, { useEffect, useState } from "react";
import { Checkbox, Form, Modal, Select, Spin } from "antd";
import { StyledFormItem, StyledInput } from "./style";
import Button from "../../../../components/Button";
import axios from "axios";

export default function EditModal({evento, onSubmit, loading, ...props}) {
    const [form] = Form.useForm();

    const [organizacoes, setOrganizacoes] = useState([]);
    const [estrategias, setEstrategias] = useState([]);
    const [estrategiasDoEvento, setEstrategiasDoEvento] = useState([]);
    const [orgLoading, setOrgLoading] = useState(false);
    const [estrategiasLoading, setEstrategiasLoading] = useState(false);

    const opcoesEstrategias = estrategias.map(st => ({label: st.tipo_estrategia, value: st.ID}));
   
    useEffect(() => {
      async function loadOrganizacoes() {
        setOrgLoading(true);
        try {
          const result = await axios.get("http://localhost:3000/organizacoes/busca");
          setOrganizacoes(result.data.data);
        } catch (error) {
          console.log("Erro ao se comunicar com o backend", error);
          setOrganizacoes(mockOrg);
        } finally {
          setOrgLoading(false);
        }
      }
      async function loadEstrategias() {
        setEstrategiasLoading(true);
        try {
          const result = await axios.get("http://localhost:3000/estrategias/busca");
          setEstrategias(result.data.data);
        } catch (error) {
          console.log("Erro ao se comunicar com o backend", error);
          setEstrategias(mockEst);
        } finally {
          setEstrategiasLoading(false);
        }
      }
      async function listEstrategias() {
        try {
          const result = await axios.get(`http://localhost:3000/estrategias/busca/estrategia-from-evento/${evento.ID}`)
          setEstrategiasDoEvento(result.data.data);
        } catch(error) {
          console.log("Erro ao se comunicar com o backend", error);
          setEstrategiasDoEvento(mockEstEv);
        }
      }
      loadOrganizacoes();
      loadEstrategias();
      listEstrategias();
    }, [evento])

    const dataEvento = new Date(evento.data_evento)
    const data_evento = [dataEvento.getFullYear(), ("0" + (dataEvento.getMonth() + 1)).slice(-2), ("0" + dataEvento.getDate()).slice(-2)].join("-");

    return (
      <Modal {...props}>
        <Form 
          layout="vertical" 
          form={form} 
          initialValues={{
            ID_organizacao: organizacoes.length === 0 ? undefined : evento.ID_organizacao,
            nome_evento: evento.nome_evento,
            localizacao_evento: evento.localizacao_evento,
            data_evento,
            descricao_evento: evento.descricao_evento,
            estrategias: estrategiasDoEvento.map(st => st.ID),
          }} 
          onFinish={onSubmit}
        >
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
            <StyledFormItem 
              name='estrategias'
              label="Estratégias"
              style={{letterSpacing: -1}}  
            >
              {estrategiasLoading ? <Spin /> : (
                <Checkbox.Group options={opcoesEstrategias} />
              )}
              
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

const mockOrg = [{ID: 1, nome_organizacao: "Organizacao 1", cnpj: "CNPJ 1", responsavel: "Responsavel 1", localizacao_organizacao: "Localizacao Organizacao 1"}]
const mockEst = [
  {ID: 1, tipo_estrategia: "Estrategia 1", descricao_estrategia: "Descricao Estrategia 1", efetividade: "Efetividade 1"},
  {ID: 2, tipo_estrategia: "Estrategia 2", descricao_estrategia: "Descricao Estrategia 2", efetividade: "Efetividade 2"},
  {ID: 3, tipo_estrategia: "Estrategia 3", descricao_estrategia: "Descricao Estrategia 3", efetividade: "Efetividade 3"},
  {ID: 4, tipo_estrategia: "Estrategia 4", descricao_estrategia: "Descricao Estrategia 4", efetividade: "Efetividade 4"},
  {ID: 5, tipo_estrategia: "Estrategia 5", descricao_estrategia: "Descricao Estrategia 5", efetividade: "Efetividade 5"},
  {ID: 6, tipo_estrategia: "Estrategia 6", descricao_estrategia: "Descricao Estrategia 6", efetividade: "Efetividade 6"},
  {ID: 7, tipo_estrategia: "Estrategia 7", descricao_estrategia: "Descricao Estrategia 7", efetividade: "Efetividade 7"},
  {ID: 8, tipo_estrategia: "Estrategia 8", descricao_estrategia: "Descricao Estrategia 8", efetividade: "Efetividade 8"},
  {ID: 9, tipo_estrategia: "Estrategia 9", descricao_estrategia: "Descricao Estrategia 9", efetividade: "Efetividade 9"},
  {ID: 10, tipo_estrategia: "Estrategia 10", descricao_estrategia: "Descricao Estrategia 10", efetividade: "Efetividade 10"},
  {ID: 11, tipo_estrategia: "Estrategia 11", descricao_estrategia: "Descricao Estrategia 11", efetividade: "Efetividade 11"}
]
const mockEstEv = [
  {ID: 1, tipo_estrategia: "Estrategia 1", descricao_estrategia: "Descricao Estrategia 1", efetividade: "Efetividade 1"},
  {ID: 2, tipo_estrategia: "Estrategia 2", descricao_estrategia: "Descricao Estrategia 2", efetividade: "Efetividade 2"}
]