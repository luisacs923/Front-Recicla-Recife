import React from "react";

import { StyledCard } from "./style";

export default function Card({state, ...props}) {
  return(
      <StyledCard {...props}>
        {props.children}
      </StyledCard>
  )
}