import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from "../styles/header.module.css"
import { getUser, isLoggedIn, logout } from "../utils/auth"
const netlifyIdentity = require("netlify-identity-widget");


class Header extends Component {
  componentDidMount() {
    netlifyIdentity.init();
  }

  

 render() {
  const content = {message: "", login: true}
  const user = getUser()
  if(isLoggedIn()) {
    content.message = `Hello, ${user}`
  } else {
    content.message = "You are not logged in"
  }

  return (
  <header
    style={{
      background: `#161925`,
      marginBottom: `1.45rem`,
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '12px',
    }}
  >   <span>{content.message}</span>
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

        <div className={styles.mainLinks}>
          <h4 className={styles.individualHeaderLinks}>
            <Link to="/" style={{textDecoration: `none`, color: `white`}}>
            Home
            </Link>
          </h4>
          <h4 className={styles.individualHeaderLinks}>
            <Link to="/about"  style={{textDecoration: `none`, color: `white`}}>
              About
            </Link>
          </h4>
          <h4 className={styles.individualHeaderLinks}>
            <Link to="/app/courses" style={{textDecoration: `none`, color: `white`}}>
              Coarses
            </Link>
          </h4>
          <h4 sclassName={styles.individualHeaderLinks}>
            <Link to="/contact" style={{textDecoration: `none`, color: `white`}}>
              Contact
            </Link>
          </h4>
        </div>
          
        <div className={styles.loginSignupButtonGroup}>
          <div data-netlify-identity-menu style={{textDecoration: `none`, color: `#8BF00E`}}></div>
          <h4 className={styles.loginButton}>
            <Link to="/applicationForm" style={{textDecoration: `none`, color: `#8BF00E`}}>
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
