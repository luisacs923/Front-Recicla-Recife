import React from "react";
import { Container, DetailContainer, DetailsContainer, TitleContainer } from "./style";
import StrategyDetail from "../StrategyDetail";

export default function EventsDisplay({evento}) {
  return (
    <Container>
      <TitleContainer>
        {evento.nome}
      </TitleContainer>
      <DetailsContainer>
        <DetailContainer style={{flex: 1}}>
          Localização: {evento.localizacao}
        </DetailContainer>
        <DetailContainer style={{flex:1}}>
          Data: {evento.data}
        </DetailContainer>
      </DetailsContainer>
      <DetailsContainer>
        <DetailContainer style={{flex: 1}}>
          Descrição: {evento.descricao}
        </DetailContainer>
      </DetailsContainer>
      {mocked.map(st => (<StrategyDetail key={st.id} estrategia={st} />))}
    </Container>
  );
}

const mocked = [
  {
    id: 1,
    nome: "Reciclagem",
    efetividade: "Ótimo",
    descricao: "Coleta e separação de materiais recicláveis como papel, plástico e vidro",
  },
  {
    id: 2,
    nome: "Redução de Embalagens ",
    efetividade: "Bom",
    descricao: "Implementação de práticas para reduzir o uso de embalagens descartáveis.",
  },
  {
    id: 3,
    nome: " Recuperação de Energia ",
    efetividade: "Regular",
    descricao: "Aproveitamento dos resíduos para gerar energia com processos como incineração controlada.",
  },
]