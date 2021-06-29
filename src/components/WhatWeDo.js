import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const WhatWeDo = () => {
  const data = useStaticQuery(graphql`
    query {
      hand_dog: file(relativePath: { eq: "happy-cat.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
  `)

  const hand_dog = getImage(data.hand_dog)

  return (
    <WhatWeDoContainer id="whatwedo">
      <ImageColumn>
        <FakeImg image={hand_dog} alt="hand-dog" />
      </ImageColumn>
      <InfoColumn>
        <TitleWrapper>
          <Title>Lorem ipsum dolor sit amet</Title>
          <TitleHr />
        </TitleWrapper>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
        <GoToLocation>Lorem ipsum dolor</GoToLocation>
      </InfoColumn>
    </WhatWeDoContainer>
  )
}

export default WhatWeDo

const WhatWeDoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  min-height: 100vh;
  position: relative;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    background-color: #fbfaf9;
  }
`

// First Column
const ImageColumn = styled.div`
  position: relative;

  @media (max-width: 576px) {
    display: none;
  }
`

const FakeImg = styled(GatsbyImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 60%;
  height: ${props => props.height};
  z-index: 0;
  border-radius: 0% 200% 50% 120% / 0% 150% 50% 80%;
`

// Second Column
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 2rem;
  padding: 0 8rem;
  text-align: start;

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
  font-weight: 300;
`

const GoToLocation = styled.span`
  background-color: #005aab;
  padding: 1rem;
`
