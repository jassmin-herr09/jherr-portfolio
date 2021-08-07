import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import projects from "../data/projects.json"


const Projects = () => {
  return (
    <Layout>
      <Head page="Projects" />
      <section style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
          {
              projects.map((project, idx) => {
                  return (
                    <article key={idx}>
                        <img style={{height: 175, border: "2px solid #333"}} src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.githubLink}>View On Github</a>
                        <br />
                        <a href={project.deployedLink}>View Deployed Project</a>
                    </article>
                 )
                }
            )
          } 
      </section>
    </Layout>
  )
}

export default Projects