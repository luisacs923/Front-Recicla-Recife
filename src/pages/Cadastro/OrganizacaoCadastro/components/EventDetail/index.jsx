import React from "react";
import { Container, EventInfo, EventInfoContainer, EventTitle } from "./style";

export default function EventDetail({evento}) {

  const estrategias = evento.estrategias.map(es => es.nome);

  return (
    <Container>
      <EventTitle>Evento: {evento.nome}</EventTitle>
      <EventInfoContainer>
        <EventInfo>
          Data: {evento.data}
        </EventInfo>
        <EventInfo>
          Localização: {evento.localizacao}
        </EventInfo>
      </EventInfoContainer>
      <EventInfoContainer>
        <EventInfo>
          Descrição: {evento.descricao}
        </EventInfo>
      </EventInfoContainer>
      <EventInfoContainer>
        <EventInfo>
          Estratégias Associadas: {estrategias.join(", ")}
        </EventInfo>
      </EventInfoContainer>
    </Container>
  )
}