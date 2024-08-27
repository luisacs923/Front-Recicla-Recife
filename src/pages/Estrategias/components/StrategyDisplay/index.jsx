import React from "react";
import { Container, DetailContainer, DetailsContainer, TitleContainer } from "./style";
import EventDetail from "../EventDetail";

export default function StrategyDisplay({estrategia}) {
  return (
    <Container>
      <TitleContainer>
        {estrategia.tipo}
      </TitleContainer>
      <DetailsContainer>
        <DetailContainer style={{flex: 1}}>
          Efetividade: {estrategia.efetividade}
        </DetailContainer>
      </DetailsContainer>
      <DetailsContainer>
        <DetailContainer style={{flex: 1}}>
          Descrição: {estrategia.descricao_estrategia}
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