import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'



const AboutPage = ()=> {
    return( 
        <Layout>
            <h1>About</h1>
            <p>
                I'm a senior at Boston College studying business analytics and Marketing. 
                <p>More importantly, I make a mean quesadilla.</p>
            </p>
            <p>
                 Feel free to <Link to="/contact">contact me.</Link>
            </p>
        </Layout>
            )
        }

export default AboutPage