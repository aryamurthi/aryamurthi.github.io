import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'


const IndexPage = () => {
    return (
        <Layout>
            <h1>Home</h1>
            <h2>I'm Arya I have a pet named Mihir- he's also my older brother.</h2>
            <p>Need to seranade someone? <Link to="/contact">Contact me</Link> </p> 
        </Layout>
    )
}

export default IndexPage
