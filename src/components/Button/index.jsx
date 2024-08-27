import React from "react";
import { StyledButton, StyledButtonAntd } from "./style";

export default function Button(props) {
  return (
    <StyledButtonAntd>
      {props.children}
    </StyledButtonAntd>
  )
}