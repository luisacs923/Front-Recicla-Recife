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