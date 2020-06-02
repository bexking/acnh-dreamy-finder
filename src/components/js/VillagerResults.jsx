import React, { useState } from 'react';
import '../css/VillagerResults.css';

export default function VillagerResults({selectedVillagers, dreamy, villagerInfo}) {
    const [tLookup, setTLookup] = useState("");

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
    });

    let pEachIsland = ((1/35)*(1/(numInSpecies.length-sVillagerSameSp.length))*100).toFixed(2);

    let numTickets = tLookup;

    let pWithTickets = ((1.0-((1.0-(pEachIsland/100))**numTickets))*100).toFixed(2);

    

    return (
        <div className="resultContainer">
            <div className="resultCard">
                <div className = "vImage">
                    <h3>{dreamyDeets.name["name-USen"]}</h3> 
                    <img className="vImage" src={dreamyDeets.image_uri} alt={`${dreamyDeets.name["name-USen"]} image`} />
                </div>

                <div className = "vStats">
                    <p className="stats">{dreamyDeets.name["name-USen"]} is one of {numInSpecies.length} {dreamyDeets.species.toLowerCase()}s in Animal Crossing: New Horizons.<br />
                    You have {sVillagerSameSp.length} {dreamyDeets.species.toLowerCase()}s on your island already. <br />
                    There is a {pEachIsland}% chance you will find {dreamyDeets.name["name-USen"]} on each Mystery Island Tour.
                    </p>

                    <h3>Type the number of Nook Miles Tickets you'll use to see the combined chance of finding your dreamies:</h3>

                    <div className="pTickets">
                        <input className="ticketBox" type="number" value={tLookup} onChange={e => setTLookup(e.target.value)}></input>
                        <label className="label"> tickets = </label>
                        {/* total% */}
                        <h3> &nbsp;{pWithTickets}%</h3>
                        <p className="label">chance overall</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
