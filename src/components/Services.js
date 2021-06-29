import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      happy_dog: file(relativePath: { eq: "happy-dog.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
  `)

  const happy_dog = getImage(data.happy_dog)

  return (
    <ServiceContainer id="services">
      <FakeBgImage image={happy_dog} alt="happy-dog" />
      <ServiceContainerTwo>
        <TitleWrapper>
          <Title>Lorem ipsum dolor sit amet</Title>
          <TitleHr />
        </TitleWrapper>
        <ServicesWrapper>
          <ServiceText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing.
          </ServiceText>
          <ServiceText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit ut aliquam purus sit amet luctus.
          </ServiceText>
          <ServiceText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ServiceText>
        </ServicesWrapper>
      </ServiceContainerTwo>
    </ServiceContainer>
  )
}

export default Services

const ServiceContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FakeBgImage = styled(GatsbyImage)`
  width: 75%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 50% 100% 50% 75%;
  position: relative;
  top: 4rem;

  @media (max-width: 576px) {
    top: 2rem;
    height: 200px;
  }
`

const ServiceContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0 8rem;
  position: relative;
  top: -4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
    top: -4rem;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.25rem;
  padding: 2rem;
  background-color: #fbfaf9;
  width: 25%;

  @media (max-width: 576px) {
    width: 70%;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`

const TitleHr = styled.hr`
  width: 30%;
  border: 2px solid #005aab;
  margin-right: 0px;
  margin: 0;
`

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`

const ServiceText = styled.p`
  font-size: 1rem;
  font-weight: 300;
`
