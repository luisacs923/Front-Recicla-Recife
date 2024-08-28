import React from "react";
import { StyledButtonAntd } from "./style";

export default function Button(props) {
  return (
    <StyledButtonAntd {...props}>
      {props.children}
    </StyledButtonAntd>
  )
}