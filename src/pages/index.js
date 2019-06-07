import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import  heroImage  from "../images/heroImage.jpg"
import heroSectionImage from "../images/hero.jpg"


const infoCard = {
  maxWidth: '400px',
  display: 'flex',
  height: '600px',
  flexDirection: 'column',
  textAlign: 'center',
  margin: `6%`,
} 

const readMoreButton = {
  padding: "8px 24px",
  letterSpacing: '1.4px',
  marginTop: '22px'
}

const leftInfoBlock = {
  width: "45%",
  marginTop: "44px"
}

const rightImageBlock = {
  width: '55%',
  padding: '38px',
  marginTop: "44px"
}

const upperSection = {
  display: 'flex',
  justifyContent: "space-around"
}

const heroSection = {
  width: '100%',
  background: `url(${heroSectionImage})`,
  backgroundSize: 'cover',
  height: '480px',
  position: 'relative',
}

const textBlock = {
  position: 'absolute',
  bottom: '35%',
  right: '65%',
  backgroundColor: 'black',
  color: 'white',
  padding: '22px 28px'
}

export default ({ data }) => {
  return (
  <Layout>
    <div style={upperSection}>
      <div style={leftInfoBlock}>
        <h1>Free Email Courses</h1>
        <p>Hi quality personal coarses, improve performance in all aspects of your life. Gain new perspective, open yourself up to greater posibilities.</p>
        <Link to="/courses"  style={{textDecoration: `none`, color: `#3A4750`}}>
          <h4>VIEW OUR COURSES</h4>
        </Link>
      </div>
      
      <div style={rightImageBlock}>
        <img src={heroImage}/>
        
      </div>

    </div>
    <div style={heroSection}>
    <div style={textBlock}>
          <h4>Join the movement</h4>
          <p>It time to take a step down a new path.</p>
          <p>Some text about infos and stuff.</p>
        </div>
      
    </div>
    {/* <p>will need to do something different with the below section.</p>
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
          <button style={readMoreButton}>Read More</button>
        </Link>
      </div>
    ))}
    </div> */}
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
