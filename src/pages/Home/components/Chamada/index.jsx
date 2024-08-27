import React from "react";
import { Container, Descricao, Titulo } from "./style";
import logomarca from "../../../../assets/Logo Estendida.svg";
import Text from "../../../../components/Text";

export default function Chamada() {
  return (
    <Container>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={logomarca} />
        <Text.BannerTitle>O maior portal de Reciclagem do Recife!</Text.BannerTitle>
      </div>
      <Text.BannerText>
        A Recicla Recife promove a sustentabilidade urbana por meio de programas de reciclagem em comunidades locais. 
        Trabalhamos com organizações parceiras para gerenciar eventos educativos e implementar estratégias eficazes de gestão de resíduos. 
        Nosso objetivo é reduzir o desperdício e fomentar práticas ecológicas em toda a cidade.
      </Text.BannerText>
    </Container>
  )
}