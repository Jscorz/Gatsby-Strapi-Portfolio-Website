import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const ProjectTemplate = ({ pageContext: { title, github, url }, data }) => {
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
        <div className="projects-links">
          <a href={data.strapiProject.github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon font-size-higher"></FaGithubSquare>
          </a>
          <a href={data.strapiProject.url} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon font-size-higher"></FaShareSquare>
          </a>
        </div>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }, github: {}) {
      description
      title
      image {
        publicURL
      }
      github
      url
    }
  }
`
export default ProjectTemplate
