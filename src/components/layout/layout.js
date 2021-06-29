import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppWrapper>
        <FakeImg src={require("../../images/WhatsApp.svg")} />
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
`

const FakeImg = styled.img`
  width: 80px;
  height: auto;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    transform: scale(1.1);
  }
`
