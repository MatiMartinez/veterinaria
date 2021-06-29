import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import "./layout.css"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      whatsapp: file(relativePath: { eq: "whatsapp.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
    }
  `)

  const whatsapp = getImage(data.whatsapp)

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppWrapper>
        <WhatsappImg image={whatsapp} alt="whatsapp" />
      </WhatsAppWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const WhatsAppWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
`

const WhatsappImg = styled(GatsbyImage)`
  width: 80px;
  height: auto;
  transition: all 0.5s;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
  }
`
