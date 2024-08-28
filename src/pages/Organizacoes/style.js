import styled from "styled-components";
import styles from "../../styles";

export const Container = styled.div`
  padding: 110px 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CardText = styled.p`
  font-size: 12px;
  color: ${styles.primaryTextColor};
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -1px;
`;