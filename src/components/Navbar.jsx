import React from "react";
import { Link } from "react-router-dom";

const Navbar = (() => {
    return(
        <div className="navbar">
            <ul className="navlinks">
            <li><Link id="home-link" to={`/`}>Home</Link></li>
            <li><Link id="articles-link" to={`/articles`}>All articles</Link></li>
            
            </ul>     
        </div>
    )
})

export default Navbar