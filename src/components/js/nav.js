import React from 'react'
import { Link } from "react-router-dom";
import "../css/nav.css";
import homeIcon from "../../assets/home-selected.png"
import homeIcon2 from "../../assets/home-unselected.png"
import { useLocation } from 'react-router-dom';

export default function Nav({setSelectedVillagers, setSelectedDrVillagers}) {

    let location = useLocation().pathname;
    let pageCheck = location == "/home" ? "selectedPage" : "unselected";
    let pageCheck2 = location == "/CurrentVillager" || location == "/DreamVillager" || location == "/Results" ? "selectedPage" : "unselected";
    let pageCheck3 = location == "/about" ? "selectedPage" : "unselected";

    let homeImg;
    if (location == "/home") {
        homeImg = homeIcon;
    } else {
        homeImg = homeIcon2;
    }

    /*if pagecheck home is slected, home selected img. if !selected, home-unselected img.*/

    return (
        <div className="main-nav">
            <Link to="/home" className={`nav-item ${pageCheck}`}>
                <img id="home-img" src={homeImg} alt="Home"/>
            </Link>
            <Link to="/CurrentVillager" className={`nav-item ${pageCheck2}`} onClick={()=>{
                    setSelectedVillagers([]);
                    setSelectedDrVillagers([]);
                    }}>Dreamy Finder</Link>
            <Link to="/about" className={`nav-item ${pageCheck3}`}>About</Link>
        </div>
    )
}

