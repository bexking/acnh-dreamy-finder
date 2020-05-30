import '../css/RoundButton.css';
import React, { useState } from 'react';

const STYLES = [
    "circ--primary",
    "circ--selected",
]

export const RoundButton = ({
    selection, onClick
}) => {

    const checkRoundButtonStyle = selection 
        ? STYLES[1]
        : STYLES[0];

    return (
        <svg height="100" width="100" className={`btn ${checkRoundButtonStyle}`} onClick={onClick}>
            <circle cx="50" cy="50" r="40"/>
        </svg>
    )

}