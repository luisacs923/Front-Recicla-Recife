import React from "react";
import { Container, EventInfo, EventInfoContainer, EventTitle } from "./style";

export default function EventDetail({evento}) {

  const tipoEstrategias = evento.estrategias.map(es => es.tipo_estrategia);
  const dataFormatted = new Date(evento.data_evento).toLocaleDateString();

  return (
    <Container>
      <EventTitle>Evento: {evento.nome_evento}</EventTitle>
      <EventInfoContainer>
        <EventInfo>
          Data: {dataFormatted}
        </EventInfo>
        <EventInfo>
          Localização: {evento.localizacao_evento}
        </EventInfo>
      </EventInfoContainer>
      <EventInfoContainer>
        <EventInfo>
          Descrição: {evento.descricao_evento}
        </EventInfo>
      </EventInfoContainer>
      <EventInfoContainer>
        <EventInfo>
          Estratégias Associadas: {tipoEstrategias.join(", ")}
        </EventInfo>
      </EventInfoContainer>
    </Container>
  )
}