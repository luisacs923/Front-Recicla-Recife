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

export const Title = styled.h1`
  color: ${styles.primaryTextColor};
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -3px;
`

export const SubTitle = styled.h2`
  color: ${styles.primaryTextColor};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -1px;
` 

export const Text = styled.p`
  color: ${styles.primaryTextColor};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -1px;

  > a{
    text-decoration: underline;
  }
`

export const CardText = styled.p`
  font-size: 12px;
  color: ${styles.primaryTextColor};
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -1px;
`;