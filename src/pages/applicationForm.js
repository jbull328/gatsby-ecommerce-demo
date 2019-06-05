import React from "react"
import Layout from "../components/layout"

const intrestForm = {
    display: 'flex',
    flexDirection: 'column'
}

const infoBlock = {

}

const ApplicationForm = () => (
  <Layout>
    
    <div>
        <div style={infoBlock}>
            <h3>Apply for coaching</h3>
            <p></p>
        </div>
        <form style={intrestForm} name="coachingSignUp" method="POST" data-netlify="true">
            <label>Name</label>
            <input type="text" name="name" />
            <label>email</label>
            <input type="email" />
            <label>?</label>
            <input type="text" />
            <label>Name</label>
            <input type="text" />
            <label>Name</label>
            <input type="text" />
            <input type="submit"/>
        </form>
    </div>
    
    
  </Layout>
)

export default ApplicationForm