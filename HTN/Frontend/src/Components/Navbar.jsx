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
                    <li><a href="#">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Collect Connections</a></li>
                    <li><a href="">Analysis</a></li>
                </ul>
            </nav>
            </div>

        </header>
    </div>
    )

}

export default Navbar;