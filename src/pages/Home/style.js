import styled from "styled-components";
import banner from "../../assets/Banner.png"

export const ChamadaContainer = styled.div`
  background-image: url(${banner}); 
  background-size: cover;
  height: 90vh;
  width: 100%;
`

export const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`