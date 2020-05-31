import '../css/RoundButton.css';
import React, { useState } from 'react';

const STYLES = [
    "circ--primary",
    "circ--selected",
]

export const RoundButton = ({
    selection, onClick, villager
}) => {

    const checkRoundButtonStyle = selection 
        ? STYLES[1]
        : STYLES[0];

    
    const checkVillagerNumber = ((Number.isInteger(villager)) ? villager : 64);

    return (
        <svg height="100" width="100" className={`btn ${checkRoundButtonStyle}`} onClick={onClick}>
            <defs>
                <pattern id={`image${checkVillagerNumber}`} x="0" y="0" patternUnits="userSpaceOnUse" height="100" width="100" >
                    <image x="0" y="-3" height="100" width="100" xlinkHref={`http://acnhapi.com/icons/villagers/${checkVillagerNumber}`}></image>
                </pattern>
            </defs>
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="40" fill={`url(#image${checkVillagerNumber})`}/>
        </svg>
    )

}