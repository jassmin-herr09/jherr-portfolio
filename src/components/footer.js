import React from "react"

import { StyledFooter } from "../styles/styled-components"

const Footer = (props) => (
    <StyledFooter>
     <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()}</p>
    </StyledFooter>
)

export default Footer