import React from 'react'
import '../css/home.css';
import { Link } from "react-router-dom";
import { Button } from '../../components/js/button';
import hero from '../../assets/dreamies-hero.png';

export default function home() {
    return (
        <div className="content">
            <div className="intro">
                <p className="intro-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Link to="/CurrentVillager" className="intro-item">
                    <Button
                        type="button"
                        buttonStyle="btn--primary-solid"
                        >Get Started
                    </Button>
                </Link>
            </div>
            <img className="hero-image" src={hero} alt="Illustration of Audie, Raymond and Marina" />
        </div>
    )
}
