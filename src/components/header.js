import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


//import './header.module.scss'
import headerStyles from './header.module.scss'


const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} activeClassName={headerStyles.activeTitle} to="/">
                {data.site.siteMetadata.title}
                </Link>
                </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                    <Link className={headerStyles.navItem} to="/">Home</Link> 
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} to="/about"> About </Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} to="/contact">Contact </Link> 
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} to="/blog">Blog </Link>
                    </li>
                </ul>
            </nav>
         </header>

         
    )
}

export default Header