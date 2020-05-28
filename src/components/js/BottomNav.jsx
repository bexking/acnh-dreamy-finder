import React from 'react'
import "../css/BottomNav.css";
import { Button } from './button';
import { useLocation } from 'react-router-dom';

export default function bottomNav() {
    return (
        <div className="container">
            <Button
                type="button"
                buttonStyle="btn--previous--outline"
                buttonSize="btn--medium"
             >Go Back
            </Button>
            <Button
                type="button"
                buttonStyle="btn--next--solid"
                buttonSize="btn--medium"
             >Next Step
            </Button>
        </div>
    )
}

/* to go on dreamy finder pages. Fixed at bottom. Buttons per page.""*/