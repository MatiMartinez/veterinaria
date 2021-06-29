import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { FaFacebook, FaInstagram } from "react-icons/fa"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hand_dog: file(relativePath: { eq: "hand-dog.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      dog_walking: file(relativePath: { eq: "dog-walking.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
    }
  `)

  const hand_dog = getImage(data.hand_dog)
  const dog_walking = getImage(data.dog_walking)

  return (
    <HeroContainer id="hero">
      <InfoColumn>
        <TitleWrapper>
          <Title>Lorem ipsum dolor sit amet</Title>
          <TitleHr />
        </TitleWrapper>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
        <SocialMedia>
          <DogWalkingImg image={dog_walking} alt="dog-walking" />
          <FaFacebook size="30px" color="#005aab" />
          <FaInstagram size="30px" color="#005aab" />
        </SocialMedia>
      </InfoColumn>
      <ImageColumn>
        <FakeImg image={hand_dog} alt="hand-dog" />
      </ImageColumn>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  min-height: 100vh;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

// First Column
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 2rem;
  padding: 0 8rem;
  text-align: start;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`

const TitleHr = styled.hr`
  width: 30%;
  border: 2px solid #005aab;
  margin-left: 0px;
  margin: 0;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 4rem;

  @media (max-width: 576px) {
    padding-left: 1rem;
  }
`

const SocialMedia = styled.div`
  position: absolute;
  bottom: 0;
  left: 8rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  @media (max-width: 576px) {
    left: 1rem;
  }
`

const DogWalkingImg = styled(GatsbyImage)`
  width: 100px;
  height: auto;
  margin-right: -1rem;
`

// Second Column
const ImageColumn = styled.div`
  position: relative;

  @media (max-width: 576px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.5;
  }
`

const FakeImg = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: ${props => props.height};
  object-position: center;
  object-fit: cover;
  z-index: 0;
  border-radius: 50% 0% 0% 80% / 80% 0% 0% 29%;

  @media (max-width: 576px) {
    border-radius: 0%;
  }
`
