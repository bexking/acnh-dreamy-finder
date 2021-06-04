import React, { useState } from 'react'
import '../css/ChosenDisplay.css';
import { RoundButton } from './RoundButton';
import { Button } from './button';

export default function ChosenDisplay({spaces, selectedVillagers, setSelectedVillagers, villagerInfo, prevSelectedVillagers}) {
    const [selectedButton, setSelectedButton] = useState(0);
    const [vLookup, setVLookup] = useState("");

    let buttons = [];
    let villagers = [];

    function villagersSelect(id) {
        return function() {
            let newSelectedVillagers = selectedVillagers.slice();
            newSelectedVillagers[selectedButton]=id;
            setSelectedVillagers(newSelectedVillagers);
            setVLookup("");
            document.getElementById("nameInput").focus()

            if (selectedButton < spaces-1) 
            {
                setSelectedButton(selectedButton+1);
            }
        };
    }

    function mkSelectorFunc(num) {
        return function() {
            setSelectedButton(num);
        };
      }
    
    let i;
    for (i = 0; i < spaces; i++) {
        let selector = mkSelectorFunc(i);
        buttons[i]=<RoundButton selection={selectedButton == i} villager={selectedVillagers[i]} onClick={selector} key={i}/>;
    }

    villagers = villagerInfo.map(villagerDeets => {
        if (selectedVillagers.includes(villagerDeets.id) || !villagerDeets.name["name-USen"].toLowerCase().startsWith(vLookup.toLowerCase()) || prevSelectedVillagers.includes(villagerDeets.id) ) {
            return;
        }
        return <div className="villagerOptions" key={villagerDeets.id}>
            <RoundButton selection={false} villager={villagerDeets.id} name={villagerDeets.name["name-USen"]} onClick={villagersSelect(villagerDeets.id)}/>
            <p className="vNames">{villagerDeets.name["name-USen"]}</p>
        </div>       
    })

    return (
        <>
        <div className="bc-container">
            <div className="ButtonContainer">
                <div className="btn-group">
                    {buttons}
                </div>

                {/* <div className="ClearButtons">
                    <Button
                        type="button"
                        buttonStyle="btn--previous--solid"
                        buttonSize="btn--small"
                        onClick={() => {
                            let newSelectedVillagers = selectedVillagers.slice();
                            newSelectedVillagers.splice(selectedButton, 1);
                            setSelectedVillagers(newSelectedVillagers);
                        }}
                    >Clear Selected
                    </Button>

                    <Button
                        type="button"
                        buttonStyle="btn--previous--solid"
                        buttonSize="btn--small"
                        onClick={() => {setSelectedVillagers([]); setSelectedButton(0); }}
                    >Clear All
                    </Button>
                </div> */}
            </div>
            <div className="ClearButtons">
                    <Button
                        type="button"
                        buttonStyle="btn--previous--solid"
                        buttonSize="btn--small"
                        onClick={() => {
                            let newSelectedVillagers = selectedVillagers.slice();
                            newSelectedVillagers.splice(selectedButton, 1);
                            setSelectedVillagers(newSelectedVillagers);
                        }}
                    >Clear Selected
                    </Button>

                    <Button
                        type="button"
                        buttonStyle="btn--previous--solid"
                        buttonSize="btn--small"
                        onClick={() => {setSelectedVillagers([]); setSelectedButton(0); }}
                    >Clear All
                    </Button>
                </div>
        </div>    

            <div className="textSearch">
                <input autoFocus id="nameInput" className="vSearch" type="text" placeholder="Type villager name here" value={vLookup} onChange={e => setVLookup(e.target.value)}></input>
            </div>

            <div className="v-section-container">
                <div className="Villagers">
                        {villagers}
                </div>
            </div>
        </>
    )
}
