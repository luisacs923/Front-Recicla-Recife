import React from "react";
import { Container, Img } from "./style";
import logomarca from "../../assets/Logo Estendida.svg";

export default function Template(props) {
  return (
    <Container>
      <Img src={logomarca} />
      {props.children}
    </Container>
  )
}