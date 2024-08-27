import React from "react";
import { Container, DetailContainer, DetailsContainer, TitleContainer } from "./style";
import EventDetail from "../EventDetail";

export default function EventsDisplay({organizacao}) {
  return (
    <Container>
      <TitleContainer>
        {organizacao.nome}
      </TitleContainer>
      <DetailsContainer>
        <DetailContainer style={{flex: 1}}>
          Responsável: {organizacao.responsavel}
        </DetailContainer>
        <DetailContainer style={{flex:1}}>
          CNPJ: {organizacao.cnpj}
        </DetailContainer>
        <DetailContainer style={{flex: 1}}>
          Localização: {organizacao.localizacao}
        </DetailContainer>
      </DetailsContainer>
      {mocked.map(ev => (<EventDetail key={ev.id} evento={ev} />))}
    </Container>
  );
}

const mocked = [
  {
    id: 1,
    nome: "Dia do Meio Ambiente",
    data: "15/09/2024",
    localizacao: "Parque Ibirapuera, SP",
    descricao: "Evento dedicado à promoção de práticas sustentáveis.",
    estrategias: [{id: 1, nome: "Reciclagem"}, {id: 2, nome: "Redução de Embalagens"}, {id: 3, nome:"Recuperação de Energia"}]
  },
  {
    id: 2,
    nome: "Dia do Meio Ambiente 2",
    data: "15/09/2025",
    localizacao: "Parque Ibirapuera, SP",
    descricao: "Evento dedicado à promoção de práticas sustentáveis.",
    estrategias: [{id: 1, nome: "Reciclagem"}, {id: 2, nome: "Redução de Embalagens"}, {id: 3, nome:"Recuperação de Energia"}]
  },
]