import React from 'react'
import { Link } from "react-router-dom";
import "../css/nav.css";
import homeIcon from "../../assets/home-selected.png"

export default function Nav() {
    return (
        <div className="main-nav">
            <Link to="/home" className="nav-item"><img id="home-img" src={homeIcon} alt="Home"/></Link>
            <Link to="/CurrentVillager" className="nav-item" >Dreamy Finder</Link>
            <Link to="/about" className="nav-item">About</Link>
        </div>
    )
}
