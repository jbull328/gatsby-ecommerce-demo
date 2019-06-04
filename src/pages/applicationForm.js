import React from "react"
import Layout from "../components/layout"


const ApplicationForm = () => (
  <Layout>
    
    <div>
        <form>
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