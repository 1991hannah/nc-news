import React from "react";
import { Link } from "react-router-dom";

const Navbar = (() => {
    return(
        <div className="navbar">
            <ul>
            <li><Link id="home-link" to={`/`}>Home</Link></li>
            <Link id="articles-link" to={`/articles`}>All articles</Link>
            
            </ul>     
        </div>
    )
})

export default Navbar