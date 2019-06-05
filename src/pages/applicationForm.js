import React from "react"
import Layout from "../components/layout"

const intrestForm = {
    display: 'flex',
    flexDirection: 'column'
}

const infoBlock = {
    width: '78%',
}

const ApplicationForm = () => (
  <Layout>
    
    <div>
        <div style={infoBlock}>
            <h3>Apply for coaching</h3>
            <p>When you sign up you will be added to a small group of fellow students. We will communicate through a popular chat app on a regular basis as we work on completing your mission.
               <br/> Note: One on one coaching is available just note it in the form.
            </p>
        </div>
        <form style={intrestForm} name="coachingSignUp" method="POST" data-netlify="true">
            <label>Name</label>
            <input type="text" name="name" />
            <label>email</label>
            <input type="email" name="email"/>
            <label>What are you struggling with?</label>
            <textarea name="message"></textarea>
            <button type="submit">Apply</button>
        </form>
    </div>
    
    
  </Layout>
)

export default ApplicationForm