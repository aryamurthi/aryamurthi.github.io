import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'



const AboutPage = ()=> {
    return ( 
        <Layout>
            <h1>About</h1>
            <p>
                Hi, I'm Arya. Lowkey just trying something out here maybe it'll turn out amazing but most likely it'll be a steaming pile of sh–
            </p>
            <p>
                 Feel free to <Link to="/contact">contact me.</Link>
            </p>
        </Layout>
            )
        }   

export default AboutPage