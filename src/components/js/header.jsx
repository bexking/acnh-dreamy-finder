import React from 'react'
import "../css/header.css";
import { useLocation } from 'react-router-dom';



export default function Header() {
    let location = useLocation().pathname;
    let pageCheck = location == "/CurrentVillager" ? "selected" : "unselected";
    let pageCheck2 =  location == "/DreamVillager" ? "selected" : "unselected";
    let pageCheck3 =  location == "/Results" ? "selected" : "unselected";


    return (
        <div>
            <h1>Dreamy Finder</h1>
            <div className='stepper'>
                <div className={`circle ${pageCheck}`}></div>
                <hr className="line"></hr>
                <div className={`circle ${pageCheck2}`}></div>
                <hr className="line"></hr>
                <div className={`circle ${pageCheck3}`}></div>
            </div>
        </div>
    )
}

