import styled from "styled-components";
import styles from "../../../../styles";

export const Container = styled.div`
  width: 100%;
  font-size: 12px;
  letter-spacing: -1px;
`

export const EventTitle = styled.div`
  padding: 5px;
  font-weight: bold;
  background-color: ${styles.gray};
`

export const EventInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid ${styles.gray}; */
`

export const EventInfo = styled.div`
  border: 1px solid ${styles.gray};
  flex: 1;
  padding: 5px;
`