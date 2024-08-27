import styled from "styled-components";

export const Container = styled.div`
  top: 225px;
  left: 120px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  width: 600px;
  height: 330px;
  border-radius: 26px;
  padding: 25px;
`

export const Titulo = styled.h1`
  word-wrap: wrap;
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: -1px;
  line-height: 48px;
`

export const Descricao = styled.p`
  word-wrap: wrap;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: justify;
  letter-spacing: -1px;
`