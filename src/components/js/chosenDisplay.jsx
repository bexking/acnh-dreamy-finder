import React, { useState } from 'react'
import '../css/ChosenDisplay.css';
import { RoundButton } from '../../components/js/RoundButton';
import { Button } from '../../components/js/button';

export default function ChosenDisplay() {
    const [selectedButton, setSelectedButton] = useState(0);
    // const buttonNum = 9;

    let buttons = [];
    let villagers = [];

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

    for (i = 1; i < 392; i++) {
        // let selector = mkSelectorFunc(i);
        villagers[i-1]=<RoundButton selection={false} key={i} villager={i}/>;
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
                    {/* /* buttons clear selected 
            Clear selected to make the currently selected swap picture
            Clear all to reset back to all mystery pictures and first villager space selected*/}
                </div>

            </div>

        

            <div className="Villagers">
                    {villagers}
            </div>
            
        </div>
    )
}
