import React, { useEffect, useState } from "react";
import { Container, DetailContainer, DetailsContainer, TitleContainer } from "./style";
import EventDetail from "../EventDetail";
import axios from "axios";

export default function StrategyDisplay({estrategia}) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function listarEventos() {
      const result = await axios.get(`http://localhost:3000/eventos/busca/info-from-estrategia/${estrategia.ID}`)
      setEventos(result.data.data);
    }
    listarEventos();
  }, [estrategia])

  return (
    <Container>
      <TitleContainer>
        {estrategia.tipo_estrategia}
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
      {eventos.map(ev => (<EventDetail key={ev.ID} evento={ev} />))}
    </Container>
  );
}