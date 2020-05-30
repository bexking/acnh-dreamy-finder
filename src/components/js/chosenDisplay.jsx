import React, { useState } from 'react'
import '../css/ChosenDisplay.css';
import { RoundButton } from '../../components/js/RoundButton';
import { Button } from '../../components/js/button';

export default function ChosenDisplay() {
    const [selectedButton, setSelectedButton] = useState(0);
    // const buttonNum = 9;

    let buttons = [];

    function mkSelectorFunc(num) {
        return function() {
            setSelectedButton(num);
        };
      }
    
    let i;
    for (i = 0; i < 9; i++) {
        let selector = mkSelectorFunc(i);
        buttons[i]=<RoundButton selection={selectedButton == i} onClick={selector} key={i}/>;
    }

    console.log(selectedButton);
    return (
        <div>
            <div className="ButtonContainer">
            
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
