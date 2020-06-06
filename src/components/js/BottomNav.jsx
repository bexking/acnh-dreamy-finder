import React from 'react'
import "../css/BottomNav.css";
import { Button } from './button';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function BottomNav({nextDisabled, setSelectedVillagers, setSelectedDrVillagers}) {

    let location = useLocation().pathname;

    let locations = ["/CurrentVillager", "/DreamVillager", "/Results"];
    let i = locations.indexOf(location);

    return (
        <div className="container">
            {i>=1 && 
            <Link to={locations[i-1]}>
                <Button
                    type="button"
                    buttonStyle="btn--previous--solid"
                    buttonSize="btn--medium"
                >Go Back
                </Button>
            </Link>}
            {i<2 &&
            <Link to={locations[i+1]}>
                <Button
                    type="button"
                    buttonStyle="btn--next--solid"
                    buttonSize="btn--medium"
                    disabled={nextDisabled}
                >Next Step
                </Button>
            </Link>}
            {i>=2 &&
            <Link to={locations[i-2]}>
                <Button
                    type="button"
                    buttonStyle="btn--next--solid"
                    buttonSize="btn--medium"
                    onClick={()=>{
                        setSelectedVillagers([]);
                        setSelectedDrVillagers([]);
                        }}>Start Over
                </Button>
            </Link>}
        </div>
    )
}
