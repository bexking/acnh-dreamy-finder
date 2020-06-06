import React from 'react'
import '../css/about.css';
import mysteryIsland from "../../assets/judyMysteryIsland.png"

export default function about() {
    return (
        <div className="aboutContent">
            <h1>How does this tool work?</h1>
            <img className="mysteryJudy" src={mysteryIsland} alt="Image of villagere Judy on a mystery island with a player's character." />
            <p>On April 18th, 2020 user ctar17 posted to belltreeforums.com that the Mystery Island Villager RNG pattern was solved.</p>
            <p>See that post <a href="https://www.belltreeforums.com/threads/mystery-island-rng-pattern-solved-with-data-and-stats-tests.511329/">here.</a></p>
            <br />
            <p>
            Through datamining and chi squares they discoverd villagers are rolled first for species - 1/35. After that it rolls for the villager of that species, so the amount of villagers in a species really impacts the probability. The probability of finding a specific octopus is much higher than finding a specific cat, as there are only 3 octopi, but 29 cats!
            </p>
            <p>
            The villager that appears on a mystery island is not affected in any way by the villager’s personality type, and you are able to see a villager that has just moved off your island on a mystery island. The only villagers you won’t be able to see are the villagers you already have!
            </p>
            <p>
            With all that in mind, this website works by using the species of the villagers on your island, and works out your personalised probablility of finding the villager you want.
            </p>
            <p>The data and images were were taken from <a href="http://acnhapi.com/">acnhapi.com</a>.</p>
            <p><a href="https://github.com/alexislours/ACNHAPI"> Check out their Github and shout them a coffee.</a></p>
            <br />
            <p>Happy villager hunting!</p>
        </div>
    )
}
