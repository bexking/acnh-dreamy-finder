import React from 'react'
import "../css/BottomNav.css";
import { Button } from './button';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function BottomNav({setSelectedVillagers, setSelectedDrVillagers}) {
    
    let location = useLocation().pathname;
    console.log(location);
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


/* to go on dreamy finder pages. Fixed at bottom. Buttons per page.""*/

/* needs to get current location, if the location is 0, don't show back button. Back button location -1. Next button location +1. Results page [3] button updates to say home*/