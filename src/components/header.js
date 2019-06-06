import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const mainLinks = {
  display: 'flex',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'space-evenly'
}

const individualHeaderLinks = {
  marginLeft: "48px",
  letterSpacing: '1.2px'
}

const loginButton = {
  background: 'white',
  color: '#8BF00E',
  padding: '12px 27px', 
  borderRadius: '45px',
  letterSpacing: '1.8px',
  marginLeft: '48px',
}

const loginSignupButtonGroup = {
  display: "flex",
  alignItems: 'center',
  color: 'white',
  justifyContent: 'space-evenly'
}

const Header = ({ siteTitle }) => (
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
          {siteTitle}
        </Link>
      </h3>

        <div style={mainLinks}>
          <h4 style={individualHeaderLinks}>
            <Link to="/" style={{textDecoration: `none`, color: `white`}}>
            Home
            </Link>
          </h4>
          <h4 style={individualHeaderLinks}>
            <Link to="/about"  style={{textDecoration: `none`, color: `white`}}>
              About
            </Link>
          </h4>
          <h4 style={individualHeaderLinks}>
            <Link to="/courses" style={{textDecoration: `none`, color: `white`}}>
              Coarses
            </Link>
          </h4>
          <h4 style={individualHeaderLinks}>
            <Link to="/contact" style={{textDecoration: `none`, color: `white`}}>
              Contact
            </Link>
          </h4>
        </div>
          
        <div style={loginSignupButtonGroup}>
          <h4 style={individualHeaderLinks}>Login</h4>
          <h4 style={loginButton}>
            <Link to="/applicationForm" style={{textDecoration: `none`, color: `#8BF00E`}}>
              Apply Now
            </Link>
          </h4>
        </div>
          
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
