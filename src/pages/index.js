import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { styles } from "../images/styles.jpg"

const infoCard = {
  maxWidth: '400px',
  display: 'flex',
  height: '600px',
  flexDirection: 'column',
  textAlign: 'center',
  margin: `6%`,
} 

const leftInfoBlock = {
  width: "45%",
}

const rightImageBlock = {
  width: '55%',
}

export default ({ data }) => {
  return (
  <Layout>
    <div style={leftInfoBlock}>
      <h1>Free Email Courses</h1>
      <p>Hi quality personal coarses, improve performance in all aspects of your life. Gain new perspective, open yourself up to greater posibilities.</p>
      <h4>VIEW OUR COURSES</h4>
    </div>
    
    <div style={rightImageBlock}>
      <img src={styles}/>
    </div>
    <div style={{
      display: `flex`,
      width: `90%`,
      margin: `8% auto`,
    }} 

    >{data.allMarkdownRemark.edges.map(({ node }) => (
      <div style={infoCard} key={node.id} >
        <img src={node.frontmatter.hero} />
      <h4>
         {node.frontmatter.title}
      </h4>
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
    </div>
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
                hero
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
