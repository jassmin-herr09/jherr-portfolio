import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Head from "./head"

import "../styles/reset.css"

import { StyledLayout } from "../styles/styled-components"

const Layout = (props) => {
    const { site: {siteMetadata: { author, title }} } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                author
                description
                siteUrl
                title
                }
            }
        }
    `)


    return (
        <StyledLayout>
            <Head title={title}/>
            <Header />
                <div>
                    <main>
                        {props.children}
                    </main>
                </div>
            <Footer author={author} title={title} />
        </StyledLayout>
    )
}

export default Layout