import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const infoCard = {
  maxWidth: '400px',
  display: 'flex',
  height: '600px',
  flexDirection: 'column',
  textAlign: 'center',
} 


export default ({ data }) => {
  return (
  <Layout>
    
    <h1>Hi people</h1>
    <p>Stripe blog demo.</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div style={infoCard} key={node.id} >
      <div>
         {node.frontmatter.title}
      </div>
      <div>{node.excerpt}</div>
      <Link 
        to={node.fields.slug}
        style={{
          textDecoration: `none`,
          color: `inherit`
        }}
        >
          <button>Read More</button>
        </Link>
      
  </div>
    ))}
    
  </Layout>
)}

export const query = graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                data(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
`
