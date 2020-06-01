import React, { useState, useEffect } from 'react'
import '../css/ChosenDisplay.css';
import { RoundButton } from '../../components/js/RoundButton';
import { Button } from '../../components/js/button';

export default function ChosenDisplay() {
    const [selectedButton, setSelectedButton] = useState(0);
    const [villagerInfo, setVillagerInfo] = useState([]);
    const [selectedVillagers, setSelectedVillagers] = useState([]);

    useEffect(() => {
        fetch('http://acnhapi.com/v1/villagers')
        .then(response => response.json())
        .then(data => {
            setVillagerInfo(Object.values(data));
        })
    }, []);


    // const buttonNum = 9;

    let buttons = [];
    let villagers = [];

    function villagersSelect(id) {
        return function() {
            let newSelectedVillagers = selectedVillagers.slice();
            newSelectedVillagers[selectedButton]=id;
            setSelectedVillagers(newSelectedVillagers);
            if (selectedButton < 8) 
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
    for (i = 0; i < 9; i++) {
        let selector = mkSelectorFunc(i);
        buttons[i]=<RoundButton selection={selectedButton == i} villager={selectedVillagers[i]} onClick={selector} key={i}/>;
    }

    // for (i = 1; i < 392; i++) {
    //     // let selector = mkSelectorFunc(i);
    //     villagers[i-1]=<RoundButton selection={false} key={i} villager={i}/>;
    // }

    villagers = villagerInfo.map(villagerDeets => {
        if (selectedVillagers.includes(villagerDeets.id)){
            return;
        }
        return <div className="villagerOptions" key={villagerDeets.id}>
            <RoundButton selection={false} villager={villagerDeets.id} onClick={villagersSelect(villagerDeets.id)}/>
            <p>{villagerDeets.name["name-USen"]}</p>
        </div>
        
    })

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
