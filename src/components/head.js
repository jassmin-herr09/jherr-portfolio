
import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ page }) => { 
    const { site: { siteMetadata: { title, description }}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <Helmet>
            <title>{`${page} | ${title}`}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default Head