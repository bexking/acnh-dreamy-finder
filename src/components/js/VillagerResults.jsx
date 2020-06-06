import React, { useState } from 'react';
import '../css/VillagerResults.css';

export default function VillagerResults({selectedVillagers, dreamy, villagerInfo}) {
    const [tLookup, setTLookup] = useState("1");

    const dreamyDeets = villagerInfo.filter(dreamyInfo => {
        return dreamyInfo.id == dreamy
    })[0];

    const numInSpecies = villagerInfo.filter(animals => {
        return animals.species == dreamyDeets.species
    }).length;

    const availableVillagersBySpecies = {};
    villagerInfo.map((v) => {
        if (selectedVillagers.includes(v.id)) {
            return;
        }
        if (availableVillagersBySpecies[v.species] == undefined) {
            availableVillagersBySpecies[v.species] = [];
        }
        availableVillagersBySpecies[v.species].push(v);
    });

    // If you have all the koalas, you can't roll koala for species
    const totalPossibleSpecies = Object.keys(availableVillagersBySpecies).length;

    const chanceOfCorrectSpecies = (1.0 / totalPossibleSpecies);

    // If you have 2/4 koalas, then there's only 2 you can possibly find on the island
    const chanceOfDreamyInSpecies = (1.0 / availableVillagersBySpecies[dreamyDeets.species].length);

    const pEachIsland = chanceOfCorrectSpecies * chanceOfDreamyInSpecies;

    // Total chance of finding dreamy at least once is 1 - the chance that every island visit is not the dreamy.
    const chanceWithTickets = (1.0 - ((1.0 - pEachIsland) ** tLookup));


    const onTextInputChange = (e) => {
        if (!e.target.checkValidity()) {
            return e.preventDefault();
        }
        setTLookup(e.target.value);
    }

    return (
        <div className="resultContainer">
            <div className="resultCard">
                <div className = "vImage">
                    <h3>{dreamyDeets.name["name-USen"]}</h3>
                    <img className="vImage" src={require(`../../assets/images/villagers/${dreamy}.png`)} alt={`${dreamyDeets.name["name-USen"]} image`} />
                </div>

                <div className = "vStats">
                    <p className="stats">{dreamyDeets.name["name-USen"]} is one of {numInSpecies} {dreamyDeets.species.toLowerCase()}s in Animal Crossing: New Horizons.<br />
                    You have {numInSpecies - availableVillagersBySpecies[dreamyDeets.species].length} {dreamyDeets.species.toLowerCase()}s on your island already. <br />
                    There is a {(pEachIsland * 100).toFixed(2)}% chance you will find {dreamyDeets.name["name-USen"]} on each Mystery Island Tour.
                    </p>

                    <h3>Type the number of Nook Miles Tickets you'll use to see the combined chance of finding your dreamies:</h3>

                    <div className="pTickets">
                        <input className="ticketBox" type="text" inputMode="numeric" pattern="[0-9]*" value={tLookup} onChange={onTextInputChange}></input>
                        <label className="label"> tickets = </label>
                        {/* total% */}
                        <h3> &nbsp;{(chanceWithTickets * 100).toFixed(2)}%</h3>
                        <p className="label">chance overall</p>
                    </div>

                </div>
            </div>
            <hr className="divider"/>
        </div>
    )
}
