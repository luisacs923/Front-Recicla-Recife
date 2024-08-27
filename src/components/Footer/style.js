import styled from "styled-components";
import styles from "../../styles.js";

export const Descricao = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  
  flex: 1;
`;

export const AutoriaContainer = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  padding: 5px;
`;

export const Container = styled.footer`
  background-color: ${styles.primaryColor}; 
  color: white;
  height: 10vh;
  display: flex;
  flex-direction: column;

  width: 100%;

  font-size: 10px;
  font-weight: normal;
  font-style: normal;
`;