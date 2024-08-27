import React from "react";
import { Container, StrategyInfo, StrategyInfoContainer, StrategyTitle } from "./style";

export default function StrategyDetail({estrategia}) {
  return (
    <Container>
      <StrategyTitle>Estratégia: {estrategia.nome}</StrategyTitle>
      <StrategyInfoContainer>
        <StrategyInfo>
          Efetividade: {estrategia.efetividade}
        </StrategyInfo>
      </StrategyInfoContainer>
      <StrategyInfoContainer>
        <StrategyInfo>
          Descrição: {estrategia.descricao}
        </StrategyInfo>
      </StrategyInfoContainer>
    </Container>
  )
}