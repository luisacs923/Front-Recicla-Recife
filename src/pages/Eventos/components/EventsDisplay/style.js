import styled from "styled-components";
import styles from "../../../../styles";

export const Container = styled.div`
  width: 100%;
  /* border: 1px solid ${styles.gray}; */
  /* border-radius: 10px; */
`

export const TitleContainer = styled.div`
  background-color: ${styles.primaryColor};
  color: #FFF;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px;
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DetailContainer = styled.div`
  padding: 5px;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -1px;
  border: 1px solid ${styles.gray};
`
