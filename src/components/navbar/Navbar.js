import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { Link as LinkScroll } from "react-scroll"
import { FaTimes, FaBars } from "react-icons/fa"

export default function Navbar() {
  const [scroll, setScroll] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    function changeNav() {
      if (window.scrollY >= 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <Header scroll={scroll}>
      <Logo to="/">LOREM</Logo>
      <MobileIcon onClick={handleMenu}>
        {menu ? (
          <FaTimes size="30px" color="#fbfaf9" />
        ) : (
          <FaBars size="30px" color="#fbfaf9" />
        )}
      </MobileIcon>
      <Nav menu={menu}>
        <NavLink to="hero" smooth={true} duration={1000}>
          Inicio
        </NavLink>
        <NavLink to="whatwedo" smooth={true} duration={1000}>
          Nosotros
        </NavLink>
        <NavLink to="services" smooth={true} duration={1000}>
          Servicios
        </NavLink>
        <NavLinkContact to="/contact">Contacto</NavLinkContact>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  background-color: ${props => (props.scroll ? "#005aab" : "#005aab")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 8rem;
  width: 100%;
  z-index: 2;
  transition: 0.5s all ease;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 900;
  color: #fbfaf9;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    position: absolute;
    top: 80px;
    left: ${props => (props.menu ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.2s ease;
    background-color: #005aab;
  }
`

const NavLink = styled(LinkScroll)`
  font-size: 1rem;
  font-weight: 600;
  color: #fbfaf9;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }
`

const NavLinkContact = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid #fbfaf9;
  color: #fbfaf9;
  padding: 0.25rem 1.5rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    border: none;
    padding: 1rem 0rem;
    width: 100%;
    text-align: center;
  }
`

const MobileIcon = styled.div`
  display: none;
  height: 30px;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`
