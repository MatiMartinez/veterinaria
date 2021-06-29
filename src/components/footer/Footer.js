import React from "react"
import styled from "styled-components"

import { FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <ColumnTitle>Contacto</ColumnTitle>
        <ColumnText>Veterinaria@gmail.com</ColumnText>
        <ColumnText>263 4865933</ColumnText>
        <ColumnText>263 4422222</ColumnText>
        <SocialsWrapper>
          <FaFacebook size="20px" color="#7b8898" />
          <FaInstagram size="20px" color="#7b8898" />
        </SocialsWrapper>
      </Column>
      <Column>
        <ColumnTitle>Ubicación</ColumnTitle>
        <ColumnText>Mendoza San Martín</ColumnText>
        <ColumnText>25 de Mayo 850</ColumnText>
      </Column>
      <Column>
        <ColumnTitle>Horarios</ColumnTitle>
        <ColumnText>Lunes a Viernes - 8am a 6pm</ColumnText>
        <ColumnText>Sábados - 8am a 2pm</ColumnText>
      </Column>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #100e15;
  color: #7b8898;
  padding: 4rem 8rem;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 4rem 1rem;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ColumnTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 1rem;
`

const ColumnText = styled.p`
  font-size: 1rem;
  font-weight: 300;
`

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-top: 2rem;
`
