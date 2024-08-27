import styled from "styled-components";
import banner from "../../assets/Banner.png"
import styles from "../../styles";

export const ChamadaContainer = styled.div`
  background-image: url(${banner}); 
  background-size: cover;
  height: 90vh;
  width: 100%;
`

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -1px;
  color: ${styles.primaryTextColor};
`

export const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`