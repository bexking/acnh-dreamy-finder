import React from 'react'
import "../css/BottomNav.css";
import { Button } from './button';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function bottomNav() {
    return (
        <div className="container">
            <Link to="/CurrentVillager">
                <Button
                    type="button"
                    buttonStyle="btn--previous--solid"
                    buttonSize="btn--medium"
                >Go Back
                </Button>
            </Link>
            <Link to="/CurrentVillager">
                <Button
                    type="button"
                    buttonStyle="btn--next--solid"
                    buttonSize="btn--medium"
                >Next Step
                </Button>
            </Link>
        </div>
    )
}

/* to go on dreamy finder pages. Fixed at bottom. Buttons per page.""*/