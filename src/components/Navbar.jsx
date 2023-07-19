import React from "react";
import { Link } from "react-router-dom";

const Navbar = (() => {
    return(
        <div className="navbar">
            <h2>Navbar</h2>
            <Link id="articles-link" to={`/articles`}>All articles</Link>
        </div>
    )
})

export default Navbar