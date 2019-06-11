import React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"
import { rhythm } from "../../utils/typography"
const netlifyIdentity = require("netlify-identity-widget");

const infoCard = {
  maxWidth: '400px',
  display: 'flex',
  height: '600px',
  flexDirection: 'column',
  textAlign: 'center',
  margin: `6%`,
} 



export default class Courses extends React.Component {
  constructor(data){
    super(data);

    this.state = {
      courses: []
    }
  }

  getCourses() {
    return netlifyIdentity.currentUser() != null
    ? this.props.data.allMarkdownRemark.edges 
    : this.props.data.allMarkdownRemark.edges
    .filter(x => !x.node.frontmatter.private)
  }

  updateCourses() {
    this.setState({ courses: this.getCourses() });
  }

   componentDidMount(){
     netlifyIdentity.on("login",  user => this.updateCourses());
     netlifyIdentity.on("logout", () => this.updateCourses());
     this.updateCourses();
   }

   render () {

      return (
      <Layout>

        
        <div style={{
          display: `flex`,
          width: `90%`,
          margin: `8% auto`,
        }} 

        >{this.state.courses.map(({ node }) => (
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
)}}

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
                private
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