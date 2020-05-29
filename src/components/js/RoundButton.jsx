import '../css/RoundButton.css';
import React, { useState } from 'react';

const STYLES = [
    "circ--primary",
    "circ--selected",
]

export const RoundButton = ({
    onClick, 
    buttonStyle, 
}) => {
    const [selected, setSelected] = useState(false);

    const checkRoundButtonStyle = selected 
        ? STYLES[1]
        : STYLES[0];

    return (
        <svg height="100" width="100" className={`btn ${checkRoundButtonStyle} `} onClick={()=> setSelected(true)}>
            <circle cx="50" cy="50" r="40"/>
        </svg>
    )

}

