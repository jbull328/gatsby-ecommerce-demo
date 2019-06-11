import React from "react"
import { Router } from "@reach/router"
import  Layout from "../../components/layout"
import Header from "../../components/header"
import Coarses from  "../app/courses"
import Profile from "./profile"
import Login from "./login"
import Main from "./main"
import PrivateRoute from "../../components/PrivateRoute"
// import Login from "./login"

const App = () => {
    return (
        <Layout >
            <Router>
                <PrivateRoute path="/app/profile" component={Profile} />
                <PrivateRoute path="/app/courses" component={Coarses} />
                <PublicRoute path="/app" >
                    <PublicRoute path="/" component={Main} />
                    <Login path="/login" />
                </PublicRoute>
            </Router>
        </Layout>
    )
}

function PublicRoute(props) {
    return <div>{props.children}</div>
}

export default App
