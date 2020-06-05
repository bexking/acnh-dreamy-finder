import '../css/RoundButton.css';
import React, { useState } from 'react';
import placeholder from "../../assets/placeholder.png"

const STYLES = [
    "circ--primary",
    "circ--selected",
]

export const RoundButton = ({
    selection, onClick, villager, name
}) => {

    const checkRoundButtonStyle = selection 
        ? STYLES[1]
        : STYLES[0];

    
    const checkVillagerNumber = ((Number.isInteger(villager)) ? require(`../../assets/icons/villagers/${villager}.png`) : placeholder);

    return (
        <svg height="100" width="100" className={`btn ${checkRoundButtonStyle}`} onClick={onClick}>
            <defs>
                <pattern id={`image${checkVillagerNumber}`} x="0" y="0" patternUnits="userSpaceOnUse" height="100" width="100" >
                    <image x="8" y="8" height="85" width="85" xlinkHref={checkVillagerNumber}></image>
                </pattern>
            </defs>
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="40" fill={`url(#image${checkVillagerNumber})`}/>
            <title>{`${name} icon`}</title>
        </svg>
    )

}