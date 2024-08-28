import React from "react";
import { Container, StrategyInfo, StrategyInfoContainer, StrategyTitle } from "./style";

export default function StrategyDetail({estrategia}) {
  return (
    <Container>
      <StrategyTitle>Estratégia: {estrategia.tipo_estrategia}</StrategyTitle>
      <StrategyInfoContainer>
        <StrategyInfo>
          Efetividade: {estrategia.efetividade}
        </StrategyInfo>
      </StrategyInfoContainer>
      <StrategyInfoContainer>
        <StrategyInfo>
          Descrição: {estrategia.descricao_estrategia}
        </StrategyInfo>
      </StrategyInfoContainer>
    </Container>
  )
}