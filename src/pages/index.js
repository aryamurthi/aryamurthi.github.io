import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'


const IndexPage = () => {
    return (
        <Layout>
            <h1>Home</h1>
            <h2>Probably a place you should stay for a while :)</h2>
            <p>Need to seranade someone? <Link to="/contact">Contact me.</Link> </p> 
        </Layout>
    )
}

export default IndexPage
