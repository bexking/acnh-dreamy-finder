import React from 'react'
import '../css/home.css';
import { Link } from "react-router-dom";
import { Button } from '../../components/js/button';
import hero from '../../assets/dreamies-hero.png';

export default function Home({setSelectedVillagers, setSelectedDrVillagers}) {
    return (
        <div className="content">
            <div className="intro">
                <p className="intro-item">It can be hard work find the villager you’re looking for when you’re villager hunting!
                <br/> 
                <br/> 
                Dreamy Finder is a tool to help you discover the likelihood of finding your favourite Animal Crossing: New Horizons villager on a Mystery Island Tours, and help you work out how many Nook Mile Tickets to save up. </p>
                <Link to="/CurrentVillager" className="intro-item" onClick={() => {
                    setSelectedVillagers([]);
                    setSelectedDrVillagers([]);
                    }}>
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
