import React, { useEffect, useState } from "react";
import { Container, DetailContainer, DetailsContainer, TitleContainer } from "./style";
import StrategyDetail from "../StrategyDetail";
import axios from "axios";
export default function EventsDisplay({evento}) {
  const dataFormatted = new Date(evento.data_evento).toLocaleDateString();
  const [estrategias, setEstrategias] = useState([])

  useEffect(() =>{
    async function listarEstrategias() {
      const result = await axios.get(`http://localhost:3000/estrategias/busca/estrategia-from-evento/${evento.ID}`)
      setEstrategias(result.data.data);
    }
    listarEstrategias();
  } , [evento])

  return (
    <Container>
      <TitleContainer>
        {evento.nome_evento}
      </TitleContainer>
      <DetailsContainer>
        <DetailContainer style={{flex: 1}}>
          Localização: {evento.localizacao_evento}
        </DetailContainer>
        <DetailContainer style={{flex:1}}>
          Data: {dataFormatted}
        </DetailContainer>
      </DetailsContainer>
      <DetailsContainer>
        <DetailContainer style={{flex: 1}}>
          Descrição: {evento.descricao_evento}
        </DetailContainer>
      </DetailsContainer>
      {estrategias.map(st => (<StrategyDetail key={st.ID} estrategia={st} />))}
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