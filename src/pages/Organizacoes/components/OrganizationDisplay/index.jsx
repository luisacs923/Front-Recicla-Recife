import React, { useEffect, useState } from "react";
import { Container, DetailContainer, DetailsContainer, TitleContainer } from "./style";
import EventDetail from "../EventDetail";
import axios from "axios";

export default function OrganizationDisplay({organizacao}) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function listarEventos() {
      try {
        const result = await axios.get(`http://localhost:3000/eventos/busca/organizacao/${organizacao.ID}`)
        setEventos(result.data.data);
      } catch (error) {
        console.log("Erro ao se comunicar com o backend");
      }

    }
    listarEventos();
  }, [organizacao])

  return (
    <Container>
      <TitleContainer>
        {organizacao.nome_organizacao}
      </TitleContainer>
      <DetailsContainer>
        <DetailContainer style={{flex: 1}}>
          Responsável: {organizacao.responsavel}
        </DetailContainer>
        <DetailContainer style={{flex:1}}>
          CNPJ: {organizacao.cnpj}
        </DetailContainer>
        <DetailContainer style={{flex: 1}}>
          Localização: {organizacao.localizacao_organizacao}
        </DetailContainer>
      </DetailsContainer>
      {eventos.map(ev => (<EventDetail key={ev.ID} evento={ev} />))}
    </Container>
  );
}