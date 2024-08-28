import React from "react";
import { StyledButtonAntd } from "./style";

export default function Button(props) {
  return (
    <StyledButtonAntd type='primary' {...props}>
      {props.children}
    </StyledButtonAntd>
  )
}