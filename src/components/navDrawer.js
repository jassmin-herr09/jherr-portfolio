import React from "react"
import { Link } from "gatsby"
import { StyledNavDrawer } from "../styles/styled-components"

function NavDrawer({ open, setOpen }) {
  return (
    <StyledNavDrawer open={open}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
    </StyledNavDrawer>
  )
}

export default NavDrawer