import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Skus from "../components/Products/Skus"

const Products = () => (
    <Layout>
        <h1>Some Merch</h1>
        <Skus/>
    </Layout>
)

export default Products