
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import jassmins from "../data/jassmins.json"


const IndexPage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <section style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
          {
              jassmins.map((jassmin, idx) => {
                  return (
                    <article key={idx}>
                      
                        <img style={{height: 800 }} src={jassmin.image} />
                       
                    </article>
                 )
                }
            )
          } 
      </section>
  
    </Layout>
  )
}

export default IndexPage
