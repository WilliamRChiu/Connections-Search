import React from "react";

function Navbar(){
    return(
    <div>
        <header>
            <h1 className="webTitle">
                common ground.
            </h1>
            <div className="navContainer">
            <nav className="Navbar">
                <ul className="navElements">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About Us</a></li>
                    <li><a href="#Collect">Collect Connections</a></li>
                    <li><a href="#groq">Analysis</a></li>
                </ul>
            </nav>
            </div>

        </header>
    </div>
    )

}

export default Navbar;