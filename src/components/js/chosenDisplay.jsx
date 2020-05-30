import React, { useState } from 'react'
import '../css/ChosenDisplay.css';
import { RoundButton } from '../../components/js/RoundButton';
import { Button } from '../../components/js/button';

export default function ChosenDisplay() {
    const [selectedButton, setSelectedButton] = useState(0);

    let buttons = [
        <RoundButton />,
        <RoundButton />,
        <RoundButton />,
        <RoundButton />,
        <RoundButton />,
        <RoundButton />,
        <RoundButton />,
        <RoundButton />,
        <RoundButton />
    ];

    return (
        <div>
            <div className="ButtonContainer">
                <RoundButton
                    selection={true}
                />
                {buttons}




                <div className="ClearButtons">

                <Button
                    type="button"
                    buttonStyle="btn--previous--solid"
                    buttonSize="btn--small"
                >Clear Selected
                </Button>

                <Button
                    type="button"
                    buttonStyle="btn--previous--solid"
                    buttonSize="btn--small"
                >Clear All
                </Button>
                </div>

            </div>

            <div>{/* buttons clear selected */}</div>
            
        </div>
    )
}
