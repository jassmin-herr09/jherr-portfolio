import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/reset.css"

import { StyledLayout } from "../styles/styled-components"



const Layout = (props) => {
    return (
        <StyledLayout>
           <Header />
            <div>
                <main>
                    {props.children}
                </main>
            </div>
            <Footer />

        </StyledLayout>    
    )

}

export default Layout