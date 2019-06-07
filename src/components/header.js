import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from "../styles/header.module.css"
const netlifyIdentity = require("netlify-identity-widget");

class Header extends Component {
  componentDidMount() {
    netlifyIdentity.init();
  }
 render() {
 
  return (
  <header
    style={{
      background: `#161925`,
      marginBottom: `1.45rem`,
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '12px',
    }}
  >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Greater U
        </Link>
      </h3>

        <div className={mainLinks}>
          <h4 className={individualHeaderLinks}>
            <Link to="/" className={{textDecoration: `none`, color: `white`}}>
            Home
            </Link>
          </h4>
          <h4 className={individualHeaderLinks}>
            <Link to="/about"  className={{textDecoration: `none`, color: `white`}}>
              About
            </Link>
          </h4>
          <h4 className={individualHeaderLinks}>
            <Link to="/courses" sclassName={{textDecoration: `none`, color: `white`}}>
              Coarses
            </Link>
          </h4>
          <h4 sclassName={individualHeaderLinks}>
            <Link to="/contact" className={{textDecoration: `none`, color: `white`}}>
              Contact
            </Link>
          </h4>
        </div>
          
        <div className={stles.loginSignupButtonGroup}>
          <div data-netlify-identity-menu className={{textDecoration: `none`, color: `#8BF00E`}}></div>
          <h4 className={loginButton}>
            <Link to="/applicationForm" className={{textDecoration: `none`, color: `#8BF00E`}}>
              Apply Now
            </Link>
          </h4>
        </div>
          
    
  </header>
  )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
