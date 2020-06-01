import React from 'react';

export default function VillagerResults({selectedVillagers, dreamy, villagerInfo}) {
    
    let dreamyDeets = villagerInfo.filter(dreamyInfo => {
        return dreamyInfo.id == dreamy
    })[0];

    let numInSpecies = villagerInfo.filter(animals => {
        return animals.species == dreamyDeets.species
    }); 

    let selectedDeets = selectedVillagers.map((sVillager) => {
        return villagerInfo.filter(selectedInfo => {
            return selectedInfo.id == sVillager
        })[0];
    });

    let sVillagerSameSp = selectedDeets.filter(animals => {
        return animals.species == dreamyDeets.species
    })

    let pEachIsland = ((1/35)*(1/(numInSpecies.length-sVillagerSameSp.length))*100).toFixed(2);

    return (
        <div>
            <div className = "vImage">
                <h3>{dreamyDeets.name["name-USen"]}</h3> 
                <img src={dreamyDeets.image_uri} alt={`${dreamyDeets.name["name-USen"]} image`} />
            </div>

            <div className = "vStats">
                <p>{dreamyDeets.name["name-USen"]} is one of {numInSpecies.length} {dreamyDeets.species.toLowerCase()}s in Animal Crossing: New Horizons.<br />
                You have {sVillagerSameSp.length} {dreamyDeets.species.toLowerCase()}s on your island already. <br />
                There is a {pEachIsland}% chance you will find {dreamyDeets.name["name-USen"]} on each Mystery Island Tour.
                </p>

                <div className="pTickets">
                    {/* Type how many Nook Mile Tickets you have to see your overall chance: */}
                    <h3></h3>
                    <input type="text"></input>
                    <label>tickets = </label>
                    {/* total% */}
                    <h3></h3>
                    <p>chance overall</p>
                </div>
            </div>
        </div>
    )
}
