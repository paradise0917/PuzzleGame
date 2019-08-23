import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
  
const Navbar = () => {
    const navbar = 
        <React.Fragment>
            <div className="flex flex-jus-center flex-ali-center title" >Puzzle Game</div>
                <ul className="flex flex-child-align-self-end flex-ali-center link">
                    <li><Link to="/">Game</Link></li>
                    <li><Link to="/ranking">Ranking List</Link></li>
                </ul>
        </React.Fragment>;
    return <div className="navbar flex flex-jus-space-btw">{navbar}</div>;
}

export default Navbar;